import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center  bg-gray-100'>

            <h1
                className='text-2xl from-neutral-800 text-gray-600 font-medium rounded-md mb-5 mt-5'
            >
                Nintendo Account
            </h1>
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
                        name="username"
                        id="username"
                        className='w-80 h-12 bg-gray-100 rounded-md shadow-md border-2 border-gray-300 mt-5 '
                        placeholder=' Username'
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
                    />



                </form>

                <div
                    className='flex flex-row items-center justify-between w-96 bg-white rounded-md  pb-10 pr-10 pl-10 '
                >
                    <a
                        href="#"
                        className='text-xs text-blue-500 first-letter '
                    >
                        Forgot your password?
                    </a>
                    <button
                        className='w-36 h-10 bg-rose-700 rounded-3xl  shadow-md text-white'
                    >
                        Sign In
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
        </div>
    )
}

export default RegisterPage