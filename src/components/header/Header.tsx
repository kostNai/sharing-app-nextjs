'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoIosArrowDown } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'

export default function Header() {
    const pathName = usePathname()

    return (
        <header className='w-3/4 flex justify-between items-center mt-4'>
            <div>
                <h2 className='text-4xl font-bold'>Delicious</h2>
                <p className='text-sm text-gray-400 text-center tracking-[0.5rem]'>
                    FOOD BLOG
                </p>
            </div>
            <div>
                <nav className='flex gap-4 font-semibold'>
                    <Link
                        href='/'
                        className={`px-8 py-4 transition duration-300 cursor-pointer ${
                            pathName === '/'
                                ? 'bg-[#40BA37] border-b-4 border-b-solid border-b-[#1C8314] text-white'
                                : ''
                        }`}
                    >
                        ДОМАШНЯ
                    </Link>
                    <Link
                        href='/pages'
                        className={`flex items-center gap-1 px-8 py-4 transition duration-300 cursor-pointer ${
                            pathName === '/pages'
                                ? 'bg-[#40BA37] border-b-4 border-b-solid border-b-[#1C8314] text-white'
                                : ''
                        }`}
                    >
                        СТОРІНКИ
                        <IoIosArrowDown />
                    </Link>
                    <Link
                        href='/menu'
                        className={`flex items-center gap-1 px-8 py-4 transition duration-300 cursor-pointer ${
                            pathName === '/menu'
                                ? 'bg-[#40BA37] border-b-4 border-b-solid border-b-[#1C8314] text-white'
                                : ''
                        }`}
                    >
                        MEGA MENU
                        <IoIosArrowDown />
                    </Link>
                    <Link
                        href='/recipes'
                        className={`px-8 py-4 transition duration-300 cursor-pointer ${
                            pathName === '/recipes'
                                ? 'bg-[#40BA37] border-b-4 border-b-solid border-b-[#1C8314] text-white'
                                : ''
                        }`}
                    >
                        РЕЦЕПТИ
                    </Link>
                    <Link
                        href='/vegans'
                        className={`px-8 py-4 transition duration-300 cursor-pointer ${
                            pathName === '/vegans'
                                ? 'bg-[#40BA37] border-b-4 border-b-solid border-b-[#1C8314] text-white'
                                : ''
                        }`}
                    >
                        ДЛЯ ВЕГАНІВ
                    </Link>
                    <Link
                        href='/contacts'
                        className={`px-8 py-4 transition duration-300 cursor-pointer ${
                            pathName === '/contacts'
                                ? 'bg-[#40BA37] border-b-4 border-b-solid border-b-[#1C8314] text-white'
                                : ''
                        }`}
                    >
                        КОНТАКТИ
                    </Link>
                </nav>
            </div>
            <div>
                <FaSearch className='text-gray-400 transition duration-300 cursor-pointer hover:text-[#40BA37]' />
            </div>
        </header>
    )
}
