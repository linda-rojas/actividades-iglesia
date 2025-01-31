import { ChevronLeftIcon } from '@heroicons/react/24/solid'
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
                <div className="xs:min-h-[20px] s:min-h-[25px] xs:w-[300px] s:w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start">
                    <div className='flex justify-around items-center w-full xs:gap-[5px] s:gap-[2px]'>
                        <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'></p>
                        <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>1</p>
                        <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>2</p>
                    </div>
                </div>
                <div className='xs:min-h-[50px] s:min-h-[60px] xs:w-[300px] s:w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start'>
                    <div className='flex justify-start items-center w-full gap-[12px]'>
                        <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-start items-center w-[9rem]'>
                            <p className="text-center"></p>
                        </p>
                        <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-center items-center'>
                            <p className="text-center ">MAESTRAS ESCUELA D.</p>
                        </p>
                        <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-center items-center'>
                            <p className="text-center ">HNA MERLY Y HNA EDNA</p>
                        </p>
                    </div>
                </div>
                <div className="xs:min-h-[20px] s:min-h-[25px] xs:w-[300px] s:w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start">
                <div className='flex justify-around items-center w-full xs:gap-[5px] s:gap-[2px]'>
                    <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>6</p>
                    <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>8</p>
                    <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>9</p>
                </div>
                </div>
                <div className='xs:min-h-[50px] s:min-h-[60px] xs:w-[300px] s:w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start'>
                    <div className='flex justify-start items-center w-full gap-[12px]'>
                        <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-start items-center w-[9rem]'>
                            <p className="text-center">HNA LAURA Y HNA DENIS</p>
                        </p>
                        <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-center items-center'>
                            <p className="text-center ">GRUPO C. MISIONERO</p>
                        </p>
                        <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-center items-center'>
                            <p className="text-center ">GRUPO C. MISIONERO</p>
                        </p>
                    </div>
                </div>
                <div className="xs:min-h-[20px] s:min-h-[25px] xs:w-[300px] s:w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start">
                <div className='flex justify-around items-center w-full xs:gap-[5px] s:gap-[2px]'>
                    <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>13</p>
                    <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>15</p>
                    <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>16</p>
                </div>
                </div>
                <div className='xs:min-h-[50px] s:min-h-[60px] xs:w-[300px] s:w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start'>
                    <div className='flex justify-start items-center w-full gap-[12px]'>
                        <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-start items-center w-[10rem]'>
                            <p className="text-center">HNA ARGENIS</p>
                        </p>
                        <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-center items-center'>
                            <p className="text-center ">HNA ANREA Y HNA ADELA</p>
                        </p>
                        <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-center items-center'>
                            <p className="text-center ">HNA LUZ DARY Y HNA FLOR</p>
                        </p>
                    </div>
                </div>
                <div className="xs:min-h-[20px] s:min-h-[25px] xs:w-[300px] s:w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start">
                <div className='flex justify-around items-center w-full xs:gap-[5px] s:gap-[2px]'>
                    <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>20</p>
                    <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>22</p>
                    <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>23</p>
                </div>
                </div>
                <div className='xs:min-h-[50px] s:min-h-[60px] xs:w-[300px] s:w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start'>
                    <div className='flex justify-start items-center w-full gap-[12px]'>
                        <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-start items-center w-[9rem]'>
                            <p className="text-center">HNO YONEFER Y ESPOSA</p>
                        </p>
                        <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-center items-center'>
                            <p className="text-center ">GRUPO DE ALABANZA</p>
                        </p>
                        <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-center items-center'>
                            <p className="text-center ">GRUPO DE ALABANZA</p>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

