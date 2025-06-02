import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {Wrapper,LoginCard,Form,Input,Title,Button,Switcher,Error,PageTitle, Background
} from "../styles/AuthComponents.styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(credentials.user, {
        displayName: name,
      });
      navigate("/");
    } catch (error) {
      console.error("회원가입 오류:", error.message);
      setErrorMsg("회원가입에 실패했습니다. 이메일 형식이나 비밀번호를 확인하세요.");
    }
  };

  return (
    <Wrapper>
        <Background/>
        <PageTitle>SKKU Complaint Map</PageTitle>
      <LoginCard>
        <Title>회원가입</Title>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="이름"
            required
          />
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
          <Button type="submit">회원가입</Button>
          {errorMsg && <Error>{errorMsg}</Error>}
        </Form>
        <Switcher>
          Already have an account?{" "}
          <Link to="/login">Log in →</Link>
        </Switcher>
      </LoginCard>
    </Wrapper>
  );
};

export default CreateAccount;