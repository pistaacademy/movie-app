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
import {verifyPasswordResetToken} from '../../api/auth';

export default function ConfirmPassword() {

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
            <form className={commonModalClasses + ' w-96'}>
                    <Title>Enter New Password</Title>
                    <FormInput 
                        name="password" 
                        placeholder="********" 
                        label="New Password" 
                        type="password" 
                        autoComplete="off" 
                    />
                    <FormInput 
                        name="confirmPassword" 
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