import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { CardsInformationListKitchen } from '../../../../mocks/cards-informations';
import { ListInformation } from './CardsInformativeActivities';


export const ListKitchen = () => {
    const ActivitiesCurch = '/ActivitiesCurch'

    return (
        <div>
            <header className='xs:h-[60px] s:h-[65px] bg-blue-700 flex xs:gap-[3.5rem] s:gap-[6rem] items-center w-full select-none'>
                <Link to={ActivitiesCurch}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Actividades Cocina</h1>
            </header>
            <section className='relative top-[5rem] flex flex-wrap flex-col items-center lg:flex-row select-none'>
                <div className='xs:h-[45px] s:h-[45px] xs:min-w-[320px] s:min-w-[365px] flex items-center justify-around xs:text-[18px] s:text-[18px] font-medium text-white bg-yellow-600 text-center'>
                    <span>Jueves</span>
                    <span>Sábado </span>
                    <span>Domingo</span>
                </div>

                { CardsInformationListKitchen.map( information => (

                    <ListInformation
                        key={information.numColumnDay2}
                
                        numColumnDay1={information.numColumnDay1}
                        numColumnDay2={information.numColumnDay2}
                        numColumnDay3={information.numColumnDay3}

                        cooks1={information.cooks1}
                        cooks2={information.cooks2}
                        cooks3={information.cooks3}/>
                ))}
            </section>
        </div>
    )
}

