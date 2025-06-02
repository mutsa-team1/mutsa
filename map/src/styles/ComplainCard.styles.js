import styled from "styled-components";

export const CardContainer = styled.div`
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 12px;
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledLikeButton = styled.button`
  border: none;
  background: transparent;
  color: #888;
  font-weight: bold;
  cursor: pointer;
  text-align: right;
  margin-top: 8px;
  align-self: flex-end;
  font-size: 16px;
  transition: color 0.2s ease;

  &:hover {
    color: #555;
  }
`;
