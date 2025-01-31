import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardActivitiesToilet } from '../../../../mocks/cards-informations';
import { ListInformation } from './ListInformation';
import { Link } from 'react-router-dom';


export const ListToilet = () => {
    const ActivitiesCurch = '/ActivitiesCurch'

    return (
        <div>
            <header className='s:h-[65px] bg-blue-700 flex xs:gap-[4rem] s:gap-[5rem] items-center w-full select-none'>
                <Link to={ActivitiesCurch}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Listado de Aseo</h1>
            </header>
            <section className='relative top-[5rem] flex flex-wrap flex-col items-center lg:flex-row select-none'>
            <div className='xs:h-8 s:h-10 xs:min-w-[300px] s:min-w-[365px] flex items-center justify-around xs:text-[15px] s:text-[18px] font-medium text-white bg-yellow-600'>
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
            <div className='relative top-[8rem] flex flex-col pl-3 pr-3 gap-3 text-center'>
            <h2 className='text-gray-500 font-medium'>Y TODO LO QUE HACÉIS, SEA DE PALABRA O DE HECHO, HACEDLO TODO EN EL NOMRE DEL SEÑOR JESÚS, DANDO GRASIAS A DIOS PADRE POR MEDIO DE EL.</h2>
            <span className='text-gray-500 font-medium'>COLOSENSES 3:17</span>
            </div>
        </div>
    )
}

