import CarouselHomePage from '@/components/carousel/CarouselHomePage'
import Cake from '@/../public/img/cake.jpg'
import Noodles from '@/../public/img/noodles.jpg'
import SimpleReceipCard from '@/components/simpleReceipCard/SimpleReceipCard'
import BestRecipesList from '@/components/bestRecipesList/BestRecipesList'
import Parallax from '@/components/parallax/Parallax'

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
        <div className='max-w-screen  '>
            <div className='px-16'>
                <CarouselHomePage />
            </div>
            <div className='mt-20 w-full flex justify-center px-16'>
                <div className='w-[1110px]'>
                    <div className='w-full flex justify-center gap-10'>
                        {data.map((item, indx) => (
                            <SimpleReceipCard
                                key={indx}
                                imageSrc={item.imageSrc}
                                title={item.title}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                    <div className='w-full'>
                        <h2 className='text-3xl font-semibold text-center my-16'>
                            Кращі рецепти
                        </h2>
                        <BestRecipesList />
                    </div>
                </div>
            </div>
            <div className='w-[calc(100vw-20px)]'>
                <Parallax />
            </div>
        </div>
    )
}
