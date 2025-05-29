import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Wrapper,Form,Input,Title, Switcher } from "../components/AuthComponents";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";


const CreateAccount = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onChange = (e) => {
        const {target: {name, value}} = e;
        if(name === "name"){
            setName(value)
        }else if(name === "email"){
            setEmail(value)
        }else if(name === "password"){
            setPassword(value)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        updateProfile(credentials.user, {
            name: name
        });
        navigate("/");
    }

    return (
        <Wrapper>
            <Title>Join SKKU Complaint Map</Title>
            <Form onSubmit={onSubmit}>
                <Input type="text" name="name" value={name} onChange={onChange} placeholder="이름을 입력해주세요" required />
                <Input type="email" name="email" value={email} onChange={onChange} placeholder="email을 입력해주세요" required />
                <Input type="password" name="password" value={password} onChange={onChange} placeholder="비밀번호를 입력해주세요" required />
                <Input type="submit" value="확인" />
            </Form>
            <Switcher>
                Already have an account? <Link to="/login">Log in &rarr;</Link>
            </Switcher>
        </Wrapper> 
    );
}
export default CreateAccount