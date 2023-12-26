import React, { useState } from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomeLink from '../CustomeLink';
import { commonModalClasses } from '../../util/theme';
import FormContainer from '../form/FormContainer';
import { useAuth, useNotification } from '../../hooks';

const validateUserInfo = ({email, password}) => {
   
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!email.trim()) return {ok: false, error: 'Email is missing!'}
    if(!isValidEmail.test(email)) return {ok: false, error: 'Invalid Email!'}

    if(!password.trim()) return {ok: false, error: 'Password is missing!'}
    if(password.length < 8) return {ok: false, error: 'Password must be 8 characters long!'}

    return {ok: true}
}

export default function Signin() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })

    const {updateNotification} = useNotification();
    const {handleLogin, authInfo} = useAuth();
    const { isPending } = authInfo;
    
    console.log(authInfo);

    const handleChange = ({target}) => {
        const {value, name} = target;
        setUserInfo({...userInfo, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {ok, error} = validateUserInfo(userInfo);

        if(!ok) return updateNotification('error', error);

        console.log('login success');

        handleLogin(userInfo.email, userInfo.password)
    }

    return (
        <FormContainer>
            <Container>
                <form onSubmit={handleSubmit} className={commonModalClasses + ' w-72'}>
                    <Title children="Sign in" />
                    <FormInput 
                        name="email" 
                        placeholder="example@gmail.com" label="Email" 
                        type="text" 
                        autoComplete="off"
                        value={userInfo.email}
                        onChange={handleChange} 
                    />
                    <FormInput 
                        name="password" 
                        placeholder="********" 
                        label="Password" 
                        type="password"
                        value={userInfo.password}
                        onChange={handleChange} 
                    />
                    <Submit value="Sign in" busy={isPending} />
                    <div className="flex justify-between">
                        <CustomeLink to="/auth/forget-password" children="Forget Password" />
                        <CustomeLink to="/auth/signup" children="Sign Up" />
                    </div>
                </form>
            </Container>
        </FormContainer>
    )
}