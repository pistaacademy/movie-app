import React, {useState} from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomeLink from '../CustomeLink';
import { commonModalClasses } from '../../util/theme';
import FormContainer from '../form/FormContainer';

const validateUserInfo = ({name, email, password}) => {
   
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isValidName = /^[a-z A-Z]+$/

    if(!name.trim()) return {ok: false, error: 'Name is missing!'}
    if(!isValidName.test(name)) return {ok: false, error: 'Invalid Name!'}

    if(!email.trim()) return {ok: false, error: 'Email is missing!'}
    if(!isValidEmail.test(email)) return {ok: false, error: 'Invalid Email!'}

    if(!password.trim()) return {ok: false, error: 'Password is missing!'}
    if(password.length < 8) return {ok: false, error: 'Password must be 8 characters long!'}

    return {ok: true}
}

export default function Signup() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
    })
    const {name, email, password} = userInfo;

    const handleChange = ({target}) => {
        const {value, name} = target;
        setUserInfo({...userInfo, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {ok, error} = validateUserInfo(userInfo);

        if(!ok) return console.log(error);

        if(ok) return console.log(userInfo)
    }

    return (
        <FormContainer>
            <Container>
                <form onSubmit={handleSubmit} className={commonModalClasses + ' w-72'}>
                    <Title children="Sign up" />
                    <FormInput 
                        name="name" 
                        placeholder="Hamed Ahmadi" 
                        label="Name" type="text" 
                        autoComplete="off"
                        value={name} 
                        onChange={handleChange}
                    />
                    <FormInput 
                        name="email" 
                        placeholder="example@gmail.com" 
                        label="Email" type="text" 
                        autoComplete="off"
                        value={email} 
                        onChange={handleChange}
                    />
                    <FormInput 
                        name="password" 
                        placeholder="********" 
                        label="Password" 
                        type="password" 
                        value={password}
                        onChange={handleChange}
                    />
                    
                    <Submit value="Sign up" />

                    <div className="flex justify-between">
                        <CustomeLink to="/auth/forget-password" children="Forget Password" />
                        <CustomeLink to="/auth/signin" children="Sign In" />
                    </div>
                </form>
            </Container>
        </FormContainer>
    )
}