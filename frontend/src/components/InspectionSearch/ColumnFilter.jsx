import React from 'react'

export const ColumnFilter = ({column}) => {
    const { filterValue, setFilter } = column
    return (
    <span>
        Search:{' '}
        <input vlue={filterValue || ''} onChange={(e) => setFilter(e.target.value)}/>
    </span>
  )
}