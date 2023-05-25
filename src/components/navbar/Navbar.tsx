import Image from 'next/image'
import React from 'react'

export const Navbar = () => {


    const NintendoLogo = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg"

    return (
        <div
            className='flex w-100 h-17 bg-white items-center justify-between'
        >
            <div>
                <Image
                    src={NintendoLogo}
                    alt='Nintendo Logo'
                    width={150}
                    height={150}
                />

            </div>
            <div
                className='flex flex-row items-center justify-between w-64 bg-white '
            >
                <h1
                    className='text-md from-neutral-800  text-gray-600 font-medium rounded-md'
                >Nintendo Account</h1>

            </div>

            <div className='flex w-100' />

        </div>
    )
}
