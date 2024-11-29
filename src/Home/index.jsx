import './index.css'
import { InformationActivities } from './InformationActivities';
import { CardsInformationHome } from '../mocks/cards-informations';

export function Home() {
    const LemaArmonia = `/assets/img/lema3.png`;
    const FondoPrincipal = `/assets/img/fondo.jpg`;


    return (
        <div className='flex flex-col items-center h-screen'>
            <div className='flex flex-col gap-2 items-center'>
                <figure className='w-56 h-24'>
                    <img src={LemaArmonia} alt='Lema-armonia' />
                </figure>
                <section className='flex flex-col items-center gap-2'>
                    <h1 className='font-montserrat flex-wrap text-center lg:block text-gray-700 font-extrabold text-4xl'>EVENTOS</h1>
                    <h1 className='font-montserrat flex-wrap text-center lg:block text-gray-700 font-extrabold text-4xl'>DICIEMBRE</h1>
                    <p className='font-roboto font-medium text-sm text-gray-500'>¿Qué evento te gustaría explorar?</p>
                </section>    
            </div>
            <div className='flex justify-items-center mt-[2rem]'>
                <figure className='svg bg-cover bg-center h-64 sm:h-80 md:h-96 lg:h-128  bg-blue-700 opacity-85'>
                    <img 
                    src={FondoPrincipal}
                    className='svg-fondo w-full h-full opacity-30' 
                    alt='Fondo-Principal' />
                </figure>
                <div className='container-cards flex flex-wrap flex-col lg:flex-row gap-8 '>
                
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