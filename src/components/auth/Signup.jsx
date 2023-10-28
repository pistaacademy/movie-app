import React from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomeLink from '../CustomeLink';
import { commonModalClasses } from '../../util/theme';
import FormContainer from '../form/FormContainer';

export default function Signup() {
    return (
        <FormContainer>
            <Container>
                <form className={commonModalClasses + ' w-72'}>
                    <Title children="Sign up" />
                    <FormInput name="name" placeholder="Hamed Ahmadi" label="Name" type="text" autocomplete="off" />
                    <FormInput name="email" placeholder="example@gmail.com" label="Email" type="text" autocomplete="off" />
                    <FormInput name="password" placeholder="********" label="Password" type="password" />
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