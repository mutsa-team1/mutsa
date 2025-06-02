// 새로운 postit 추가하는 버튼 
// 클릭 시 포스트잇 뜸

import React from "react";
import { StyledAddButton } from "../styles/ComplainBoard.styles";

function AddButton({ onClick, isAdding }) {
  return (
    <StyledAddButton onClick={onClick} isAdding={isAdding}>
      {isAdding ? "×" : "+"}
    </StyledAddButton>
  );
}

export default AddButton;