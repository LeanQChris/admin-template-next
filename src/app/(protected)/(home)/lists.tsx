"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPosts } from './page'

export default function Lists() {
    const { data, error } = useQuery({
        queryKey: ['posts'],
        queryFn: () => fetchPosts(),
    })
    return (
        <div className='text-white'>{data?.length}</div>
    )
}
