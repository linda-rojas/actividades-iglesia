import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardsInformationNationalActivities } from '../../../mocks/cards-informations';
import { InformationActivities } from './InformationActivities';

export const NationalActivities = () => {


    return (
        <div>
            <header className='h-[50px] bg-[#3e8cf2] flex gap-[3rem] items-center w-full'>
                <article className='flex ml-5'>
                    <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                </article>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Actividades Nacionales</h1>
            </header>
            <section className='relative mt-[3rem] flex flex-wrap flex-col items-center lg:flex-row gap-8'>
            { CardsInformationNationalActivities.map( information => (
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

