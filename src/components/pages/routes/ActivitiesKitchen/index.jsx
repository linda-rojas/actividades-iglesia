import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardsInformationListKitchen } from '../../../../mocks/cards-informations';
import { ListInformation } from './ListInformation';
import { Link } from 'react-router-dom';


export const ListKitchen = () => {
    const ActivitiesCurch = '/ActivitiesCurch'

    return (
        <div>
            <header className='s:h-[65px] bg-blue-700 flex xs:gap-[3.5rem] s:gap-[6rem] items-center w-full select-none'>
                <Link to={ActivitiesCurch}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Actividades Cocina</h1>
            </header>
            <section className='relative top-[5rem] flex flex-wrap flex-col items-center lg:flex-row select-none'>
            <div className='xs:h-[35px] s:h-[45px] xs:min-w-[300px] s:min-w-[365px] flex items-center justify-around xs:text-[15px] s:text-[18px] font-medium text-white bg-yellow-600 text-center'>
                <span>Jueves</span>
                <span>Sábado </span>
                <span>Domingo</span>
            </div>
            { CardsInformationListKitchen.map( information => (
                    <ListInformation
                        key={information.date1}
                        date1={information.date1}
                        date2={information.date2}
                        date3={information.date3}
                        date1Text={information.date1Text}
                        date2Text={information.date2Text}
                        date3Text={information.date3Text}
                        />
                ))}
            </section>
        </div>
    )
}

