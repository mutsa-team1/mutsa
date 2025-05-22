import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

function NewPostit({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <div style={styles.container}>
      <textarea
        placeholder="내용을 입력하세요..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.textarea}
      />
      <div style={styles.corner} />
      <div style={styles.transparentCorner} />
      <div style={styles.buttonWrap}>
        <SubmitButton
          onClick={() => {
            if (text.trim()) onSubmit(text);
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "240px",
    height: "230px",
    backgroundColor: "#edf7f5",
    borderRadius: "2px",
    padding: "12px",
    boxShadow: "4px 8px 8px 0px #00000040",
    position: "relative",
    border: "2px",
    boxSizing: "border-box",
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
  },
  corner: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0",
    height: "0",
    borderLeft: "24px solid transparent",
    borderTop: "24px solid rgba(0,0,0,0.1)",
  },
};

export default NewPostit;
