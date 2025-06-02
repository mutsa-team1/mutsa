// 공감 버튼 

import React from "react";
import PropTypes from "prop-types";
import { StyledLikeButton } from "../styles/ComplainCard.styles";

function LikeButton({ likes, onClick }) {
  return (
    <StyledLikeButton onClick={onClick}>
      👍 {likes}
    </StyledLikeButton>
  );
}

LikeButton.propTypes = {
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LikeButton;
