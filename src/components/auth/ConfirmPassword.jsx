import React from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomeLink from '../CustomeLink';
import { commonModalClasses } from '../../util/theme';
import FormContainer from '../form/FormContainer';

export default function ConfirmPassword() {
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