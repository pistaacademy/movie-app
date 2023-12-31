import React, { useEffect, useState } from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
// import CustomeLink from '../CustomeLink';
import { commonModalClasses } from '../../util/theme';
import FormContainer from '../form/FormContainer';
import { useNavigate, useSearchParams } from "react-router-dom";
import { ImSpinner3 } from 'react-icons/im';
import { useNotification } from '../../hooks';
import {resetPassword, verifyPasswordResetToken} from '../../api/auth';

export default function ConfirmPassword() {

    const [password, setPassword] = useState({
        one: '',
        two: ''
    })

    const [isVerifying, setIsVerrifying] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const [searchParams] = useSearchParams();

    const token = searchParams.get('token')
    const id = searchParams.get('id')

    const {updateNotification} = useNotification();
    const navigate = useNavigate()

    useEffect(() => {
        isValidToken()
    },[])


    const isValidToken = async () => {
        const {error, valid} = await verifyPasswordResetToken(token, id);
        setIsVerrifying(false);
        if(error) {
            navigate('/auth/reset-password', {replace: true});
            return updateNotification('error', error);
        }

        if(!valid) {
            setIsValid(false);
            return navigate('/auth/reset-password', {replace: true});
        }
        setIsValid(true)
    }

    const handleChange = ({target}) => {
        const {name, value} = target;
        setPassword({...password, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!password.one.trim())
            return updateNotification("error","Password is missing!");
        if(password.one.trim().length < 8)
            return updateNotification("error","Password must be 8 characters long!");
        if (password.one !== password.two)
            return updateNotification("error", "Password do not match!")

        const {error, message} = await resetPassword({
            newPassword: password.one,
            userId: id,
            token,
        })

        if(error) return updateNotification("error", error);

        updateNotification("success", message);
        navigate('/auth/signin', {replace: true})
    }

    if(isVerifying)
        return (
            <FormContainer>
                <Container>
                    <div className="flex space-x-2 items-center">
                        <h1 className="text-4xl font-semibold dark:text-white text-primary">
                            Please wait we are verifying your token!
                        </h1>
                        <ImSpinner3 className='animate-spin text-4xl dark:text-white text-primary' />
                    </div>
                </Container>
            </FormContainer>
            )

    if(!isValid)
            return (
                <FormContainer>
                    <Container>
                        <h1 className="text-4xl font-semibold dark:text-white text-primary">
                            Sorry the token is invalid!
                        </h1>
                    </Container>
                </FormContainer>
                )
 

    return (
        <FormContainer>
            <Container>
            <form onSubmit={handleSubmit} className={commonModalClasses + ' w-96'}>
                    <Title>Enter New Password</Title>
                    <FormInput
                        value={password.one}
                        onChange={handleChange} 
                        name="one" 
                        placeholder="********" 
                        label="New Password" 
                        type="password" 
                        autoComplete="off" 
                    />
                    <FormInput
                        value={password.two}
                        onChange={handleChange}  
                        name="two" 
                        placeholder="********" 
                        label="Confirm Password" 
                        type="password" 
                        autoComplete="off" 
                    />
                    <Submit value="Confirm Password" />

                </form>
            </Container>
        </FormContainer>
    )
}