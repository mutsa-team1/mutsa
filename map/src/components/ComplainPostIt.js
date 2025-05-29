import React from "react";

function ComplainPostit({ posts }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginTop: "8px",
      }}
    >
      {posts.map((text, index) => (
        <div
          key={index}
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
          {text}
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
        </div>
      ))}
    </div>
  );
}

export default ComplainPostit;