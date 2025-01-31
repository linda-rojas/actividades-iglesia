
export function CardsInformativeActivities(
    {
    // eslint-disable-next-line
    imageName,
    // eslint-disable-next-line
    title,
    // eslint-disable-next-line
    description,
}) {

    const imageCard = `/assets/img/${imageName}.jpg`
    
    
    return (
        <div className='xs:max-w-[275px] s:max-w-[330px] xs:min-h-[100px] s:min-h-[120px] w-full flex bg-white rounded-[0.8rem] shadow-slate-700 shadow-md'>
            <figure className='w-[260px]'>
                <img 
                    className='object-cover min-h-[120px] rounded-l-[0.8rem]'
                    src={imageCard} 
                    alt='image-card' />
            </figure>
            <div className='flex flex-col w-full justify-center items-center s:gap-[3px]'>
                    <span className='m-[-2px] font-roboto font-medium xs:text-[17px] s:text-[18px] text-center text-gray-600'>{title}</span>
                    <p className='text-[14px] w-[160px] font-roboto font-light text-description text-center'>{description}</p>

            </div>
        </div>
    )
}

