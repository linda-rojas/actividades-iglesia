
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
        <div className='xs:max-w-[280px] s:max-w-[330px] min-h-[90px] w-full rounded-[0.8rem] flex bg-white shadow-slate-700 shadow-md'>
            <figure className='max-w-[120px] min-h-[84px]'>
                <img 
                    className='object-cover h-full rounded-l-[0.8rem]  '
                    src={imageCard} 
                    alt='image-card' />
            </figure>
            <div className='flex flex-col w-full justify-center gap-2 items-center'>
                    <span className='m-[-2px] font-roboto font-medium text-[17px] text-center text-gray-600'>{title}</span>
                    <p className='text-[14px] w-[130px] font-roboto font-light text-description text-center'>{description}</p>
            </div>
        </div>
    )
}

