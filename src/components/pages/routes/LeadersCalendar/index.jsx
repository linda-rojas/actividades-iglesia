import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardInformationLeaders } from '../../../../mocks/cards-informations';
import { CalendarInformativeActivities } from './CalendarInformativeActivities';
import { Link } from 'react-router-dom';


export const LeadersCalendar = () => {
    const curch = '/ActivitiesCurch'

    return (
        <div>
            <header className='h-[50px] bg-[#3e8cf2] flex gap-[3rem] items-center w-full select-none'>
            <Link to={curch}>
                <article className='flex ml-5'>
                    <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                </article>
            </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Planillas de Líderes</h1>
            </header>
            <section className='relative top-[3rem] mb-[5rem] flex flex-wrap flex-col items-center lg:flex-row gap-3 select-none'>
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

