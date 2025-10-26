'use client'

import Link from 'next/link'

export default function ParallaxPage() {
    return (
        <div className='w-[calc(100vw-17px)] relative'>
            <div
                className='h-[675px] bg-fixed bg-center bg-cover bg-no-repeat'
                style={{ backgroundImage: "url('/img/parallax.jpg')" }}
            />
            <div className='absolute left-0 top-0 text-white w-full h-full flex flex-col justify-center items-center'>
                <div>
                    <h2 className='text-7xl text-center'>Рецети без глютену</h2>
                    <p className='text-xl px-72 text-center mt-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero quaerat, vitae sequi suscipit aliquid possimus
                        cupiditate corporis in fugiat maiores culpa accusamus,
                        vero dolor. Debitis consectetur numquam quidem nisi
                        eius?
                    </p>
                </div>
                <Link
                    href='/'
                    className='mt-20 w-fit bg-[#40BA37] py-4 px-8 font-semibold uppercase border-l-4 border-l-solid border-l-[#1C8314] cursor-pointer'
                >
                    Усі рецепти
                </Link>
            </div>
            {/* <div className=' bg-red-500 text-white text-3xl flex items-center justify-center'>
                Scroll Up and Down this page to see the parallax scrolling
                effect.
            </div> */}
            {/* <div
                className='h-screen bg-fixed bg-center bg-cover bg-no-repeat'
                style={{ backgroundImage: "url('/img/parallax.jpg')" }}
            /> */}
        </div>
    )
}
