// NewPostIt 안 등록 버튼

import React from "react";
import { StyledSubmitButton } from "../styles/NewPostit.styles";

function SubmitButton({ onClick }) {
  return <StyledSubmitButton onClick={onClick}>등록</StyledSubmitButton>;
}

export default SubmitButton;