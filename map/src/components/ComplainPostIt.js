// 새로운 불만 게시글 추가할 때 뜨는 포스트잇(입력창)

import React from "react";
import LikeButton from "./LikeButton";

function ComplainPostit({ key, content, likes, onLike }) {
  return (
    <div
      key={key}
      style={{
        position: "relative",
        width: "140px",
        height: "100px",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        border: "2px",
        borderRadius: "2px",
        padding: "10px",
        fontSize: "13px",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {content}
      {/* 접힌 귀퉁이 효과 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 0,
          height: 0,
          borderLeft: "16px solid transparent",
          borderTop: "16px solid rgba(0,0,0,0.05)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "28px",
          height: "28px",
          background: "transparent",
          clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          zIndex: 1,
        }}
      />
      <LikeButton likes={likes} onClick={onLike} />
    </div>
  );
}

export default ComplainPostit;