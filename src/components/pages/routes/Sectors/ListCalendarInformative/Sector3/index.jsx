import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardInformationSector3 } from '../../../../../../mocks/cards-informations';
import { Link } from 'react-router-dom';
import { InformationSector } from '../Sector1/InformationCalendar';


export const Sector3 = () => {
    const sectors = '/Sectors'

    return (
        <div>
            <header className='s:h-[65px] bg-[#3e8cf2] flex xs:gap-[7rem] s:gap-[8rem] items-center w-full select-none'>
                <Link to={sectors}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Sector #3</h1>
            </header>
            <section className='relative top-[3rem] mb-[5rem] flex flex-wrap flex-col items-center lg:flex-row gap-3 select-none'>
            { CardInformationSector3.map( information => (
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

