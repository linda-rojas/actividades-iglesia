import { Link } from 'react-router-dom';


export function InformationActivities(
    {
    // eslint-disable-next-line
    imageName,
    // eslint-disable-next-line
    title,
    // eslint-disable-next-line
    description,
    // eslint-disable-next-line
    button,
    // eslint-disable-next-line
    to 
}) {

    const imageCard = `/assets/img/${imageName}.jpg`
    
    
    return (
        <div className='xs:max-w-[280px] xs:max-h-[100px] s:max-w-[345px] s:max-h-[120px] w-full flex bg-white shadow-slate-700 shadow-md min-w-full  rounded-[1rem]'>
            <figure className='xs:min-h-[75px] xs:min-w-[95px] s:min-w-[110px] s:min-h-[84px]'>
                <img 
                    className='object-cover w-full h-full rounded-l-[1rem]'
                    src={imageCard} 
                    alt='image-card' />
            </figure>
            <div className='flex flex-col'>
                    <span className='xs:text-[15px] s:text-[20px] font-roboto font-medium text-center self-center text-gray-600 w-[90%]'>{title}</span>
                    <p className='xs:text-[11px] font-roboto font-light s:text-[14px] text-center pl-[3px] pr-[3px]'>{description}</p>
                    <Link to={to}>
                        <button className='bg-[#ef8f41e3] hover:bg-green-600 flex justify-center  mt-[5px] font-normal w-20 h-4 rounded-full ml-2 text-white text-xs '><span className='m-[-1px]'>{button}</span></button>
                    </Link>

            </div>
        </div>
    )
}

