
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
        <div className='w-full max-w-[330px] min-h-[90px] flex bg-white shadow-slate-700 shadow-md'>
            <figure className='max-w-[97px] min-h-[ 84px]'>
                <img 
                    className='object-cover h-full'
                    src={imageCard} 
                    alt='image-card' />
            </figure>
            <div className='flex flex-col justify-center aling-center'>
                    <span className='font-roboto font-medium text-[20px] text-center text-gray-600'>{title}</span>
                    <p className='font-roboto font-light text-[13px] text-center mb-[5px]'>{description}</p>
            </div>
        </div>
    )
}

