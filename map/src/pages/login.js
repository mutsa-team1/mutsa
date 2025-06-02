import { signInWithEmailAndPassword } from "firebase/auth";
import {
  Wrapper,
  LoginCard,
  Form,
  Input,
  Title,
  Button,
  Switcher,
  Error,
  PageTitle,
  Background,
} from "../styles/AuthComponents.styles";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("로그인 오류:", error.message);
      setErrorMsg("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <Wrapper>
        <Background />
      <PageTitle>SKKU <Highlight>Complaint Map</Highlight></PageTitle>
      <LoginCard>
        <Title>로그인</Title>
        <Form onSubmit={onSubmit}>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="이메일"
            required
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="비밀번호"
            required
          />
          <Button type="submit">로그인</Button>
          {errorMsg && <Error>{errorMsg}</Error>}
        </Form>
        <Switcher>
          Don't have an account? <Link to="/create-account">Create One →</Link>
        </Switcher>
      </LoginCard>
    </Wrapper>
  );
};

export default Login;
