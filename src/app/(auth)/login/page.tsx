import { getSession } from '@/core/auth/auth'
import Login from '@/modules/auth/login/login'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function LoginPage() {
    const session = await getSession()
    if (session) {
        return redirect("/")

    }
    return (
        <div className='grid grid-cols-2'>
            <div className='bg-gradient-to-r p-12 flex justify-center flex-col from-violet-500 to-purple-500 h-screen'>
                <h4 className='text-5xl text-white'>Welcome Admin</h4>
            </div>
            <Login />
        </div>
    )
}
