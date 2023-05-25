import Link from 'next/link'
import React from 'react'

export const Form = () => {
    return (
        <div
            className='flex flex-col items-center  w-96  bg-white  rounded-xl shadow-xl'
        >
            <form
                className='flex flex-col items-center justify-center w-96 h-64 bg-white pr-10 pl-10  '
            >
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
                    placeholder='  Email Address/Sign-In ID'
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
                    {"Don't have an account?"}
                </h1>
                <Link
                    href='/register'
                >
                    <button
                        className='w-52 h-10 bg-white rounded-3xl text-white border-2 border-gray-300  mt-5 '
                    >
                        <h2
                            className='text-xs text-black'
                        >      Create a Nintendo Account</h2>

                    </button>
                </Link>
            </div>
        </div>
    )
}
