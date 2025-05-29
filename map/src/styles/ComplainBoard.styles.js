import styled from "styled-components";

export const BoardContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  gap: 10px;
`;

export const GridRow = styled.div`
  display: flex;
  gap: 10px;
  height: calc((300px - 20px) / 3); /* 3줄, gap 2개(10px씩) */
`;

export const GridItem = styled.div`
  overflow: hidden;
  transition: width 0.3s ease;
  height: 100%;
  display: flex;
`;

export const AddButtonContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PostItWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;