import { ChevronLeftIcon } from '@heroicons/react/24/solid'
// import { CardsInformationListUshers } from '../../../../mocks/cards-informations';
import { ListInformation } from './ListInformation';
import { Link } from 'react-router-dom';


export const ListUshers = () => {
    const ActivitiesCurch = '/ActivitiesCurch'

    return (
        <div>
            <header className='s:h-[65px] bg-blue-700 flex xs:gap-[4rem] s:gap-[6rem] items-center w-full select-none'>
                <Link to={ActivitiesCurch}>
                    <article className='flex ml-5'>
                        <ChevronLeftIcon className='w-5 h-[3rem] text-white' stroke='currentColor'/>
                    </article>
                </Link>
                <h1 className='text-center font-roboto font-semibold text-[24px] text-white'>Listado de Ujieres</h1>
            </header>
            <section className='relative top-[5rem] flex flex-wrap flex-col items-center lg:flex-row select-none'>
            <div className='h-[60px] xs:min-w-[300px] s:min-w-[350px] flex items-center justify-around text-[13px] text-white bg-yellow-600 text-center'>
                <span className='xs:text-[16px] s:text-[16px]'>Martes <p className='xs:text-[13px] s:text-[13px]'>Hora: 5pm</p></span>
                <span className='xs:text-[16px] s:text-[16px]'>Jueves <p className='xs:text-[13px] s:text-[13px]'>Hora: 5pm</p></span>
                <span className='xs:text-[16px] s:text-[16px]'>Sábado 
                    <p className='xs:text-[13px] s:text-[13px]'>Hora: 5pm</p>
                </span>
                <span className='xs:text-[16px] s:text-[16px]'>Domingo <p className='xs:text-[13px] s:text-[13px]'>Hora: 7am</p></span>
            </div>
            <div className='xs:h-[25px] s:h-[30px] xs:min-w-[300px] s:min-w-[350px] flex items-center xs:gap-[5px] s:gap-[15px] xs:pl-[152px] s:pl-[167px] text-[13px] text-white bg-yellow-600 text-center'>
                <p className='xs:text-[11px] s:text-[13px]'>uniforme gris</p>
                <p className='xs:text-[11px] s:text-[13px]'>uniforme negro</p>
            </div>
                <ListInformation/>
            </section>
        </div>
    )
}

