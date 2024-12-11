import Login from '@/modules/auth/login/login'
import React from 'react'

export default function LoginPage() {
    return (
        <div className='grid grid-cols-2'>
            <div className='bg-gradient-to-r p-12 flex justify-center flex-col from-violet-500 to-purple-500 h-screen'>
                <h4 className='text-5xl text-white'>Welcome Admin</h4>
            </div>
            <Login />
        </div>
    )
}
