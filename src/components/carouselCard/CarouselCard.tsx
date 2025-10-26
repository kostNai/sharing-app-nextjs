'use client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
    imagesrc: StaticImageData
    title: string
    receip: string
}

export default function CarouselCard({ imagesrc, title, receip }: Props) {
    return (
        <div className='relative w-full h-[820px]'>
            <Image
                src={imagesrc}
                alt='carousel image 1'
                style={{
                    objectFit: 'cover',
                    objectPosition: 'top center',
                }}
                fill
            />
            <div className='absolute top-[200px] left-[200px] w-[500px] h-fit px-12 py-16 flex flex-col gap-10 text-white *:z-10'>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-10 z-0'></div>
                <h3 className='text-2xl font-bold'>{title}</h3>
                <p className='line-clamp-3 text-xl'>{receip}</p>
                <Link
                    href='/'
                    className=' w-fit bg-[#40BA37] py-4 px-8 font-semibold uppercase border-l-4 border-l-solid border-l-[#1C8314] cursor-pointer'
                >
                    До Рецепту
                </Link>
            </div>
        </div>
    )
}
