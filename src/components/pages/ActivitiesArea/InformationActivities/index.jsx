
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
        <div className='max-w-[230px] max-h-[84px] w-full flex bg-white shadow-slate-700 shadow-md'>
            <figure className='max-w-[97px] min-h-[84px]'>
                <img 
                    className='object-cover h-full'
                    src={imageCard} 
                    alt='image-card' />
            </figure>
            <div className='flex flex-col w-full justify-center gap-2 items-center'>
                    <span className='m-[-2px] font-roboto font-medium text-[16px] text-center text-gray-600'>{title}</span>
                    <p className='text-[10px] w-[100px] font-roboto font-light text-description text-center'>{description}</p>
            </div>
        </div>
    )
}

