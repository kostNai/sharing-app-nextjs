import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
    imageSrc: StaticImageData
    title: string
    desc: string
}

export default function SimpleReceipCard({ imageSrc, title, desc }: Props) {
    return (
        <div className='w-[540px] h-[245px]'>
            <div className='relative'>
                <Image src={imageSrc} alt='cake image' />
                <div className='absolute left-10 top-16 text-white flex flex-col gap-10'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-3xl font-semibold'>{title}</h2>
                        <p className='text-xl'>{desc}</p>
                    </div>
                    <Link
                        href='/'
                        className=' w-fit bg-[#40BA37] py-4 px-8 font-semibold uppercase border-l-4 border-l-solid border-l-[#1C8314] cursor-pointer'
                    >
                        До Рецепту
                    </Link>
                </div>
            </div>
        </div>
    )
}
