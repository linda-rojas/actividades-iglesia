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
        <div className='xs:max-w-[300px] s:max-w-[345px] xs:max-h-[110px] s:max-h-[120px] w-full flex bg-white shadow-slate-900 shadow-md min-w-full  rounded-[1rem]'>
            <figure className='xs:min-h-[75px] s:w-[fit-content] s:min-h-[84px]'>
                <img 
                    className='object-cover w-[300px] h-full rounded-l-[1rem]'
                    src={imageCard} 
                    alt='image-card' />
            </figure>
            <div className='flex flex-col'>
                    <span className='xs:text-[16px] s:text-[20px] font-roboto font-medium text-center self-center text-gray-600 w-[90%]'>{title}</span>
                    <p className='xs:text-[13px] font-roboto font-light s:text-[14px] text-center pl-[3px] pr-[3px]'>{description}</p>
                    <Link to={to}>
                        <button className='bg-custom-yellow hover:bg-green-600 flex justify-center xs:mt-[2px] mb-[2px] w-20 h-4 rounded-full ml-2 text-white text-xs '><span className='m-[-1px]'>{button}</span></button>
                    </Link>

            </div>
        </div>
    )
}

