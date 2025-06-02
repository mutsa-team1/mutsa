import React from "react";
import {
  PostitContainer,
  FoldedCorner1,
  FoldedCorner2,
} from "../styles/ComplainBoard.styles";
import { StyledLikeButton } from "../styles/ComplainCard.styles";

function ComplainPostit({ content, likes, onLike }) {
  return (
    <PostitContainer>
      {content}
      {/* 접힌 귀퉁이 효과 */}
      <FoldedCorner1 />
      <FoldedCorner2 />
      <StyledLikeButton onClick={onLike}>👍 {likes}</StyledLikeButton>
    </PostitContainer>
  );
}

export default ComplainPostit;

