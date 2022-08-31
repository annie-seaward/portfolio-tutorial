import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch With Me</h2>
            <div className='grid lg:grid-cols-5 gap-8'>

                {/*Left details*/}
                <div className='cols-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 p-4 rounded-xl'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.unsplash.com/photo-1499159058454-75067059248a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt='/' />
                        </div>
                        <div>
                            <h2 className='py-2'>Annie Seaward</h2>
                            <p>Student Software Developer</p>
                            <p className='py-4'>I am open to new oppurtunities. Contact me and let's talk.</p>
                        </div>
                        <p>Connect with me</p>
                        <div className='flex items-center justify-between py-4'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                                <BsPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>

                {/*Right contact form*/}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>

                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name: </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>

                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number: </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>

                            <div className='grid flex-col py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Email: </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                            </div>

                            <div className='grid flex-col py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Subject: </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>

                            <div className='grid flex-col py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Message: </label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10"></textarea>
                                </div>
                            </div>

                            <button className='w-full p-4 text-gray-100 mt-4 hover:scale-105 ease-in duration-75'>
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>

            </div>

            {/*Scroll Button*/}
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                    </div>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Contact