import React from 'react'
import Button from '../../Button/Button'

const Hero = () => {
  return (
   <section>
    <div className='max-w-[1100px]  min-h-screen  mx-auto px-10 md:flex-row flex-col flex items-center md:pt-25 pt-35 '>
       <div className='flex-1'>
        <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality..</span>
<h1 className='md:text-7xl/20 text-5xl/14 mt-4 font-bold '>Tasty Organic <span className='text-orange-500'>Fruits </span> & <span className='text-orange-500'>Veggis</span>  In Your City</h1>
<p className='text-zinc-600 md:text-lg  text-sm max-w-[500px] mt-5 mb-10'>Bred for a high content of beneficial subtances. our products are all fresh and healthy</p>
<Button content="Shop now"/>
       </div>
       <div className='flex-1'>
        <img src='grocery.png'></img>
       </div>
    </div>
   </section>
  )
}

export default Hero
