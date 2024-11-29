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
                <section className='flex flex-col  items-center gap-2'>
                    <h1 className='font-montserrat flex-wrap text-center lg:block text-gray-700 font-extrabold text-[47px]'>EVENTOS</h1>
                    <h1 className='font-montserrat flex-wrap text-center lg:block text-gray-700 font-extrabold text-[47px]'>DICIEMBRE</h1>
                    <p className='font-roboto font-medium text-sm text-gray-500'>¿Qué evento te gustaría explorar?</p>
                </section>    
            </div>
            <div className='flex justify-items-center mt-[2rem] relative'>
                <figure className='svg w-full min-h-[40rem] left-0 z-[-1] rounded-tl-[70px] rounded-tr-[70px] bg-cover bg-center h-64 sm:h-80 md:h-96 lg:h-128 bg-blue-700 opacity-85'>
                    <img 
                    src={FondoPrincipal}
                    className='rounded-tl-[70px] rounded-tr-[70px] w-full h-full opacity-30' 
                    alt='Fondo-Principal' />
                    {/* Aquí es donde vas a centrar los <InformationActivities /> */}
                    <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
                        <div className='flex flex-wrap justify-center gap-8'>
                            {CardsInformationHome.map(information => (
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
                </figure>
            </div>
        </div>
    );
}
