'use client'
import { IVillager } from '@/interface/iVillager'
import React from 'react'
import Image from 'next/image'

interface IShowVillager {
    Villager: IVillager
}


const ShowVillager = ({ Villager }: IShowVillager) => {




    return (
        <>

            <div
                className="flex flex-col items-center justify-center w-auto h-auto p-5 border-2 border-gray-200 rounded-xl shadow-xl  "
            >


                <div
                    className="flex flex-col items-center justify-center w-96 h-96 bg-[url(https://wallpapers-clan.com/wp-content/uploads/2022/06/animal-crossing-minimalist-wallpaper-2-scaled.jpg)] object-cover bg-center bg-no-repeat bg-cover rounded-xl shadow-xl "
                >
                    <div
                        className="absolute flex flex-col items-center justify-center w-96 h-96 bg-black bg-opacity-50 rounded-xl shadow-xl "
                    >
                        <p
                            className="text-md font-bold text-center text-gray-800 "
                        />
                    </div>
                    <div
                        className="absolute flex flex-col items-center justify-center w-96 h-96  rounded-full  mt-60 hover:scale-105 transition-all duration-500 ease-in-out  "
                    >
                        <Image
                            src={Villager.image_uri}
                            alt={Villager.name['name-USen']}
                            width={200}
                            height={200}
                            className='rounded-full  shadow-xl '
                        />
                    </div>


                </div>

                <div
                    className="flex flex-col items-center  w-96 h-96  bg-gray-100  "
                >
                    <div
                        className="mt-10 justify-center items-center "
                    >
                        <h1
                            className="text-3xl font-bold text-center text-gray-800 "
                        >
                            {Villager.name['name-USen']}
                        </h1>

                        <h2
                            className="text-xl text-center text-gray-800 "
                        >
                            {Villager.personality}
                        </h2>

                        <div
                            className="flex flex-row items-center justify-between w-60 mt-14 "
                        >
                            <div
                                className="flex flex-col items-center justify-center w-20 h-20 bg-white rounded-xl shadow-xl"
                            >
                                <h3
                                    className="text-md font-bold text-center text-gray-800 "
                                >
                                    Genre:
                                </h3>
                                <h3
                                    className="text-md  text-center text-gray-800 "
                                >
                                    {Villager.gender}
                                </h3>
                            </div>

                            <div
                                className="flex flex-col items-center justify-center w-20 h-20 bg-white rounded-xl shadow-xl"
                            >
                                <h3
                                    className="text-md font-bold text-center text-gray-800 "
                                >
                                    Species:
                                </h3>
                                <h3
                                    className="text-md  text-center text-gray-800 "
                                >
                                    {Villager.species}
                                </h3>
                            </div>


                        </div>

                        <div
                            className="flex flex-col items-center justify-center w-60 mt-5 bg-white rounded-xl p-5 shadow-xl   "
                        >
                            <h1
                                className="text-md font-bold text-center text-gray-800 "
                            >
                                "{Villager.saying}"
                            </h1>
                        </div>

                    </div>


                </div>









            </div>



        </>
    )
}

export default ShowVillager