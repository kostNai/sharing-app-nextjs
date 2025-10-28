import Image1 from '@/../public/img/insta/insta1.jpg'
import Image2 from '@/../public/img/insta/insta2.jpg'
import Image3 from '@/../public/img/insta/insta3.jpg'
import Image4 from '@/../public/img/insta/insta4.jpg'
import Image5 from '@/../public/img/insta/insta5.jpg'
import Image6 from '@/../public/img/insta/insta6.jpg'
import Image7 from '@/../public/img/insta/insta7.jpg'
import Insta from '../insta/Insta'

const data = [Image1, Image2, Image3, Image4, Image5, Image6, Image7]
export default function InstaList() {
    return (
        <div className='w-full mt-10'>
            <h2 className='pl-92 text-2xl font-bold'>
                Шукайте нас в Instagram
            </h2>
            <div className='w-full flex mt-10'>
                {data.map((item, indx) => (
                    <Insta key={indx} img={item} />
                ))}
            </div>
        </div>
    )
}
