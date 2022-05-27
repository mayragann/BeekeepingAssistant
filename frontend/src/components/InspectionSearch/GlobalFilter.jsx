import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <span>
        Search by any Value:{' '}
        <input vlue={filter || ''} onChange={(e) => setFilter(e.target.value)}/>
    </span>
  )
}
