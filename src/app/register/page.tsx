"use client"
import { RegisterForm } from '@/components/form'
import { useEffect } from 'react'
import React, { useContext } from 'react'
import { LoginContext } from '@/context';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {

    const { isRegister } = useContext(LoginContext);
    const { push } = useRouter();

    useEffect(() => {
        if (isRegister) {
            push('/');
        }
    }, [isRegister])



    return (
        <div className='flex min-h-screen flex-col items-center justify-center  bg-gray-100'>

            <h1
                className='text-2xl from-neutral-800 text-gray-600 font-medium rounded-md mb-5 mt-5'
            >
                Nintendo Account
            </h1>

            <RegisterForm />

        </div>
    )
}

export default RegisterPage