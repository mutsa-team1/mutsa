import styled from "styled-components";

// export const Container = styled.div`
//   width: 240px;
//   height: 230px;
//   background-color: #edf7f5;
//   border-radius: 2px;
//   padding: 12px;
//   box-shadow: 4px 8px 8px 0px #00000040;
//   position: relative;
//   border: 2px;
//   box-sizing: border-box;
// `;

// export const Textarea = styled.textarea`
//   width: 100%;
//   height: 70%;
//   border: none;
//   resize: none;
//   background: transparent;
//   outline: none;
//   font-size: 14px;
//   color: #333;
//   font-family: inherit;
// `;

// export const ButtonWrap = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-top: 8px;
// `;

// export const Corner = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 0;
//   height: 0;
//   border-left: 24px solid transparent;
//   border-top: 24px solid rgba(0, 0, 0, 0.1);
// `;

export const StyledSubmitButton = styled.button`
  font-size: 13px;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 4px 12px;
  cursor: pointer;
  margin-top: 25px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Wrapper = styled.div`
  filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.08));
  position: relative;
  width: 240px;
  height: 230px;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #edf7f5;
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

export const Textarea = styled.textarea`
  width: 100%;
  height: 70%;
  border: none;
  resize: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  color: #333;
  font-family: inherit;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
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
