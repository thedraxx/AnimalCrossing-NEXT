"use client"
import { IVillagers } from '@/interface/iAnimalCrossingAPI'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


interface IShowVillagers {
    villager: IVillagers
}


const ShowVillagers = ({ villager }: IShowVillagers) => {


    return (
        <div
            className='flex flex-col mr-5 ml-5 items-center justify-center w-1/2 p-4 mx-auto my-4 bg-white rounded-md shadow-md sm:w-1/3 md:w-1/4 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-300 hover:rotate-12'
        >


            <h1
                className='text-xl font-bold text-center first-letter:capitalize p-1'
            >
                {villager.name['name-USen']}
            </h1>
            <small
                className='text-xs text-center text-gray-500'
            >
                {
                    villager.name['name-JPja']
                }
            </small>
            <Image
                src={villager.image_uri}
                alt={villager.name['name-USen']}
                width={200}
                height={200}
            />

            <h1
                className='text-md font-bold text-center first-letter:capitalize'
            >
                {
                    villager.hobby
                }
            </h1>
            <h1>
                Birthday:
                {

                    villager.birthday
                }
            </h1>
            <a
                href={`/home/${villager.id}`}

            >

                <p
                    className='px-4 py-2 mt-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
                >
                    View Details
                </p>

            </a>
        </div>
    )
}

export default ShowVillagers