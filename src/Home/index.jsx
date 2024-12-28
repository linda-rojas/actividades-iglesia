import { InformationActivities } from './InformationActivities';
import { CardsInformationHome } from '../mocks/cards-informations';
import './styles.css'



export function Home() {
    const Lema = `/assets/img/generaciones.jpg`;
    const FondoPrincipal = `/assets/img/fondo.jpg`;
    const DiosTuRazonDeVivir = `/assets/img/DiosTuRazonDeVivir.png`


    return (
        <div className='flex flex-col items-center justify-between min-h-screen gap-[8px] select-none'>
            <div className='flex flex-col items-center w-full'>
                <figure className='w-full h-[94px] fondo'>
                    <img src={Lema} alt='Lema-generaciones' className='w-full h-full object-cover' />
                </figure>
                <section className='flex flex-col items-center gap-2'>
                    <div className='text-[25px] pt-8'>
                        <h1 className='font-montserrat flex-wrap text-center lg:block text-gray-700 font-extrabold space-y-1'>AGENDA DE</h1>
                        <h1 className='font-montserrat flex-wrap text-center lg:block text-gray-700 font-extrabold space-y-1'>ENERO</h1> 
                    </div>
                    <p className='font-roboto font-medium text-sm text-gray-500'>¿Qué evento te gustaría explorar?</p>
                </section>    
            </div>
            <div className='flex justify-items-center xs:pb-10 s:pb-10 pt-12 relative w-full justify-center s:pt-14'>
                <figure className='svg absolute b-[0px] w-full left-0 z-[-1] rounded-tl-[70px] rounded-tr-[70px] top-[0] bg-blue-900 opacity-85 h-full'>
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
                    <a href='https://www.facebook.com/MMM.zona.61?locale=es_LA' className='flex gap-[4px] justify-center items-center bg-white rounded'>
                            <p className='font-roboto font-medium text-[11px] text-gray-600'>Sigue nuestras novedades
                            </p>
                            <div className='flex items-center justify-center h-[20px]'>
                                <p className='text-[12px] mb-[5px] mr-1 ml-1'>👉</p>
                            </div>
                            <figure className='h-[30px] w-[30px]'>
                                <img 
                                    src={DiosTuRazonDeVivir}
                                    className='h-full w-full'
                                    alt='Dios tu razón de vivir' />
                            </figure>
                        </a>
                </div>
            </div>
        </div>
    )
}