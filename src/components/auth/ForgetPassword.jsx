import React from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomeLink from '../CustomeLink';
import { commonModalClasses } from '../../util/theme';
import FormContainer from '../form/FormContainer';

export default function ForgetPassword() {
    return (
        <FormContainer>
            <Container>
            <form className={commonModalClasses + ' w-96'}>
                    <Title>Please Enter Your Email</Title>
                    <FormInput name="email" placeholder="example@gmail.com" label="Email" type="text" autocomplete="off" />
                    <Submit value="Send Link" />

                    <div className="flex justify-between">
                        <CustomeLink to="/auth/signin" children="Sign in" />
                        <CustomeLink to="/auth/signup" children="Sign Up" />
                    </div>
                </form>
            </Container>
        </FormContainer>
    )
}