"use client"
import { Pagination } from '@/helpers/pagination/Pagination'
import { IVillagers } from '@/interface/IVillagers'
import Image from 'next/image'
import React from 'react'

interface IShowVillagers {
    arrayVillagers: IVillagers[]
}

const ShowVillagers = ({ arrayVillagers }: IShowVillagers) => {

    const { handlePaginationSum, PaginationNumberEnd, PaginationNumber, pageNumber, handlePaginationSub } = Pagination()

    return (
        <>
            {
                arrayVillagers.slice(PaginationNumber, PaginationNumberEnd).map((villager: IVillagers) => (
                    <div
                        key={villager.id}
                        className='flex flex-col mr-5 ml-5 items-center justify-center w-1/2 p-4 mx-auto my-4 bg-white rounded-md shadow-md sm:w-1/3 md:w-1/4 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-300 hover:rotate-12'
                    >
                        <div
                            className='flex flex-row items-center justify-center p-2 border-2 border-gray-200 rounded-xl'
                        >
                            <h1
                                className='text-xl font-bold text-center first-letter:capitalize p-1'
                            >
                                {villager.name['name-USen']}
                            </h1>
                            <h1
                                className='text-xl font-bold text-center first-letter:capitalize p-1'
                            >
                                {
                                    villager.gender === "Male" ? <span>
                                        <h2
                                            className='text-2xl  text-center first-letter:capitalize p-1 text-blue-500 font-bold'
                                        >
                                            ♂
                                        </h2>

                                    </span> : <span

                                    >
                                        <h2
                                            className='text-2xl  text-center first-letter:capitalize p-1 text-pink-500 font-bold'
                                        >
                                            ♀
                                        </h2>


                                    </span>
                                }
                            </h1>
                        </div>

                        <div
                            className='mt-1 mb-1'
                        >


                            <small
                                className='text-xs text-center text-gray-500'
                            >
                                {
                                    villager.name['name-JPja']
                                }
                            </small>
                        </div>
                        <div
                            className='flex flex-col items-center justify-center w-20 h-20 rounded-full bg-slate-400'
                        >
                            <Image
                                src={villager.icon_uri}
                                alt={villager.name['name-USen']}
                                width={120}
                                height={120}
                            />
                        </div>


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
                ))
            }


            <div
                className='flex flex-row items-center justify-center w-full p-4 mx-auto my-4 bg-white rounded-md shadow-md sm:w-1/3 md:w-1/4 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-300 hover:rotate-12'
            >
                <button
                    onClick={() => handlePaginationSub(
                        pageNumber - 1
                    )}


                >
                    <p
                        className={`px-4 py-2 mt-2 mr-2 ml-2 text-sm font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ${pageNumber === 1 ? 'bg-gray-500' : 'bg-black'}`}
                    >
                        Prev
                    </p>
                </button>

                <button
                    onClick={() => handlePaginationSum(
                        pageNumber + 1
                    )}
                >
                    <p
                        className={`px-4 py-2 mt-2 mr-2 ml-2 text-sm font-medium text-white rounded-md hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ${pageNumber >= 5 ? 'bg-gray-500' : 'bg-black'}`}
                    >
                        Next
                    </p>
                </button>
            </div>
        </>
    )
}

export default ShowVillagers