import React, { useState } from "react";
import ComplainCard from "./ComplainCard";
import AddButton from "./AddButton";
import NewPostit from "./NewPostIt";
import RecentLine from "./RecentLine";
import ComplainPostit from "./ComplainPostIt";
import { dummyComplains } from "../data/dummyComplains"; // 더미 데이터로 분리함 (INITIAL_ROWS 였던 것...)

const CARD_COLORS = ["#f8c8c8", "#fff4b3", "#d0f0c0", "#fff4b3", "#d9ccf1", "#bfe3ff"];

/**
 * 카드 배열을 받아서 각 row에 공감수 비율로 span 계산
 * - index 기반으로 row를 지정
 * - 각 row에서 likes 총합을 기준으로 비율 계산
 * @param {Array} cards
 * @returns {Array} row, span이 계산된 카드 배열
 */
function calculateSpans(cards) {
  const rows = { 1: [], 2: [], 3: [] };

  // index 기반으로 row를 할당
  cards.forEach((card, index) => {
    if (index === 0) rows[1].push(card);  
    else if (index >= 1 && index <= 3) rows[2].push(card);
    else rows[3].push(card);
  });

  // 각 row에서 공감 수 비율로 span 계산
  const spans = [];
  Object.entries(rows).forEach(([row, rowCards]) => {
    const totalLikes = rowCards.reduce((sum, c) => sum + c.likes, 0);
    rowCards.forEach((card) => {
      const ratio = card.likes / totalLikes;
      const span = Math.round(ratio * 12);
      spans.push({ ...card, row: Number(row), span: Math.max(span, 1) });
    });
  });

  return spans;
}

/**
 * ComplainBoard 컴포넌트
 * - isOpen: 열림 여부
 * - buildingName: 제목으로 표시될 건물명
 * - onClose: 닫기 버튼 클릭 시 실행할 콜백
 */
function ComplainBoard({ isOpen, buildingName, onClose }) {
  const [isAdding, setIsAdding] = useState(false); // 새로운 포스트잇 작성 중 여부부
  const [posts, setPosts] = useState([]); // 새로운 포스트잇 목록 
  const [cards, setCards] = useState(dummyComplains); // 클라우드 (더미 데이터)

  if (!isOpen) return null;

  const handleLike = (index) => {
    setCards((prev) =>
      prev.map((card, idx) =>
        idx === index ? { ...card, likes: card.likes + 1 } : card
      )
    );
  };

  // 포스트잇 작성창 열기/닫기 toggle
  const handleToggle = () => {
    setIsAdding((prev) => !prev);
  };

  const handleSubmit = (text) => {
    setPosts([text, ...posts]);
    setIsAdding(false);
  };

  const cardsWithSpans = calculateSpans(cards);
  let columnStarts = { 1: 1, 2: 1, 3: 1 };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "400px",
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        borderRadius: "12px",
        zIndex: 1000,
        padding: "20px",
        overflowY: "auto",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: "transparent",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
        aria-label="Close"
      >
        ✕
      </button>
      <h2>{buildingName}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          height: "300px",
          gap: "10px",
        }}
      >
        {cardsWithSpans.map((card, index) => {
          const gridColumn = `${columnStarts[card.row]} / span ${card.span}`;
          columnStarts[card.row] += card.span;
          const safeColor = CARD_COLORS[index % CARD_COLORS.length] || "#ffffff";
          return (
            <div
              key={index}
              style={{
                gridColumn,
                gridRow: `${card.row}`,
                overflow: "hidden",
              }}
            >
              <ComplainCard
                content={card.content}
                likes={card.likes}
                onLike={() => handleLike(index)}
                color={safeColor}
              />
            </div>
          );
        })}
      </div>
      <RecentLine />
      <ComplainPostit posts={posts} />
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {isAdding && (
          <div style={{ marginBottom: "12px" }}>
            <NewPostit onSubmit={handleSubmit} />
          </div>
        )}
        <AddButton onClick={handleToggle} isAdding={isAdding} />
      </div>
    </div>
  );
}

export default ComplainBoard;
