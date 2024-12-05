import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { CardInformationNotebookLeaders } from '../../../../mocks/cards-informations';
import { ListInformation } from './ListInformation';



export const Sectors = () => {
    const ActivitiesCurch = '/ActivitiesCurch'
    return (
        <div className='select-none'>
            <header className='s:h-[65px] bg-[#3e8cf2] flex xs:gap-[4rem] s:gap-[5rem] items-center w-full select-none'>
                <Link to={ActivitiesCurch}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
            <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Planillas de líderes</h1>
        </header>
        <section className='relative mt-[3rem] flex flex-wrap flex-col items-center lg:flex-row gap-8 select-none'>
            { CardInformationNotebookLeaders.map( information => (
                <ListInformation
                    key={information.sector}
                    sector={information.sector}
                    classbg={information.classbg}
                    to={information.to}
                    />
                ))}
        </section>
        </div>

    )
}