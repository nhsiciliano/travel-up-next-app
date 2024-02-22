import category from '@/data/category'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Hero({userInput}) {
    const [searchInput, setSearchInput] = useState();
    return (
        <div className='text-center'>
            <div className='flex justify-center items-center'>
                <Image
                    src='/backbg.png'
                    alt='hero-img'
                    width={1000}
                    height={200}
                    className='mt-[650px] opacity-60 absolute'
                />
            </div>
            <div className='mt-[90px]'>
                <h2 className='text-[45px] text-red-600 tracking-widest font-semibold relative'>DISCOVER</h2>
                <h2 className='text-[20px] relative'>Your Amazing City</h2>
            </div>
            <div className='mt-5 z-10 flex gap-2 items-center justify-center'>
                <input
                    type="text"
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder='Search city'
                    className='bg-gray p-3 z-10 border-[1px] rounded-full px-5 w-[36%] shadow-sm outline-red-300'
                />
                <button 
                    className='bg-red-600 rounded-full p-3 shadow-md z-10 cursor-pointer hover:scale-105 transition-all'
                    onClick={() => userInput(searchInput)}    
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
            <div className='mt-5 flex flex-col justify-center items-center relative'>
                <h2 className='font-semibold'>Or Browse the category</h2>
                <div className='grid grid-cols-3 md:grid-cols-7 justify-center gap-5 mt-3 z-10'>
                    {category.map((item, index) => (
                        <div key={index} className='border-[1px] bg-red-200 opacity-70 text-red-600 p-3 rounded-lg z-10 hover:border-red-600 hover:scale-110 transition-all cursor-pointer'>
                            <h2 className='text-[14px] font-semibold'>{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
