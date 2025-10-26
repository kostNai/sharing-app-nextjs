import Image from 'next/image'
import {
    FaPinterest,
    FaFacebookF,
    FaTwitter,
    FaDribbble,
    FaBehance,
    FaLinkedinIn,
} from 'react-icons/fa'
import Logo from '@/../public/img/logo.png'

export default function Footer() {
    return (
        <footer className='w-full flex justify-center my-10'>
            <div className='w-3/4 flex items-center justify-between'>
                <div className='text-gray-400 flex items-center gap-8 *:hover:text-[#40BA37] *:cursor-pointer *:transition *:duration-300'>
                    <FaPinterest />
                    <FaFacebookF />
                    <FaTwitter />
                    <FaDribbble />
                    <FaBehance />
                    <FaLinkedinIn />
                </div>
                <div>
                    <Image src={Logo} alt='logo image' />
                </div>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Molestias
                </div>
            </div>
        </footer>
    )
}
