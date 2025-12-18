import React from 'react'

const Heading = (props) => {
  return (
   <div className='mx-auto  w-fit'>
        <h2 className='md:text-5xl text-[2.5rem] font-bold '><span className='text-orange-500'>{props.highlight}</span>{props.heading} </h2>
        <div className='w-50 h-1 bg-orange-500 md:mt-3 mt-1 ml-auto'></div>
      </div>
  )
}

export default Heading
