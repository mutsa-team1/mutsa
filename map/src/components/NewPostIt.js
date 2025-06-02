import React, { useState } from "react";
// import SubmitButton from "./SubmitButton";
import {
  Wrapper, Card, Textarea, ButtonWrap, FoldedCorner,
  StyledSubmitButton
} from "../styles/NewPostit.styles";

function NewPostit({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <Wrapper>
      <Card>
        <Textarea
          placeholder="내용을 입력하세요..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ButtonWrap>
          <StyledSubmitButton onClick={() => {
            if (text.trim()) onSubmit(text);
          }}>등록</StyledSubmitButton>
        </ButtonWrap>
      </Card>
      <FoldedCorner />
    </Wrapper>
  );
}

export default NewPostit;

