import React from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomeLink from '../CustomeLink';

export default function Signin() {
    return (
        <div className="fixed inset-0 dark:bg-primary -z-10 flex justify-center items-center">
            <Container>
                <form className='dark:bg-secondary rounded p-6 w-72 space-y-6'>
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
        </div>
    )
}