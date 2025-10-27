import Image, { StaticImageData } from 'next/image'
import { FaStar } from 'react-icons/fa'

type Props = {
    img: StaticImageData
    date: string
    title: string
    rating: number
    commentsValue: number
}

export default function SmallReceipCard({
    img,
    date,
    title,
    rating,
    commentsValue,
}: Props) {
    return (
        <div className='flex gap-4 flex-[30%]'>
            <div className='relative w-20 h-20 min-w-20'>
                <Image src={img} fill alt='receip image' />
            </div>
            <div className='h-full flex flex-col justify-between'>
                <div>
                    <p className='text-xs text-[#40BA37]'>{date}</p>
                    <h4 className='text-xl font-semibold line-clamp-1'>
                        {title}
                    </h4>
                </div>
                <div className='mt-2'>
                    <div className='flex gap-2'>
                        <FaStar color='#FBB710' size={12} />
                        <FaStar color='#FBB710' size={12} />
                        <FaStar color='#FBB710' size={12} />
                        <FaStar color='#FBB710' size={12} />
                        <FaStar color='#FBB710' size={12} />
                    </div>
                    <div>
                        <p className='text-gray-400'>
                            {commentsValue} Коментарів
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
