import { Form } from '@/components/form'
import Image from 'next/image'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center  bg-gray-100"
    >
      <h1
        className='text-2xl from-neutral-800 text-gray-600 font-medium rounded-md mb-5 mt-5'
      >
        Nintendo Account
      </h1>

      <Form />

    </main>
  )
}
