import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

function NewPostit({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <textarea
          placeholder="내용을 입력하세요..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.textarea}
        />
        <div style={styles.buttonWrap}>
          <SubmitButton
            onClick={() => {
              if (text.trim()) onSubmit(text);
            }}
          />
        </div>
        {/* 접힌 귀 */}
        <div style={styles.foldedCorner} />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    filter: "drop-shadow(0 0 12px rgba(0, 0, 0, 0.08))",
    position: "relative",
    width: "240px",
    height: "230px",
  },
  card: {
    width: "100%",
    height: "100%",
    backgroundColor: "#edf7f5",
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
  },
  textarea: {
    width: "100%",
    height: "70%",
    border: "none",
    resize: "none",
    background: "transparent",
    outline: "none",
    fontSize: "14px",
    color: "#333",
    fontFamily: "inherit",
  },
  buttonWrap: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "8px",
    zIndex: 2,
  },
  foldedCorner: {
    position: "absolute",
    left: 2,
    bottom: -5,
    width: "12%",
    aspectRatio: "1 / 1",
    background: "linear-gradient(220deg, #e0e0e0 50%, transparent 50%)",
    zIndex: 1,
  },
};

export default NewPostit;
