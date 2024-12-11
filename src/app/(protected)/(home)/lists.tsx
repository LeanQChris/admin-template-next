"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPosts } from './action'

export default function Lists() {
    const { data } = useQuery({
        queryKey: ['posts'],
        queryFn: () => fetchPosts(),
    })
    return (
        <div className='text-white'>{data?.length}</div>
    )
}
