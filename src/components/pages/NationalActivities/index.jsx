import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardsInformationNationalActivities } from '../../../mocks/cards-informations';
import { InformationActivities } from './InformationActivities';
import { Link } from 'react-router-dom';


export const NationalActivities = () => {
    const home = '/ '

    return (
        <div>
            <header className='xs:gap-[2rem] xs:h-[60px] s:h-[65px] bg-blue-700 flex s:gap-[3rem] items-center w-full select-none'>
            <Link to={home}>
                <article className='flex ml-5'>
                    <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                </article>
            </Link>
                <h1 className='text-center font-roboto font-semibold xs:text-[25px] s:text-[27px] text-white'>Actividades Nacionales</h1>
            </header>
            <section className='relative mt-[4rem] mb-[4rem] flex flex-wrap flex-col items-center gap-8 select-none'>
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

