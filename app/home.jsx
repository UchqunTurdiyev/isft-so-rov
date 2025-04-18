"use client"

import Image from 'next/image'
import main2 from '../public/main2.png'
import Link from 'next/link'


export default function Main() {
  return (
    <div className='w-full z-10'>
      <div className='w-full md:h-[700px] h-[300px] cover relative z-20'>
      <Image 
        src={main2}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-[-1]"
      />
      <div className='absolute lg:top-28 top-18  md:left-12 left-2 z-1'>
        <h1 className='text-md lg:text-2xl text-yellow-500 font-semibold'>Samarqand kampusi</h1>
        <h1 className='text-white lg:text-6xl text-4xl  md:py-4 py-2 font-bold '>ISFT Instituti</h1>
        <p className='lg:text-2xl text-md text-white md:w-[70%] w-[90%] font-semibold'>Ta'lim berish va tahsil olishda o'zgacha yondashuv. Respublika bo‘yicha yuqori natijalar!</p>
        <a href={'#gptForms'}>
            <button className='w-52 h-12 bg-yellow-500 hover:bg-yellow-400 rounded-md text-white text-md cursor-pointer my-4'>Ma'lumot uchun</button>
        </a>
      </div>
      
      <div className='absolute top-0 left-0 w-full h-full bg-linear-to-r from-black/50 to-black/30'></div>
      </div>
    
    
    </div>
  )
}