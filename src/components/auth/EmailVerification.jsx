import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomeLink from '../CustomeLink';
import { commonModalClasses } from '../../util/theme';
import FormContainer from '../form/FormContainer';

const OTP_LENGTH = 6;

export default function EmailVerification() {
    const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(''))
    const [activeOtpIndex, setActiveOtpIndex] = useState(0)

    const navigate = useNavigate();
    const inputRef = useRef();
    const {state} = useLocation();
    const user = state?.user;

    const focusNextInputField = (index) => {
        setActiveOtpIndex(index + 1)
    }

    const focusPrevInputField = (index) => {
        let nextIndex;
        const diff = index - 1;
        nextIndex = diff !== 0 ? diff : 0
        setActiveOtpIndex(nextIndex)
    }

    const handleOtpChange = ({target}, index) => {
        const {value} = target;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length-1, value.length);
        
        if(!value) focusPrevInputField(index)
        else focusNextInputField(index)
        setOtp([...newOtp]);

    }

    const handleKeyDown = ({key}, index) => {
        if(key === 'Backspace') {
            focusPrevInputField(index)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //
    }

    useEffect(() => {
        inputRef.current?.focus()
        console.log(inputRef)
    },[activeOtpIndex])

    useEffect(() =>{
        if(!user) navigate('/not-found')
    },[user])

    return (
        <FormContainer>
            <Container>
                <form onSubmit={handleSubmit} className={commonModalClasses}>
                    <div>
                        <Title>Please Enter the OTP to Verify Your Account</Title>
                        <p className="text-center dark:text-dark-subtle text-light-subtle">OTP has been sent to your email</p>
                    </div>
                    <div className="flex justify-center items-center space-x-4">
                        {otp.map((_, index)=> {
                            return (
                                
                                    <input
                                        ref={activeOtpIndex === index ? inputRef : null}
                                        key={index}
                                        value={otp[index] || ""}
                                        onChange={(e) => handleOtpChange(e, index)} 
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        type="number" 
                                        className='w-12 h-12 border-2 dark:border-dark-subtle border-light-subtle 
                                        dark:focus:border-white focus:border-primary rounded bg-transparent outline-none text-center dark:text-white text-primary font-semibold text-xl spin-button-none' 
                                    />
                            )
                        })}
                    </div>


                    <Submit value="Send Link" />
                </form>
            </Container>
        </FormContainer>
    )
}