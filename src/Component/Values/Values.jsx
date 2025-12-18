import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";

const Values = () => {

const leftValue = value.slice(0,2).map(item=>{
    return(
        <div className='flex md:flex-row-reverse items-center gap-7'>
            <div>
                <span className='bg-orange-500 flex items-center justify-center w-15 h-15 rounded-full text-3xl text-white'>{item.icon}</span>
            </div>
            <div className='md:text-right '>
                <h3 className='text-zinc-800 text-3xl font-bold  '>{item.title}</h3>
                <p className='text-zinc-600 mt-2'>{item.para}</p>
            </div>

        </div>
    )
})

const rightValue = value.slice(2).map(item=>{
    return(
        <div className='flex  items-center gap-7 '>
            <div>
                <span className='bg-orange-500 flex items-center justify-center w-15 h-15 rounded-full text-3xl text-white'>{item.icon}</span>
            </div>
            <div className=''>
                <h3 className='text-zinc-800 text-3xl font-bold  '>{item.title}</h3>
                <p className='text-zinc-600 mt-2 '>{item.para}</p>
            </div>

        </div>
    )
})

  return (
   <section>
    <div className='max-w-[1400px] mx-auto px-10 py-20 '>
        <Heading highlight='Our' heading="    Values"/>
        <div className='flex md:flex-row  flex-col md:gap-5 gap-10 mt-15 '>
            <div className='md:min-h-100  gap-[15] flex flex-col  justify-between'>
                 {leftValue}
            </div>
            <div className='md:flex w-1/2 hidden'>
                <img src='basket-full-vegetables.png'></img>
            </div>


            {/*right div*/}

            <div  className='md:min-h-100 flex flex-col justify-between '>
                {rightValue}
            </div>


        </div>
    </div>
   </section>
  )
}

export default Values

const value = [
   {
    id: 1,
    title: 'Trust ',
    para: 'It is a established fact that a reader will be distraced by the readable',
    icon: <FaHeart/>,
    
   },
   {
    id: 2,
    title: 'Always Fresh ',
    para: 'It is a established fact that a reader will be distraced by the readable',
    icon: <FaLeaf/>,

   },
   {
    id: 3,
    title: 'Food Safety',
    para: 'It is a established fact that a reader will be distraced by the readable',
    icon: <FaShieldAlt/>,

   },
   {
    id: 4,
    title: '100% Organic ',
    para: 'It is a established fact that a reader will be distraced by the readable',
    icon: <FaSeedling/>,

   }

]
