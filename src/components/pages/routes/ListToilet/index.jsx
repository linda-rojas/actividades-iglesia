import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CardActivitiesToilet } from '../../../../mocks/cards-informations';
import { ListInformation } from './ListInformation';

export const ListToilet = () => {

    return (
        <div>
            <header className='h-[40px] bg-[#6aaaff] flex gap-[4rem] items-center w-full'>
                <article className='flex ml-5'>
                    <ChevronLeftIcon className='w-5 h-4 text-white' stroke='currentColor'/>
                </article>
                <h1 className='text-center font-roboto font-semibold text-[17px] text-white'>Iglesia la plata</h1>
            </header>
            <section className='relative top-[2rem] mb-[5rem] flex flex-wrap flex-col items-center lg:flex-row'>
            <div className='h-5 min-w-[270px] flex items-center justify-around text-[11px] text-white bg-green-700'>
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

