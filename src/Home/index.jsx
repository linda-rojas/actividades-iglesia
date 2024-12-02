import { InformationActivities } from './InformationActivities';
import { CardsInformationHome } from '../mocks/cards-informations';

export function Home() {
    const LemaArmonia = `/assets/img/lema3.png`;
    const FondoPrincipal = `/assets/img/fondo.jpg`;


    return (
        <div className='flex flex-col items-center justify-between'>
            <div className='flex flex-col items-center'>
                <figure className='w-56 h-24'>
                    <img src={LemaArmonia} alt='Lema-armonia' />
                </figure>
                <section className='flex flex-col items-center gap-2'>
                    <div className='text-[25px]'>
                        <h1 className='font-montserrat flex-wrap text-center lg:block text-gray-700 font-extrabold space-y-1'>EVENTOS</h1>
                        <h1 className='font-montserrat flex-wrap text-center lg:block text-gray-700 font-extrabold space-y-1'>DICIEMBRE</h1>
                    </div>
                    <p className='font-roboto font-medium text-sm text-gray-500'>¿Qué evento te gustaría explorar?</p>
                </section>    
            </div>
            <div className='flex justify-items-center'>
            <div className='relative top-[8rem] flex flex-wrap flex-col lg:flex-row gap-4 '>
                
                { CardsInformationHome.map( information => (
                    <InformationActivities 
                        key={information.title}
                        imageName={information.imageName}
                        title={information.title}
                        description={information.description}
                        button={information.button}
                        to={information.to}/>
                ))}
                </div>
                <figure className='svg fixed b-[0px] w-full min-h-[28rem] left-0 z-[-1] rounded-tl-[70px] rounded-tr-[70px] bg-cover bg-center bottom-[0] h-[16rem]  bg-blue-700 opacity-85'>
                    <img 
                    src={FondoPrincipal}
                    className='rounded-tl-[70px] rounded-tr-[70px] w-full h-full opacity-30' 
                    alt='Fondo-Principal' />
                </figure>
                
            </div>
        </div>
    )
}