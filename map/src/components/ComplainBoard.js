import React, { useState } from "react";
import ComplainCard from "./ComplainCard";
import AddButton from "./AddButton";
import NewPostit from "./NewPostIt";
import RecentLine from "./RecentLine";
import ComplainPostit from "./ComplainPostIt";
import { dummyComplains } from "../data/dummyComplains";
import { AddButtonContainer, BoardContainer, CloseButton, GridContainer, GridItem, GridRow } from "../styles/ComplainBoard.styles";

const ROW_COLORS = {
  1: ["#F8BDBD"],
  2: ["#C5CAE9", "#DCEFBF", "#FFF59D"],
  3: ["#C3AEE5", "#A0D3FA"],
};


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
      const span = ratio * 12; // 정수로 반올림하지 않고 그대로 소수점 유지
      spans.push({ ...card, row: Number(row), span: Math.max(span, 1) });
    });
  });

  return spans;
}

function ComplainBoard({ isOpen, buildingName, onClose }) {
  const [isAdding, setIsAdding] = useState(false);
  const [posts, setPosts] = useState([]);
  const [cards, setCards] = useState(dummyComplains);

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

  const cardsWithSpans = calculateSpans(cards);


  return (
    <BoardContainer>
      <CloseButton onClick={onClose} aria-label="Close">✕</CloseButton>
      <h2>{buildingName}</h2>

      {/* flex 기반 레이아웃으로 수정 */}
      <GridContainer>
        {[1, 2, 3].map((row) => (
          <GridRow key={row}>
            {cardsWithSpans
              .filter((card) => card.row === row)
              .map((card, idx) => {
                const safeColor = ROW_COLORS[row][idx] || "#ffffff";
                const widthPercent = (card.span / 12) * 100;

                return (
                  <GridItem
                    key={card.id}
                    style={{
                      width: `${widthPercent}%`,
                      height: "100%",
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
