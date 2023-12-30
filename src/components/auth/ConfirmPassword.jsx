import React from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
// import CustomeLink from '../CustomeLink';
import { commonModalClasses } from '../../util/theme';
import FormContainer from '../form/FormContainer';
import { useSearchParams } from "react-router-dom";

export default function ConfirmPassword() {

    const [searchParams] = useSearchParams();

    const token = searchParams.get('token')
    const id = searchParams.get('id')
    console.log(token, id)

    // http://localhost:8000/reset-password?token=97f01d4775236c9535e0473b4f1dc2a263a323d0e38b0fd952ad733a60f2&id=658b8d455576cc06f341c99f

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
                        autocomplete="off" 
                    />
                    <FormInput 
                        name="confirmPassword" 
                        placeholder="********" 
                        label="Confirm Password" 
                        type="password" 
                        autocomplete="off" 
                    />
                    <Submit value="Confirm Password" />

                </form>
            </Container>
        </FormContainer>
    )
}