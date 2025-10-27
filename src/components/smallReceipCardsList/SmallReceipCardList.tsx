import BerryDessert from '@/../public/img/small/berry_dessert.jpg'
import Bread from '@/../public/img/small/bread.jpg'
import ChickenSalad from '@/../public/img/small/chicken_salad.jpg'
import Fruits from '@/../public/img/small/fruits.jpg'
import Macaroons from '@/../public/img/small/macaroons.jpg'
import Pasta from '@/../public/img/small/pasta.jpg'
import Scalops from '@/../public/img/small/scalops.jpg'
import Tart from '@/../public/img/small/tart.jpg'
import Zucchini from '@/../public/img/small/zucchini.jpg'
import SmallReceipCard from '../smallReceipCard/SmallReceipCard'

const data = [
    {
        img: Pasta,
        title: 'Домашня італійська паста',
        date: '21 Травня 2024р.',
        rating: 4,
        commentsValue: 2,
    },
    {
        img: Bread,
        title: 'Запечений хліб',
        date: '21 Травня 2024р.',
        rating: 4,
        commentsValue: 2,
    },
    {
        img: Scalops,
        title: 'Скалоп на солі',
        date: '21 Травня 2024р.',
        rating: 4,
        commentsValue: 2,
    },
    {
        img: Fruits,
        title: 'Фрукти на тарілці',
        date: '21 Травня 2024р.',
        rating: 4,
        commentsValue: 2,
    },
    {
        img: Macaroons,
        title: 'Макаруни',
        date: '21 Травня 2024р.',
        rating: 4,
        commentsValue: 2,
    },
    {
        img: Tart,
        title: 'Шоколадний паріг',
        date: '21 Травня 2024р.',
        rating: 4,
        commentsValue: 2,
    },
    {
        img: BerryDessert,
        title: 'Ягідний десерт',
        date: '21 Травня 2024р.',
        rating: 4,
        commentsValue: 2,
    },
    {
        img: Zucchini,
        title: 'Кабачки, запечені на грилі з перцем',
        date: '21 Травня 2024р.',
        rating: 4,
        commentsValue: 2,
    },
    {
        img: ChickenSalad,
        title: 'Салат з куркою',
        date: '21 Травня 2024р.',
        rating: 4,
        commentsValue: 2,
    },
]

export default function SmallReceipCardList() {
    return (
        <div className='flex flex-wrap items-center gap-10 px-80'>
            {data.map((item, indx) => (
                <SmallReceipCard
                    key={indx}
                    img={item.img}
                    title={item.title}
                    date={item.date}
                    rating={item.rating}
                    commentsValue={item.commentsValue}
                />
            ))}
        </div>
    )
}
