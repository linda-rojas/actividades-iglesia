import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardsInformationAreaEvents } from '../../../mocks/cards-informations';
import { InformationActivities } from './InformationActivities';
import { Link } from 'react-router-dom';

export const ActivitiesArea = () => {
    const home = '/'

    return (
        <div>
            <header className='s:h-[65px] bg-blue-700 flex xs:gap-[3.5rem] s:gap-[5rem] items-center w-full select-none'>
                <Link to={home}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Eventos zona 61</h1>
            </header>
            <section className='container-cards flex flex-wrap flex-col items-center mt-[4rem] lg:flex-row gap-8 select-none'>
            { CardsInformationAreaEvents.map( information => (
                    <InformationActivities
                        key={information.title}
                        imageName={information.imageName}
                        title={information.title}
                        description={information.description}
                        button={information.button}
                        to={information.to}/>
                ))}
            </section>
        </div>
    )
}

