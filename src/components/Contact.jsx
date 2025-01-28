import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='flex min-h-[70vh] min-w-full items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-14'>
        <h1 className='text-center text-5xl md:text-7xl'>
          <span className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>Get In Touch</span>
        </h1>
        <p className='text-center text-lg font-semibold text-gray-500'>
          Want to chat , contact me ?
        </p>
        <p className='text-center text-lg font-semibold text-gray-500'>
         Send me an E-mail through this button and I'll respond
          whenever i can..
        </p>
        <a href="mailto:benjemaahamza09@gmail.com" className='bg-transparent border border-white hover:bg-white hover:text-black py-2 px-4 rounded-lg transition-all duration-300 mx-2'>Contact Me</a>
      </div>
    </div>
  )
}

export default Contact