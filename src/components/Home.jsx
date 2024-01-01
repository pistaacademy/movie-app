import React from 'react';
import { useAuth } from "../hooks";
import Container  from './Container';

export default function Home() {
    const { authInfo } = useAuth();
    const {isLoggedIn} = authInfo;
    const isVerified = authInfo.profile?.isVerified;

    return (
        <Container>
            {isLoggedIn && !isVerified ? <p className="text-lg text-center bg-blue-50 p-2">
                It Looks loke you havn't verified your account,{" "}
                <button className="text-blue-500 font-semibold hover:underline">
                    click here to verify your account.
                </button>
            </p> : null}
        </Container>
    )
}