import React from 'react'

function Previous() {
  const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'] 
  return (
    <div className='rectot'>
        <h1 className='previous'>
            People also saw
        </h1>
        <div className='Previoussearches'>
          {searches.map((search, index) => (
          <div key = {index} style={{animationDelay: index * .1 + "s"}} className = 'searchback'>
              {search}
          </div>
          ))}
        </div>
    </div>
  )
}

export default Previous