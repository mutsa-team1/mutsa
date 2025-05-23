import { signInWithEmailAndPassword } from "firebase/auth";
import { Wrapper,Form,Input,Title } from "../components/auth-components";
import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onChange = (e) => {
        const {target: {name, value}} = e;
        if(name === "email"){
            setEmail(value)
        }else if(name === "password"){
            setPassword(value)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
    }

    return (
        <Wrapper>
            <Title>Log into SKKU Complaint Map</Title>
            <Form onSubmit={onSubmit}>
                <Input type="email" name="email" value={email} onChange={onChange} placeholder="email을 입력해주세요" required />
                <Input type="password" name="password" value={password} onChange={onChange} placeholder="비밀번호를 입력해주세요" required />
                <Input type="submit" value="확인" />
            </Form>
        </Wrapper>
    );
}
export default Login