"use client";
import React, { useContext, useState } from 'react'
import { LoginContext } from '@/context';
import Link from 'next/link'

export const RegisterForm = () => {

    const { onRegisterUser, isRegister } = useContext(LoginContext);

    const [infoInputUser, setInfoInputUser] = useState({
        email: '',
        password: '',
        name: '',
    })

    const onChangeValue = (e: { target: { name: any; value: any; }; }) => {
        setInfoInputUser({
            ...infoInputUser,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async () => {
        await onRegisterUser(infoInputUser.email, infoInputUser.password, infoInputUser.name)

        setInfoInputUser({
            email: '',
            password: '',
            name: '',
        })
    }


    return (
        <div
            className='flex flex-col items-center  w-96  bg-white  rounded-xl shadow-xl'
        >
            <form
                className='flex flex-col items-center justify-center w-96 h-64 bg-white pr-10 pl-10  '
            >
                <label
                    htmlFor="username"
                    className='text-sm text-gray-800 '
                >
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className='w-80 h-12 bg-gray-100 rounded-md shadow-md border-2 border-gray-300 mt-5 '
                    placeholder=' name'
                    onChange={(e) => onChangeValue(e)}
                    value={infoInputUser.name}
                />

                <label
                    htmlFor="email"
                    className='text-sm text-gray-800 '
                >
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className='w-80 h-12 bg-gray-100 rounded-md shadow-md border-2 border-gray-300 mt-5 '
                    placeholder='  Email Address'
                    onChange={(e) => onChangeValue(e)}
                    value={infoInputUser.email}
                />

                <label
                    htmlFor="password"
                    className='text-sm text-gray-800'

                >
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className='w-80 h-12 bg-gray-100 rounded-md shadow-md border-2 border-gray-300 mt-5 '
                    placeholder='  Password'
                    onChange={(e) => onChangeValue(e)}
                    value={infoInputUser.password}
                />

            </form>

            <div
                className='flex flex-row items-center justify-between w-96 bg-white rounded-md  pb-10 pr-10 pl-10 '
            >
                <p
                    className='text-xs text-blue-500 first-letter '
                >
                    Create an account
                </p>
                <button
                    onClick={onSubmit}
                    className='w-36 h-10 bg-rose-700 rounded-3xl  shadow-md text-white'
                >
                    Register
                </button>

            </div>

            <div
                className='flex flex-col items-center justify-center w-96 bg-white rounded-md  pb-10 pr-10 pl-10 mt-5'
            >

                <h1
                    className='text-xs text-gray-500'
                >
                    {"have an account?"}
                </h1>
                <Link
                    href='/'
                >
                    <button
                        className='w-52 h-10 bg-white rounded-3xl text-white border-2 border-gray-300  mt-5 '
                    >
                        <h2
                            className='text-xs text-black'
                        >      I Already have an  Account    </h2>
                    </button>
                </Link>
            </div>
        </div>
    )
}

