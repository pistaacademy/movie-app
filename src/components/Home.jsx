import React from 'react';
import CustomeLink from './CustomeLink';

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <CustomeLink to="/auth/signin" children="Signin" />
        </div>
    )
}