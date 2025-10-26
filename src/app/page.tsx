import CarouselHomePage from '@/components/carousel/CarouselHomePage'
import Cake from '@/../public/img/cake.jpg'
import Noodles from '@/../public/img/noodles.jpg'
import SimpleReceipCard from '@/components/simpleReceipCard/SimpleReceipCard'

const data = [
    {
        imageSrc: Cake,
        title: 'Полуничне тістечко',
        desc: 'Просто і смачно',
    },
    {
        imageSrc: Noodles,
        title: 'Китайська локшина',
        desc: 'Просто і смачно',
    },
]

export default function Home() {
    return (
        <div className='max-w-screen px-16 '>
            <CarouselHomePage />
            <div className='mt-20 w-full flex justify-center gap-10'>
                {data.map((item, indx) => (
                    <SimpleReceipCard
                        key={indx}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </div>
    )
}
