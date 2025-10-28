import Image, { StaticImageData } from 'next/image'
import { FaInstagram } from 'react-icons/fa'
type Props = {
    img: StaticImageData
}

export default function Insta({ img }: Props) {
    return (
        <div className='relative flex-1 h-[270px] overflow-hidden group cursor-pointer'>
            <div className='hidden z-10 w-full h-full absolute top-0 left-0 bg-[#40ba37]/80 transition duration-500 group-hover:block'>
                <div className='w-full h-full flex justify-center items-center'>
                    <FaInstagram className='text-white' size={24} />
                </div>
            </div>
            <Image
                src={img}
                fill
                alt='insta image'
                className='z-0  transition duration-500 cursor-pointer group-hover:scale-110 group-hover:rotate-4'
            />
        </div>
    )
}
