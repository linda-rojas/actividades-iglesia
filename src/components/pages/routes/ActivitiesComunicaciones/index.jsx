import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

import { CardsActivitiesComunicaciones } from '../../../../mocks/cards-informations';
import { CardsInformativeActivities } from './CardsInformativeActivities';


export const ListComunicaciones = () => {
    const ActivitiesCurch = '/ActivitiesCurch'

    return (
        <div>
            <header className='xs:h-[60px] s:h-[65px] bg-blue-700 flex xs:gap-[2rem] s:gap-[3rem] items-center w-full select-none'>
                <Link to={ActivitiesCurch}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold xs:text-[24px] s:text-[27px] text-white'>Equipo de Comunicación</h1>
            </header>
            <section className='relative top-[3rem] select-none mb-[5rem] flex flex-wrap flex-col items-center lg:flex-row gap-8'>
                        { CardsActivitiesComunicaciones.map( information => (
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

