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
  position: fixed;
  bottom: calc(50% - 200px + 16px); /* BoardContainer의 top 위치 + bottom 여백 */
  right: calc(50% - 300px + 16px); /* BoardContainer의 left 위치 + right 여백 */
  // bottom: 16px;
  // right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1000;
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

export const Wrapper = styled.div`
  filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.08));
  position: relative;
  flex: 0 0 140px; /* 고정 너비 140px */
  height: 120px;
  box-sizing: border-box;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 12% 100%, 0% 88%);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const Content = styled.div`
  word-break: keep-all;
  z-index: 2;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 2;
`;

export const FoldedCorner = styled.div`
  position: absolute;
  left: 2px;
  bottom: -5px;
  width: 12%;
  aspect-ratio: 1 / 1;
  background: linear-gradient(220deg, #e0e0e0 50%, transparent 50%);
  z-index: 1;
`;
