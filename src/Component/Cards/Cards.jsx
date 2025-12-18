import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({image,name, price}) => {
  return (
    <div className='bg-zinc-100 p-5 mt-10 '>
      <div className='flex justify-between'>
        {/* Card Icons  */}
        <span className='text-3xl text-zinc-300 '>
            <FaHeart/>
        </span>
        <button className='bg-orange-500 text-white px-4 py-3 rounded-lg mb-3'><FaPlus/></button>
      </div>
      {/* Card Image */}
      <div className='w-full h-50   '>
        <img  className='w-full h-full object-contain' src={image}></img>
      </div>
      <div className='text-center'>
       {/* // Card Content */}
        <h3 className='text-2xl font-sans mt-5'>{name}</h3>
        <p className='text-2xl font-bold mb-5 mt-4'>${price.toFixed(2)}</p>
        <Button content="Shop Now"/>
      </div>
    </div>
  )
}

export default Cards
