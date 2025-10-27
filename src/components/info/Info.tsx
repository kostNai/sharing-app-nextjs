import { IoMdQuote } from 'react-icons/io'

export default function Info() {
    return (
        <div className='px-80 flex justify-between gap-10 *:flex-1 *:box-border *:h-[460px]'>
            <div className='min-w-0'>
                <div className='h-full border-8 border-solid border-[#40BA37] flex flex-col justify-between  p-10'>
                    <div className='flex justify-center'>
                        <IoMdQuote className='text-[#40BA37] ' />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h4 className='text-xl font-semibold text-center'>
                            Немає нічого кращого, ніж повернутися додому до
                            родини, поїсти смачної їжі та відпочити.
                        </h4>
                        <p className='text-center'>Науменко Остап</p>
                    </div>
                    <div className='flex justify-between items-center text-xs'>
                        <p className='text-[#40BA37]'>01 Вересня 2025р</p>
                        <p className=' text-gray-400'>2 Коментаря</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-full'>
                <h3 className='text-2xl font-semibold '>
                    Підпишіться на новини
                </h3>
                <div className='mt-15 flex-1 bg-[url(/img/img-3.jpg)] bg-center bg-cover flex flex-col px-4 py-8'>
                    <form className='w-full flex flex-col gap-6'>
                        <input
                            type='email'
                            placeholder='Введіть email'
                            className='bg-white border-l-4 border-l-solid border-l-[#40BA37]  focus:outline-0 px-2 py-6 text-gray-400'
                        />
                        <button className='px-2 py-6 text-white bg-[#40BA37] cursor-pointer'>
                            Підписатися
                        </button>
                    </form>
                    <div className='mt-10 text-white italic'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque vero in sit modi omnis dolore
                            nesciunt, eum culpa eveniet magnam.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='flex-1 bg-[url(/img/img-3.jpg)] bg-center bg-cover px-8 py-10'>
                    <div className='border-2 border-solid border-[#40BA37] w-full h-content text-white flex flex-col gap-4 py-10 px-4 relative'>
                        <h4 className=' text-center text-2xl font-bold text-[#40BA37]'>
                            Вже у продажу
                        </h4>
                        <h5 className='text-center text-xl font-semibold '>
                            Книга рецептів бургерів
                        </h5>
                        <p className='text-center'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Nisi, officia.
                        </p>
                        <div className='bg-[#40BA37] w-20 h-20 rounded-full absolute -right-5 -top-5 flex justify-center items-center text-sm'>
                            <p className='text-center font-bold'>
                                Топ продажів
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
