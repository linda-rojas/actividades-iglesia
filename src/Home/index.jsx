import { InformationActivities } from './InformationActivities';
import { CardsInformationHome } from '../mocks/cards-informations';
// import { ArrowLongRightIcon } from '@heroicons/react/24/solid'


export function Home() {
    const LemaArmonia = `/assets/img/lema3.png`;
    const FondoPrincipal = `/assets/img/fondo.jpg`;
    const DiosTuRazonDeVivir = `/assets/img/DiosTuRazonDeVivir.png`


    return (
        <div className='flex flex-col items-center justify-between min-h-screen gap-12 select-none'>
            <div className='flex flex-col items-center'>
                <figure className='w-56 h-24'>
                    <img src={LemaArmonia} alt='Lema-armonia' />
                </figure>
                <section className='flex flex-col items-center gap-2'>
                    <div className='text-[25px]'>
                        <h1 className='font-montserrat flex-wrap text-center lg:block text-gray-700 font-extrabold space-y-1'>EVENTOS</h1>
                        <h1 className='font-montserrat flex-wrap text-center lg:block text-gray-700 font-extrabold space-y-1'>DICIEMBRE</h1>
                        
                        <a href='https://www.facebook.com/MMM.zona.61?locale=es_LA' className='flex gap-[4px] justify-center items-center'>
                            <p className='font-roboto font-medium text-[11px] text-gray-500'>Sigue nuestras novedades
                            </p>
                            {/* <ArrowLongRightIcon className='w-[18px] h-[18px] text-gray-500' stroke='currentColor'/> */}
                            <div className='flex items-center justify-center h-[20px]'>
                                <p className='text-[12px] mb-[8px]'>👉</p>
                            </div>
                            <figure className='h-[25px] w-[25px]'>
                                <img 
                                    src={DiosTuRazonDeVivir}
                                    className='h-full w-full'
                                    alt='Dios tu razón de vivir' />
                            </figure>
                        </a>
                        
                    </div>
                    <p className='font-roboto font-medium text-sm text-gray-500'>¿Qué evento te gustaría explorar?</p>
                </section>    
            </div>
            <div className='flex justify-items-center xs:pb-12 s:pb-14 pt-12 relative w-full justify-center s:pt-[5rem]'>
                <figure className='svg absolute b-[0px] w-full left-0 z-[-1] rounded-tl-[70px] rounded-tr-[70px] top-[0] bg-blue-700 opacity-85 h-full'>
                    <img 
                    src={FondoPrincipal}
                    className='rounded-tl-[70px] rounded-tr-[70px] w-full h-full opacity-30' 
                    alt='Fondo-Principal' />
                </figure>
                <div className='relative flex flex-wrap flex-col lg:flex-row gap-4 '>
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
            </div>
        </div>
    )
}