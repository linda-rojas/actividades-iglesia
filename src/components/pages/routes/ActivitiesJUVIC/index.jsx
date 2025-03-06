import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

import { CardsActivitiesJUVIC } from '../../../../mocks/cards-informations';
import { CardsInformativeActivities } from './CardsInformativeActivities';


export const ListJUVIC = () => {
    const ActivitiesCurch = '/ActivitiesCurch'

    return (
        <div>
            <header className='xs:h-[60px] s:h-[65px] bg-blue-700 flex xs:gap-[4rem] s:gap-[6rem] items-center w-full select-none'>
                <Link to={ActivitiesCurch}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Actividades 
                    <span className='text-purple-400 pl-3'>J</span>
                    <span className='text-purple-400'>U</span>
                    <span className='text-purple-400'>V</span>
                    <span className='text-purple-400'>I</span>
                    <span className='text-purple-400'>C</span>
                    </h1>
            </header>
            <section className='relative top-[3rem] select-none mb-[5rem] flex flex-wrap flex-col items-center lg:flex-row gap-8'>
                        { CardsActivitiesJUVIC.map( information => (
                                <CardsInformativeActivities
                                    key={information.title}
                                    imageName={information.imageName}
                                    title={information.title}
                                    description={information.description}
                                    />
                            ))}
            </section>
        </div>
    )
}

