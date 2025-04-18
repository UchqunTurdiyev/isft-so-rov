'use client'

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
    <div style={{ padding: '30px', maxWidth: '400px', margin: '0 auto' }}>
      <h2 className='py-2 text-md'>📝 Ro‘yxatdan o‘tish</h2>
      <form onSubmit={handleSubmit} className='lg:w-md w-full flex gap-3 justify-between items-center flex-col'>
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
        <button type="submit" className='w-full cursor-pointer text-white bg-yellow-400 rounded-md w-60 h-10'>
          Jo‘natish
        </button>
      </form>
      {xato && <p style={{ color: 'red' }}>{xato}</p>}
      {yuborildi && <p style={{ color: 'green' }}>✅ Muvaffaqiyatli yuborildi!</p>}
    </div>
  )
}
