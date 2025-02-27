import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

import { CardsActivitiesPraiseGroup } from '../../../../mocks/cards-informations';
import { Information } from './CardsInformativeActivities';


export const ListPraise = () => {
    const ActivitiesCurch = '/ActivitiesCurch'

    return (
        <div>
            <header className='s:h-[65px] bg-blue-700 flex xs:gap-[4rem] s:gap-[5rem] items-center w-full select-none'>
                <Link to={ActivitiesCurch}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[27px] text-white'>Grupo de Alabanza</h1>
            </header>
            <section className='relative top-[3rem] select-none mb-[5rem] flex flex-wrap flex-col items-center lg:flex-row gap-8'>
                    <h2 className='text-gray-500 text-[20px] font-semibold'>MARZO</h2>
                        { CardsActivitiesPraiseGroup.map( information => (
                                <Information
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

