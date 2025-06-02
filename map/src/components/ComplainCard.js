// 불만 클라우드 안 각각의 불만 카드 
import React from "react";
import PropTypes from "prop-types";
import { CardContainer, StyledLikeButton } from "../styles/ComplainCard.styles";

function ComplainCard({ content, likes, onLike, color }) {
  return (
    <CardContainer color={color}>
      <p style={{ margin: 0 }}>{content}</p>
      <StyledLikeButton onClick={onLike}>
        👍 {likes}
      </StyledLikeButton>
    </CardContainer>
  );
}

ComplainCard.propTypes = {
  content: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default ComplainCard;
