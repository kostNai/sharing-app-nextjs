'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoIosArrowDown } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import { MdLogin } from 'react-icons/md'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'

const dataLinks = [
    {
        href: '/',
        name: 'ДОМАШНЯ',
        icon: <IoIosArrowDown />,
    },
    {
        href: '/pages',
        name: 'СТОРІНКИ',
        icon: <IoIosArrowDown />,
    },
    {
        href: '/mega-menu',
        name: 'MEGA MENU',
        icon: <IoIosArrowDown />,
    },
    {
        href: '/receips',
        name: 'РЕЦЕПТИ',
    },
    {
        href: '/vegans',
        name: 'ДЛЯ ВЕГАНІВ',
    },
    {
        href: '/contacts',
        name: 'КОНТАКТИ',
    },
]

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
                    {dataLinks.map((link, indx) => (
                        <Link
                            key={indx}
                            href={link.href}
                            className={`flex items-center gap-1 px-8 py-4 transition duration-300 cursor-pointer ${
                                pathName === link.href
                                    ? 'bg-[#40BA37] border-b-4 border-b-solid border-b-[#1C8314] text-white'
                                    : ''
                            }`}
                        >
                            {link.name}
                            {link.icon ? link.icon : ''}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className='flex gap-8 items-center'>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href='/login'>
                            <MdLogin
                                size={20}
                                className='text-gray-400 transition duration-300 cursor-pointer hover:text-[#40BA37]'
                            />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Вхід</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href='/login'>
                            <FaSearch className='text-gray-400 transition duration-300 cursor-pointer hover:text-[#40BA37]' />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Пошук</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </header>
    )
}
