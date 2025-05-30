import { styled } from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 20px;
`;
export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("/bg-skku-map.png");
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  z-index: -1;
`;
export const PageTitle = styled.h1`
  font-size: 38px;
  font-weight: 750;
  margin-bottom: 30px;
  margin-top: -80px;
  color: #222;
`;
export const Highlight = styled.span`
  color: #3182f6; /* 파란색 */
`;
export const LoginCard = styled.div`
  width: 300px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.85);
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #1a73e8;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #1a73e8;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #1664c1;
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: tomato;
  margin-top: 10px;
`;

export const Switcher = styled.span`
  margin-top: 20px;
  font-size: 14px;
  a {
    color: #1a73e8;
    text-decoration: none;
    margin-left: 4px;
    font-weight: bold;
  }
`;