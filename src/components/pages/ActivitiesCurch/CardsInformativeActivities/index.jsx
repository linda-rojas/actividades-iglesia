import { Link } from 'react-router-dom';


export function CardsInformativeActivities(
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
        <div className='xs:max-w-[275px] s:max-w-[285px] s:max-h-[95px] w-full flex bg-white rounded-[0.8rem] shadow-slate-700 shadow-md'>
            <figure className='max-w-[97px] min-h-[84px]'>
                <img 
                    className='object-cover h-full rounded-l-[0.8rem]'
                    src={imageCard} 
                    alt='image-card' />
            </figure>
            <div className='flex flex-col w-full justify-center items-center'>
                    <span className='m-[-2px] font-roboto font-medium text-[16px] text-center text-gray-600'>{title}</span>
                    <p className='text-[10px] w-[160px] font-roboto font-light text-description text-center'>{description}</p>
                    <Link to={to}>
                        <button className='bg-[#ef8f41e3] hover:bg-green-600 flex justify-center  mt-1 font-normal w-20 rounded-full ml-2 text-white text-[12px] '><span className='span'>{button}</span></button>
                    </Link>

            </div>
        </div>
    )
}

