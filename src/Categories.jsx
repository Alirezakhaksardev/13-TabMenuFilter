import React from 'react'

function Categories({filterItems , Categories}) {
  return (
    <div className='btn-container'>
      {
        Categories.map((c , index) => (
          <button key={index} onClick={()=>filterItems(c)}>{c}</button>
        ))
      }

    </div>
  )
}

export default Categories