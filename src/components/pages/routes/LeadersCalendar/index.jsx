import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardInformationLeaders } from '../../../../mocks/cards-informations';
import { CalendarInformativeActivities } from './CalendarInformativeActivities';

export const LeadersCalendar = () => {

    return (
        <div>
            <header className='h-[53px] bg-[#6aaaff] flex gap-[4rem] items-center w-full'>
                <article className='flex ml-5'>
                    <ChevronLeftIcon className='w-5 h-5 text-white' stroke='currentColor'/>
                </article>
                <h1 className='text-center font-roboto font-semibold text-xl text-white'>Iglesia la plata</h1>
            </header>
            <section className='relative top-[3rem] mb-[5rem] flex flex-wrap flex-col items-center lg:flex-row gap-3'>
            { CardInformationLeaders.map( information => (
                    <CalendarInformativeActivities
                        key={information.num}
                        day={information.day}
                        num={information.num}
                        description={information.description} />
                ))}
            </section>
        </div>
    )
}

