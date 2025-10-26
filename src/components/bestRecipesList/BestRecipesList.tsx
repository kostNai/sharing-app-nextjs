import Breakfast from '@/../public/img/best/breakfast.jpg'
import Burger from '@/../public/img/best/burger.jpg'
import FruitDessert from '@/../public/img/best/fruit_desert.jpg'
import Smoothie from '@/../public/img/best/smoothie.jpg'
import Soup from '@/../public/img/best/soup.jpg'
import Sushi from '@/../public/img/best/sushi.jpg'
import BestRecipeCard from '../bestRecipeCard/BestRecipeCard'

const data = [
    {
        img: Breakfast,
        title: 'Домашній сніданок',
        rating: 4,
    },
    {
        img: Burger,
        title: 'Домашній бургер',
        rating: 4,
    },
    {
        img: FruitDessert,
        title: 'Фруктовий десерт',
        rating: 4,
    },
    {
        img: Smoothie,
        title: 'Веганський смузі',
        rating: 4,
    },
    {
        img: Soup,
        title: 'Кабачковий суп',
        rating: 4,
    },
    {
        img: Sushi,
        title: 'Легкий рецепт суші',
        rating: 4,
    },
]

export default function BestRecipesList() {
    return (
        <div className='flex flex-wrap justify-between gap-y-10'>
            {data.map((item, indx) => (
                <BestRecipeCard
                    key={indx}
                    img={item.img}
                    title={item.title}
                    rating={item.rating}
                />
            ))}
        </div>
    )
}
