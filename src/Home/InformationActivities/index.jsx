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
        <div className='w-full max-w-[350px] max-h-[120px] flex bg-white shadow-slate-700 shadow-md min-w-full rounded-bl-lg'>
            <figure className='min-w-[110px] min-h-[84px]'>
                <img 
                    className='object-cover w-full h-full'
                    src={imageCard} 
                    alt='image-card' />
            </figure>
            <div className='flex flex-col'>
                    <span className='font-roboto font-medium text-[20px] text-center self-center text-gray-600 w-[90%]'>{title}</span>
                    <p className='font-roboto font-light text-[14px] text-center h-[48px]'>{description}</p>
                    <Link to={to}>
                        <button className='bg-[#ef8f41e3] hover:bg-green-600 flex justify-center  mt-[0.75rem] font-normal w-20 h-4 rounded-full ml-2 text-white text-xs '><span className='m-[-1px]'>{button}</span></button>
                    </Link>

            </div>
        </div>
    )
}

