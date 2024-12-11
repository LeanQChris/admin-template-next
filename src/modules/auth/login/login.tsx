import { Button } from '@/components/ui/base/button'
import { Input } from '@/components/ui/base/input'
import { Label } from '@/components/ui/base/label'
import React from 'react'

export default function Login() {
    return (
        <div className='px-40 flex flex-col justify-center h-screen items-start'>
            <h4 className='text-2xl pb-8'>Login</h4>
            <form className='w-max-xl w-full space-y-4'>
                <div className='space-y-2'>
                    <Label>Email</Label>
                    <Input />
                </div>
                <div className='space-y-2'>
                    <Label>Password</Label>
                    <Input />
                </div>
                <div />
                <Button className='w-full' >Login</Button>
            </form>
        </div>
    )
}
