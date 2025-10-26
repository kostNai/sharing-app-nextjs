'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image1 from '@/../../public/img/img-1.jpg'
import Image2 from '@/../../public/img/img-2.jpg'
import Image3 from '@/../../public/img/img-3.jpg'
import CarouselCard from '../carouselCard/CarouselCard'

const carouselData = [
    {
        title: 'Title 1',
        recipe: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est, repellendus magni et inventore dolorum quidem omnis quos fugit non nostrum ex debitis dolor vitae officiis ipsam velit dolorem enim architecto autem perferendis nisi. Non adipisci sequiplaceat perferendis, maxime, eos, labore odio autem voluptate officia architecto?',
        image: Image1,
    },
    {
        title: 'Title 1',
        recipe: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est, repellendus magni et inventore dolorum quidem omnis quos fugit non nostrum ex debitis dolor vitae officiis ipsam velit dolorem enim architecto autem perferendis nisi. Non adipisci sequiplaceat perferendis, maxime, eos, labore odio autem voluptate officia architecto?',
        image: Image2,
    },
    {
        title: 'Title 1',
        recipe: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est, repellendus magni et inventore dolorum quidem omnis quos fugit non nostrum ex debitis dolor vitae officiis ipsam velit dolorem enim architecto autem perferendis nisi. Non adipisci sequiplaceat perferendis, maxime, eos, labore odio autem voluptate officia architecto?',
        image: Image3,
    },
]

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
                {carouselData.map((item, indx) => (
                    <CarouselItem key={indx}>
                        <CarouselCard
                            imagesrc={item.image}
                            title={item.title}
                            receip={item.recipe}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='absolute left-12 top-1/2 text-[#40BA37] cursor-pointer hover:text-white hover:bg-[#40BA37]' />
            <CarouselNext className='absolute right-12 top-1/2 text-[#40BA37] cursor-pointer hover:text-white hover:bg-[#40BA37]' />
        </Carousel>
    )
}
