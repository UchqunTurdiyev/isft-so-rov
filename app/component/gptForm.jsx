'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function FormPage() {
  const [ism, setIsm] = useState('')
  const [familya, setFamilya] = useState('')
  const [telefon, setTelefon] = useState('')
  const [xato, setXato] = useState('')
  const [yuborildi, setYuborildi] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!ism || !familya || !telefon) {
      setXato('❌ Barcha maydonlarni to‘ldiring!')
      return 
    }

    setXato('')
    try {
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbz2HLCIyjc5zDS7TNYkrFwyVdMdr0125KWKRurxgflYKzdnrk9yvG4euQdefp-ccHcGiw/exec',
        {
          method: 'POST',
          body: JSON.stringify({ ism, familya, telefon }),
        }
      )

      if (res.ok) {
        setYuborildi(true)
        setIsm('')
        setFamilya('')
        setTelefon('')
      } else {
        setXato('❌ Jo‘natishda xatolik bo‘ldi.')
      }
    } catch (err) {
      setXato('❌ Internet bilan bog‘liq muammo.')
    }
  }

  return (
    <div className='w-full ' id='gptForms'>
         <h1 className='text-2xl my-4  pb-2 border-b-2 border-red-600'>Bepul grantlar va to‘liq ma’lumot uchun ro‘yxatdan o‘tishni unutmang.</h1>
      <form onSubmit={handleSubmit} className='lg:w-md w-full flex gap-3 justify-center mx-auto items-center flex-col'>
      <h2 className='py-2 text-md'>📝 Ro‘yxatdan o‘tish</h2>
        <input
          type="text"
          placeholder="Ismingiz"
          value={ism}
          onChange={(e) => setIsm(e.target.value)}
          className='w-full px-2 h-12 border border-yellow-400 rounded-md'
        />
        <input
          type="text"
          placeholder="Familyangiz"
          value={familya}
          onChange={(e) => setFamilya(e.target.value)}
          className='w-full px-2 h-12 border border-yellow-400 rounded-md'
        />
        <input
          type="tel"
          placeholder="Telefon raqam"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          className='w-full px-2 h-12 border border-yellow-400 rounded-md'

        />
        <Link href={'https://www.instagram.com/isft_samarqand/'} className='w-full h-14'>
        <button type="submit" className='w-full cursor-pointer text-white bg-yellow-400 rounded-md w-60 h-10'>
          Jo‘natish
        </button>
        </Link>
      </form>
      {xato && <p style={{ color: 'red' }}>{xato}</p>}
      {yuborildi && <p style={{ color: 'green' }}>✅ Muvaffaqiyatli yuborildi!</p>}
    </div>
  )
}
