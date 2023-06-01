import ShowVillager from '@/components/ShowVillager/ShowVillager'
import { IVillager } from '@/interface/iVillager'
import React from 'react'

const fetchVilager = async (id: number) => {
    return fetch(`http://acnhapi.com/v1/villagers/${id}`,
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

const page = async ({ params }: any) => {

    const { id } = params

    const Villager: IVillager = await fetchVilager(id)

    return (
        <>
            {
                Villager ?
                    <div
                        className="flex flex-col items-center justify-center h-screen bg-gray-200"
                    >
                        <ShowVillager Villager={Villager} />
                    </div>
                    :
                    <h1>
                        Loading...
                    </h1>
            }
        </>
    )
}

export default page