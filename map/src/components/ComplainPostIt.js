// 새로운 불만 게시글 추가할 때 뜨는 포스트잇(입력창)

import React from "react";
import LikeButton from "./LikeButton";
import {
  PostitContainer,
  FoldedCorner1,
  FoldedCorner2,
} from "../styles/ComplainBoard.styles";

function ComplainPostit({ content, likes, onLike }) {
  return (
    <PostitContainer>
      {content}
      {/* 접힌 귀퉁이 효과 */}
      <FoldedCorner1 />
      <FoldedCorner2 />
      <LikeButton likes={likes} onClick={onLike} />
    </PostitContainer>
  );
}

export default ComplainPostit;
