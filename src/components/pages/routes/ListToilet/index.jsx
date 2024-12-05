import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardActivitiesToilet } from '../../../../mocks/cards-informations';
import { ListInformation } from './ListInformation';
import { Link } from 'react-router-dom';


export const ListToilet = () => {
    const ActivitiesCurch = '/ActivitiesCurch'

    return (
        <div>
            <header className='s:h-[65px] bg-[#3e8cf2] flex xs:gap-[4rem] s:gap-[5rem] items-center w-full select-none'>
                <Link to={ActivitiesCurch}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Listado de Aseo</h1>
            </header>
            <section className='relative top-[5rem] flex flex-wrap flex-col items-center lg:flex-row select-none'>
            <div className='h-5 min-w-[270px] flex items-center justify-around text-[13px] text-white bg-green-700'>
                <span>Sábado</span>
                <span>Familia</span>
                <span>Celular</span>
            </div>
            { CardActivitiesToilet.map( information => (
                    <ListInformation
                        key={information.tel}
                        date={information.date}
                        family={information.family}
                        tel={information.tel} />
                ))}
            </section>
        </div>
    )
}

