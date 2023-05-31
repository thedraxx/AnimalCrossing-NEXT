import ShowVillagers from '@/components/ShowVillagers/ShowVillagers';
import { IVillagers } from '@/interface/iAnimalCrossingAPI';
import React from 'react';

const fetchPost = async () => {
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

    const post: IVillagers = await fetchPost()

    const arrayVillagers = Object.values(post)

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
                    arrayVillagers.map((villager: IVillagers) => (
                        <>
                            <ShowVillagers villager={villager} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}



export default HomePage