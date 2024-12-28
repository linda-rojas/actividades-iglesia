import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


export const ListEBICOL = () => {
    const ActivitiesCurch = '/ActivitiesCurch'
    const FondoEBICOL = `/assets/img/ebicol-informative.jpg`;

    return (
        <div>
            <header className='s:h-[65px] bg-blue-700 flex xs:gap-[3rem] s:gap-[6rem] items-center w-full select-none'>
                <Link to={ActivitiesCurch}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Actividades 
                    <span className='text-purple-500 pl-3'>E</span>
                    <span className='text-orange-500'>B</span>
                    <span className='text-green-500'>I</span>
                    <span className='text-yellow-300'>C</span>
                    <span className='text-blue-500'>O</span>
                    <span className='text-orange-600'>L</span>
                    </h1>
            </header>
            <section className='h-[200px] mt-20 bg-black'>
                <figure className='flex justify-center'>
                    <img src={FondoEBICOL} alt='Fondo_EBICOL' />
                </figure>
                <article className='bg-black justify-center items-center flex flex-col h-28 text-center text-white xs:text-[15px] s:text-[18px] font-montserrat font-semibold'>
                    <section>Las clases de escuela dominical inician:</section>
                    <section>El 26 de Enero</section>
                    <section>¡Te esperamos!</section>
                </article>
            </section>
        </div>
    )
}

