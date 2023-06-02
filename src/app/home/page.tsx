
import ButtonsPagination from '@/components/ButtonsPagination/ButtonsPagination';
import ShowVillagers from '@/components/ShowVillagers/ShowVillagers';
import { IVillagers } from '@/interface/IVillagers';
import React from 'react';

const fetchVilagers = async () => {
    return fetch(`http://acnhapi.com/v1/villagers`,
        {
            next: {
                revalidate: 1,
            }
        }
    )
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => {
            console.error(error)
        }
        )
}



const HomePage = async () => {

    const Villagers: IVillagers = await fetchVilagers()

    const arrayVillagers = Object.values(Villagers)


    return (
        <div
            className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200'
        >
            <h1
                className='text-3xl font-bold text-center first-letter:capitalize'
            >
                Check out all
            </h1>
            <h2
                className='text-sm  text-center first-letter:capitalize'
            >
                the villagers from Animal Crossing
            </h2>
            <div
                className='flex flex-wrap justify-center max-w-4xl mt-6 sm:w-full'
            >

                {
                    arrayVillagers.length > 0 ?
                        <>
                            <ShowVillagers arrayVillagers={arrayVillagers} />
                        </>
                        :
                        <h1>
                            Loading...
                        </h1>
                }
            </div>
        </div>
    )
}

export default HomePage