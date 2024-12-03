import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardsInformationListUshers } from '../../../../mocks/cards-informations';
import { ListInformation } from './ListInformation';
import { Link } from 'react-router-dom';


export const ListUshers = () => {
    const ActivitiesCurch = '/ActivitiesCurch'

    return (
        <div>
            <header className='h-[50px] bg-[#3e8cf2] flex gap-[6rem] items-center w-full select-none'>
                <Link to={ActivitiesCurch}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Listado de Ujieres</h1>
            </header>
            <section className='relative top-[5rem] flex flex-wrap flex-col items-center lg:flex-row select-none'>
            <div className='h-[50px] min-w-[300px] flex items-center justify-around text-[13px] text-white bg-green-700 text-center'>
                <span >Martes <p className='text-[11px]'>Hora: 5pm</p></span>
                <span>Jueves <p className='text-[11px]'>Hora: 5pm</p></span>
                <span>Sábado 
                    <p className='text-[11px]'>Hora: 5pm</p>
                    </span>
                <span>Domingo <p className='text-[11px]'>Hora: 7am</p></span>
            </div>
            <div className='h-[20px] min-w-[300px] flex items-center gap-[5px] pl-[153px] text-[13px] text-white bg-green-700 text-center'>
                <p className='text-[11px]'>uniforme gris</p>
                <p className='text-[11px]'>uniforme negro</p>
            </div>
            { CardsInformationListUshers.map( information => (
                    <ListInformation
                        key={information.date1}
                        date1={information.date1}
                        date2={information.date2}
                        date3={information.date3}
                        date4={information.date4}
                        date1Text={information.date1Text}
                        date2Text={information.date2Text}
                        date3Text={information.date3Text}
                        date4Text={information.date4Text}
                        textToilet={information.textToilet}
                        />
                ))}
            </section>
        </div>
    )
}

