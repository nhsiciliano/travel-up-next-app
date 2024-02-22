import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <div className='flex justify-between p-5 px-5 shadow-sm'>
            <div className='flex gap-3 items-center'>
                <Link href='/'>
                    <h2 className='text-[25px] font-semibold text-red-500 tracking-widest'>TRAVEL UP</h2>
                </Link>
            </div>
            <ul className='hidden md:flex gap-8 items-center'>
                <li className='linknav'>Home</li>
                <li className='linknav'>About Us</li>
                <li className='linknav'>Contact Us</li>
            </ul>
        </div>
    )
}
