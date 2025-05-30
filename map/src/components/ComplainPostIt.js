import React from "react";
import LikeButton from "./LikeButton";

function ComplainPostit({ content, likes, onLike }) {
  return (
    <div
      style={{
        filter: "drop-shadow(0 0 12px rgba(0, 0, 0, 0.08))",
        position: "relative",
        width: "160px",
        height: "120px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          position: "relative",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 12% 100%, 0% 88%)",
          borderRadius: "4px",
          boxSizing: "border-box",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontSize: "14px",
          fontWeight: 500,
          color: "#333",
        }}
      >
        <div style={{ wordBreak: "keep-all", zIndex: 2 }}>{content}</div>

        <div style={{ display: "flex", justifyContent: "flex-end", zIndex: 2 }}>
          <LikeButton likes={likes} onClick={onLike} />
        </div>

        {/* 접힌 귀 ::before 대체 */}
        <div
          style={{
            position: "absolute",
            left: 2,
            bottom: -5,
            width: "12%",
            aspectRatio: "1 / 1",
            background: "linear-gradient(220deg, #e0e0e0 50%, transparent 50%)",
          }}
        />
      </div>
    </div>
  );
}

export default ComplainPostit;
