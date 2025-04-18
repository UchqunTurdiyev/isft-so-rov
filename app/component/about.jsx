import React from 'react'
import img1 from '../../public/01-2.jpeg'
import img2 from '../../public/02-2.jpeg'
import img3 from '../../public/03-2.jpeg'
import gal from '../../public/0001.jpeg'
import gal3 from '../../public/0003.jpeg'
import Image from 'next/image'

export default function About() {
  return (
    <>
    <div className='w-full grid xl:grid-cols-3 grid-cols-2  md:gap-4 gap-2 pt-8 '> 
        <Image src={img1} alt="ISFT" layout='fit' className='object-cover'/>
        <Image src={img2} alt="ISFT" layout='fit' className='object-cover'/>
        <Image src={img3} alt="ISFT" layout='fit' className='object-cover'/>
        {/* <Image src={im} alt="ISFT" layout='fit' className='object-cover'/>
        <Image src={im3} alt="ISFT" layout='fit' className='object-cover'/> */}
    </div>

    <div className="w-full py-10">
      <h1 className='text-2xl  pb-2 border-b-2 border-red-600'>Bizning institutimiz xalqaro darajadagi hamkorlarimiz.</h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 grid-1 py-4">
        {aboutData.map(item => (
        <div key={item.id} className="flex items-center justify-center flex-col pt-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center my-2">
          <h1 className=''>{item.id}</h1>
          </div>
          <p className='text-center text-md'> <span className='text-orange-600 text-lg block'>{item.title}</span>
{item.desc}</p>
        </div>
        ))}
      </div>
    </div>

    {/* Gallery ---------------- */}
    <h1 className='text-2xl  pb-2 border-b-2 border-red-600'>Bizning talaba</h1>
    <div className="w-full grid grid-cols-2 gap-2 my-4">
        <Image src={gal} alt="ISFT" layout='fit' className='object-cover'/>
        <Image src={gal3} alt="ISFT" layout='fit' className='object-cover'/>
    </div>

    </>
  )
}


const aboutData = [
  {id:1, title: 'Англиядаги', desc: 'Norwich Institute for Language Education (NILE)'},
  {id:2, title: 'Malayziya', desc: 'UCSI Universiteti '},
  {id:3, title: 'Malayziya', desc: 'Universiti Putra Malaysia (UPM)'},
  {id:4, title: 'Malayziya', desc: 'Universiti Malaysia Sarawak (UNIMAS)'},
  {id:5, title: 'Malayziya', desc: 'Universiti Pendidikan Sultan Idris (UPSI)'},
  {id:6, title: 'Xitoy', desc: 'Sias University'},
  {id:7, title: 'Turkiya', desc: 'Istanbul Aydın Universiteti'},
  {id:8, title: 'Turkiya', desc: 'Istanbul Medipol Universiteti'},
  {id:9, title: 'Turkiya', desc: 'Alanya Universitesi'},
  {id:10, title: 'Qozog‘istondagi', desc: 'AlmaU Universitesi'},
  {id:11, title: 'Belarusiyadagi', desc: 'Polotsk Davlat Universiteti'},
  {id:12, title: 'Pokistondagi', desc: 'Superior Universiteti'},
  {id:13, title: 'Latviya', desc: 'Riga Aviation University (Menegment fakulteti bilan)'},
  {id:14, title: 'Chexiya', desc: 'High School Teachers European Society va Prague Institute of Management and TechnologyRiga Aviation University (Menegment fakulteti bilan)'},
]