import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import {
  Container,
  Textarea,
  ButtonWrap,
  Corner,
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
        <SubmitButton
          onClick={() => {
            if (text.trim()) onSubmit(text);
          }}
        />
      </ButtonWrap>
    </Container>
  );
}

export default NewPostit;
