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
        <a href={to}>
                    <div className='w-full xs:max-w-[280px] s:max-w-[330px] min-h-[90px] flex bg-white shadow-slate-700 rounded-[0.8rem] shadow-md'>
            <figure className='max-w-[97px] min-h-[ 84px]'>
                <img 
                    className='object-cover h-full rounded-l-[0.8rem]'
                    src={imageCard} 
                    alt='image-card'/>
            </figure>
            <div className='flex flex-col justify-center aling-center'>
                    <span className='font-roboto font-medium xs:text-[18px] s:text-[20px] text-center text-gray-600'>{title}</span>
                    <p className='font-roboto font-light xs:text-[12px] s:text-[13px] text-center mb-[5px]'>{description}</p>
            </div>
        </div>
        </a>

    )
}

