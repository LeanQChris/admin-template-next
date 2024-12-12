import React from 'react'
import { DataTable } from './components/data-table'
import { columns } from './components/columns'

export default function Users() {
    return (
        <DataTable columns={columns} data={[]} />
    )
}
