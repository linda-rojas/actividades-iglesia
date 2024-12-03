import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardInformationSector1 } from '../../../../../../mocks/cards-informations';
import { Link } from 'react-router-dom';
import { InformationSector } from './InformationCalendar';


export const Sector1 = () => {
    const sectors = '/Sectors'

    return (
        <div>
            <header className='h-[50px] bg-[#3e8cf2] flex gap-[8rem] items-center w-full select-none'>
                <Link to={sectors}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Sector #1</h1>
            </header>
            <section className='relative top-[3rem] mb-[5rem] flex flex-wrap flex-col items-center lg:flex-row gap-3 select-none'>
            { CardInformationSector1.map( information => (
                    <InformationSector
                        key={information.num}
                        day={information.day}
                        num={information.num}
                        description={information.description}
                        />
                ))}
            </section>
        </div>
    )
}

