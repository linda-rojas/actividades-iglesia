import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardsInformationAreaEvents } from '../../../mocks/cards-informations';
import { InformationActivities } from './InformationActivities';

export const ActivitiesArea = () => {

    return (
        <div>
            <header className='h-[50px] bg-[#3e8cf2] flex gap-[5rem] justify-center items-center w-full'>
                <article className='flex'>
                    <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                </article>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Eventos zona 61</h1>
            </header>
            <section className='container-cards flex flex-wrap flex-col items-center mt-[3rem] lg:flex-row gap-8'>
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

