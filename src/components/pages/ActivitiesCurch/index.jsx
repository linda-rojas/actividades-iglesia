import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardsInformationCurch } from '../../../mocks/cards-informations';
import { CardsInformativeActivities } from './CardsInformativeActivities';
import { Link } from 'react-router-dom';


export const ActivitiesCurch = () => {

    const home = '/'
    return (
        <div>
            <header className='xs:gap-[4.5rem] s:h-[65px] bg-blue-700 flex s:gap-[6rem] items-center w-full'>
            <Link to={home}>
                <article className='flex ml-5'>
                    <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                </article>
            </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white select-none '>Iglesia la plata</h1>
            </header>
            <section className='relative top-[3rem] select-none mb-[5rem] flex flex-wrap flex-col items-center lg:flex-row gap-8'>
            { CardsInformationCurch.map( information => (
                    <CardsInformativeActivities
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

