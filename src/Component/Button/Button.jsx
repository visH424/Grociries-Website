import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-orange-500 text-white rounded-lg md:text-lg text-sm hover:scale-105 hover:bg-amber-600 transition-all duration-300
      cursor-pointer px-6 py-2 '>
       {props.content}
      </button>
    </div>
  )
}

export default Button
