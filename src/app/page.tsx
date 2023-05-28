"use client"
import { Form } from '@/components/form'
import { useEffect } from 'react'
import React, { useContext, useState } from 'react'
import { LoginContext } from '@/context';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { isLoggin } = useContext(LoginContext);
  const { push } = useRouter();

  useEffect(() => {
    if (isLoggin) {
      push('/home');
    }
  }, [isLoggin])


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
