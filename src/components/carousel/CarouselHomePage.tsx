'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Image1 from '@/../../public/img/img-1.jpg'
import Image2 from '@/../../public/img/img-2.jpg'
import Image3 from '@/../../public/img/img-3.jpg'

export default function CarouselHomePage() {
    return (
        <Carousel
            className='w-full mt-16'
            opts={{ loop: true }}
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}
        >
            <CarouselContent>
                <CarouselItem>
                    <div className='relative w-full h-[820px]'>
                        <Image
                            src={Image1}
                            alt='carousel image 1'
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'top center',
                            }}
                            fill
                        />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className='relative w-full h-[820px]'>
                        <Image
                            src={Image2}
                            alt='carousel image 2'
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'top center',
                            }}
                            fill
                        />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className='relative w-full h-[820px]'>
                        <Image
                            src={Image3}
                            alt='carousel image 3'
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'top center',
                            }}
                            fill
                        />
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='absolute left-12 top-1/2 text-[#40BA37] cursor-pointer hover:text-white hover:bg-[#40BA37]' />
            <CarouselNext className='absolute right-12 top-1/2 text-[#40BA37] cursor-pointer hover:text-white hover:bg-[#40BA37]' />
        </Carousel>
    )
}
