import React from 'react'

export default function Contact() {
  return (
    <div className='w-full h-40 block mb-6'>
    <h1 className='text-2xl  pb-2 border-b-2 border-red-600 my-4'>Bizning manzil</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.1736011485486!2d66.9076939795546!3d39.66830930674267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19c54a948e1b%3A0x9f085cadda5c85e5!2sISFT%20Instituti!5e0!3m2!1sru!2s!4v1741589692768!5m2!1sru!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='w-full h-78'
          />
          <a href="/">Bizning manzil!</a>
        </div>
  )
}