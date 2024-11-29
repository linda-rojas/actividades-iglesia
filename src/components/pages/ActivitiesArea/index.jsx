import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardsInformationAreaEvents } from '../../../mocks/cards-informations';
import { InformationActivities } from './InformationActivities';

export const ActivitiesArea = () => {

    return (
        <div>
            <header className='h-[53px] bg-[#6aaaff] flex gap-[4rem] items-center w-full'>
                <article className='flex ml-5'>
                    <ChevronLeftIcon className='w-5 h-5 text-white' stroke='currentColor'/>
                </article>
                <h1 className='text-center font-roboto font-semibold text-xl text-white'>Eventos zona 61</h1>
            </header>
            <section className='container-cards flex flex-wrap flex-col items-center lg:flex-row gap-8'>
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

