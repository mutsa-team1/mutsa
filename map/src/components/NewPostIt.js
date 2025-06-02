import React, { useState } from "react";
// import SubmitButton from "./SubmitButton";
import {
  Container,
  Textarea,
  ButtonWrap,
  Corner,
  StyledSubmitButton,
} from "../styles/NewPostit.styles";

function NewPostit({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <Container>
      <Textarea
        placeholder="내용을 입력하세요..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Corner />
      <ButtonWrap>
        <StyledSubmitButton onClick={() => {
          if (text.trim()) onSubmit(text);
        }}>등록</StyledSubmitButton>
      </ButtonWrap>
    </Container>
  );
}

export default NewPostit;

