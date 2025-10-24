import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-6'>
            <h2 className='text-3xl'>404 Сторінка не знайдена!</h2>
            <Link href='/' className='text-gray-400 underline'>
                Повернутися на домашню сторінку
            </Link>
        </div>
    )
}
