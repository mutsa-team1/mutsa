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

export const StyledAddButton = styled.button`
  width: 48px;
  height: 48px;
  background-color: ${({ isAdding }) => (isAdding ? "#EF4444" : "#3B82F6")};
  color: white;
  font-size: 30px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s ease;
`;


export const PostitContainer = styled.div`
  position: relative;
  width: 140px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.05);
  border: 2px;
  border-radius: 2px;
  padding: 10px;
  font-size: 13px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  overflow: hidden;
`;

export const FoldedCorner1 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-top: 16px solid rgba(0, 0, 0, 0.05);
  z-index: 1;
`;

export const FoldedCorner2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 28px;
  height: 28px;
  background: transparent;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Pill = styled.div`
  background-color: #6b6b6b;
  color: white;
  padding: 6px 16px;
  border-radius: 999px;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #ddd;
  margin-left: 8px;
`;
