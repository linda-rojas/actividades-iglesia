import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardInformationAltoSanIsidro } from '../../../../../../mocks/cards-informations';
import { Link } from 'react-router-dom';
import { InformationSector } from '../InformationCalendar';


export const AltoSanIsidro = () => {
    const sectors = '/Sectors'

    return (
        <div>
            <header className='xs:h-[60px] s:h-[65px] bg-blue-700 flex xs:gap-[5rem] s:gap-[6rem] items-center w-full select-none'>
                <Link to={sectors}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Alto San Isidro</h1>
            </header>
            <section className='relative top-[2rem] mb-[5rem] flex flex-wrap flex-col items-center lg:flex-row gap-3 select-none'>
            <h2 className='font-montserrat font-semibold text-[19px] text-gray-500 mb-1'>MARZO</h2>
            { CardInformationAltoSanIsidro.map( information => (
                    <InformationSector
                        key={information.num}
                        day={information.day}
                        num={information.num}
                        description={information.description}
                        fast={information.fast}
                        />
                ))}
            </section>
        </div>
    )
}

