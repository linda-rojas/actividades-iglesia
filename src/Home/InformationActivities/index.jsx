import { Link } from 'react-router-dom';
import './index.css'


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
        <div className='card flex bg-white shadow-slate-700 shadow-md'>
            <figure className='img-card'>
                <img 
                    className='object-cover w-full h-full'
                    src={imageCard} 
                    alt='image-card' />
            </figure>
            <div className='flex flex-col'>
                    <span className='font-roboto font-medium text-lg text-center text-gray-600'>{title}</span>
                    <p className='description font-roboto font-light text-description text-center'>{description}</p>
                    <Link to={to}>
                        <button className='color hover:bg-green-600 flex justify-center  mt-1 font-normal w-20 h-4 rounded-full ml-2 text-white text-xs '><span className='span'>{button}</span></button>
                    </Link>

            </div>
        </div>
    )
}

