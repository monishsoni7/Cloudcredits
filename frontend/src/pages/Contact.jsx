import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newslater from '../components/Newslater'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl border-t pt-10'>
        <Title text1={'CONTACT'} text2={'US'} />
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28' >
          <img src={assets.contact_img} className='w-full md:max-w-[480px] ' alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupidita</p>
            <p className='text-gray-500'> dolor sit amet consectetur adipisicing elit. Eaque, quae! </p>
            <p className='font-semibold text-xl text-gray-600' > Career</p>
            <p className='text-gray-600' >Learn more </p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500' >Explore</button>

          

        </div>

      </div>
      <Newslater/>
    </div>
  )
}

export default Contact