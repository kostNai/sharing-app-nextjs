import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar, FaRegStar, FaStarHalf } from 'react-icons/fa'

type Props = {
    img: StaticImageData
    title: string
    rating: number
}

export default function BestRecipeCard({ img, title, rating }: Props) {
    return (
        <div>
            <div className='relative w-[350px] h-[305px] border-b-4 border-b-solid border-b-[#40BA37]'>
                <Image src={img} alt='recipe image' fill />
            </div>
            <div>
                <Link
                    href='/'
                    className='block my-4 text-center text-xl transition duration-300 hover:text-[#40BA37]'
                >
                    {title}
                </Link>
                <div className='flex gap-2 justify-center'>
                    <FaStar color='#FBB710' size={12} />
                    <FaStar color='#FBB710' size={12} />
                    <FaStar color='#FBB710' size={12} />
                    <FaStar color='#FBB710' size={12} />
                    <FaStar color='#FBB710' size={12} />
                    {/* <FaRegStar />
                    <FaStarHalf /> */}
                </div>
            </div>
        </div>
    )
}
