import React from 'react'

const Contact = () => {
  return (
    <div className='items-center'>
      <h1 className='font-bold text-3xl p-4 m-4'>Contact Us</h1>
      <form >
        <input type='text' placeholder='Name' className='border border-black p-2 m-2'/>
        <input type='text' placeholder='Message' className='border border-black p-2 m-2'/>
        <button className='border border-black rounded-md p-2 m-2 bg-gray-100'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
