import React from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomeLink from '../CustomeLink';
import { commonModalClasses } from '../../util/theme';
import FormContainer from '../form/FormContainer';

export default function Signin() {
    return (
        <FormContainer>
            <Container>
                <form className={commonModalClasses + ' w-72'}>
                    <Title children="Sign in" />
                    <FormInput name="email" placeholder="example@gmail.com" label="Email" type="text" autoComplete="off" />
                    <FormInput name="password" placeholder="********" label="Password" type="password" />
                    <Submit value="Sign in" />
                    <div className="flex justify-between">
                        <CustomeLink to="/auth/forget-password" children="Forget Password" />
                        <CustomeLink to="/auth/signup" children="Sign Up" />
                    </div>
                </form>
            </Container>
        </FormContainer>
    )
}