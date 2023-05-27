"use client"

import { LoginProvider } from '@/context'
import React from 'react'

export const Provider = ({ children }: any) => {
    return (
        <LoginProvider>{children}</LoginProvider>
    )
}
