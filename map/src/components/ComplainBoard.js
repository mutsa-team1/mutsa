import React, { useState, useMemo } from "react";
import ComplainCard from "./ComplainCard";
import AddButton from "./AddButton";
import NewPostit from "./NewPostIt";
import RecentLine from "./RecentLine";
import ComplainPostit from "./ComplainPostIt";
import { dummyComplains } from "../data/dummyComplains";
import {
  AddButtonContainer,
  BoardContainer,
  CloseButton,
  GridContainer,
  GridItem,
  GridRow,
} from "../styles/ComplainBoard.styles";

// 카드 색상을 행(row)별로 정확히 지정
const ROW_COLORS = {
  1: ["#F8BDBD"],
  2: ["#C5CAE9", "#DCEFBF", "#FFF59D"],
  3: ["#C3AEE5", "#A0D3FA"],
};

// 공감수 비율 기반으로 span 계산
function calculateSpans(cards) {
  const sorted = [...cards].sort((a, b) => b.likes - a.likes);
  const order = [0, 5, 4, 2, 1, 3];
  const rows = { 1: [], 2: [], 3: [] };

  order.forEach((sortedIdx, placementIdx) => {
    const card = sorted[sortedIdx];
    if (!card) return;

    if (placementIdx === 0) rows[1].push(card);
    else if (placementIdx >= 1 && placementIdx <= 3) rows[2].push(card);
    else rows[3].push(card);
  });

  const spans = [];
  Object.entries(rows).forEach(([row, rowCards]) => {
    const totalLikes = rowCards.reduce((sum, c) => sum + c.likes, 0);
    rowCards.forEach((card) => {
      const ratio = card.likes / totalLikes;
      const span = ratio * 12; // 소수점까지 유지
      spans.push({ ...card, row: Number(row), span: Math.max(span, 1) });
    });
  });

  return spans;
}

function ComplainBoard({ isOpen, buildingName, onClose }) {
  const [isAdding, setIsAdding] = useState(false);
  const [posts, setPosts] = useState([]);
  const [cards, setCards] = useState(dummyComplains);

  // useMemo로 최적화: cards가 바뀔 때만 span 계산 (참고: useMemo는 컴포넌트 최상단에서 조건문 밖에 있어야 함)
  const cardsWithSpans = useMemo(() => calculateSpans(cards), [cards]);

  if (!isOpen) return null;

  const handleLike = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, likes: card.likes + 1 } : card
      )
    );
  };

  const handleToggle = () => setIsAdding((prev) => !prev);

  const handleSubmit = (text) => {
    setPosts([text, ...posts]);
    setIsAdding(false);
  };

  return (
    <BoardContainer>
      <CloseButton onClick={onClose} aria-label="Close">
        ✕
      </CloseButton>
      <h2>{buildingName}</h2>

      <GridContainer>
        {[1, 2, 3].map((row) => (
          <GridRow key={row}>
            {cardsWithSpans
              .filter((card) => card.row === row)
              .map((card, idx) => {
                const safeColor = ROW_COLORS[row][idx] || "#ffffff";
                const widthPercent = ((card.span / 12) * 100).toFixed(1);

                return (
                  <GridItem
                    key={card.id}
                    style={{
                      width: `${widthPercent}%`,
                    }}
                  >
                    <ComplainCard
                      content={card.content}
                      likes={card.likes}
                      onLike={() => handleLike(card.id)}
                      color={safeColor}
                    />
                  </GridItem>
                );
              })}
          </GridRow>
        ))}
      </GridContainer>

      <RecentLine />
      <ComplainPostit posts={posts} />

      <AddButtonContainer>
        {isAdding && (
          <div style={{ marginBottom: "12px" }}>
            <NewPostit onSubmit={handleSubmit} />
          </div>
        )}
        <AddButton onClick={handleToggle} isAdding={isAdding} />
      </AddButtonContainer>
    </BoardContainer>
  );
}

export default ComplainBoard;
