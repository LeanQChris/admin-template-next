"use client"

import React from 'react'

import { Button } from '@/components/ui/base/button'
import { Input } from '@/components/ui/base/input'
import { Label } from '@/components/ui/base/label'
import { signIn, useSession } from 'next-auth/react'

export default function Login() {
    const session = useSession()

    console.log(session)

    async function handleLogin(formData: FormData) {
        const email = formData.get('email');
        const password = formData.get('password');

        await signIn("credentials", {
            email: email as string,
            password: password as string,
            redirect: true,
            callbackUrl: '/'
        })
    }

    return (
        <div className='px-40 flex flex-col justify-center h-screen items-start'>
            <h4 className='text-2xl pb-8'>Login</h4>
            <form className='w-max-xl w-full space-y-4' action={handleLogin}>
                <div className='space-y-2'>
                    <Label>Email</Label>
                    <Input name='email' value="vishal.leanq@gmail.com" />
                </div>
                <div className='space-y-2'>
                    <Label>Password</Label>
                    <Input name='password' value="Password@123" />
                </div>
                <div />
                <Button className='w-full' type='submit'>Login</Button>
            </form>
        </div>
    )
}
