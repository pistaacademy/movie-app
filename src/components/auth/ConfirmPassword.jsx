import React from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomeLink from '../CustomeLink';

export default function ConfirmPassword() {
    return (
        <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
            <Container>
                <form className='bg-secondary rounded p-6 w-96 space-y-6'>
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
        </div>
    )
}