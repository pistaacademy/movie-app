import React, { useState } from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomeLink from '../CustomeLink';
import { commonModalClasses } from '../../util/theme';
import FormContainer from '../form/FormContainer';
import { forgetPassword } from '../../api/auth';
import { useNotification } from '../../hooks';
import { isValidEmail } from '../../util/helper';

export default function ForgetPassword() {
    const [email, setEmail] = useState('');

    const {updateNotification} = useNotification();

    const handleChange = ({ target }) => {
        const { value } = target;
        setEmail(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!isValidEmail(email)) return updateNotification('error', 'Invalid email!')
        const {error, message} = await forgetPassword(email);
        if(error) return updateNotification('error', error)
        updateNotification('success', message)
    }

    return (
        <FormContainer>
            <Container>
            <form onSubmit={handleSubmit} className={commonModalClasses + ' w-96'}>
                    <Title>Please Enter Your Email</Title>
                    <FormInput 
                        onChange={handleChange} 
                        value={email} 
                        name="email" 
                        placeholder="example@gmail.com" 
                        label="Email" 
                        type="text" 
                        autoComplete="off" 
                    />
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