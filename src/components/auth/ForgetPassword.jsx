import React from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomeLink from '../CustomeLink';


export default function ForgetPassword() {
    return (
        <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
            <Container>
                <form className='bg-secondary rounded p-6 w-96 space-y-6'>
                    <Title>Please Enter Your Email</Title>
                    <FormInput name="email" placeholder="example@gmail.com" label="Email" type="text" autocomplete="off" />
                    <Submit value="Send Link" />

                    <div className="flex justify-between">
                        <CustomeLink to="/auth/signin" children="Sign in" />
                        <CustomeLink to="/auth/signup" children="Sign Up" />
                    </div>
                </form>
            </Container>
        </div>
    )
}