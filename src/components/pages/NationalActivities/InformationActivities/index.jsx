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

    // const imageCard = `/assets/img/${imageName}.jpg`
    
    
    return (
        <a href={to}>
        <div className='w-full xs:max-w-[310px] s:max-w-[350px] h-[fit-content] flex bg-white shadow-slate-700 rounded-[0.8rem] shadow-md'>
            <figure className='xs:w-[130px] s:w-[150px]'>
                <img 
                    className='object-cover xs:min-h-[130px] s:min-h-[130px] xs:min-w-[120px] s:min-w-[140px] rounded-l-[0.8rem]'
                    src={imageName} 
                    alt='image-card'/>
            </figure>
            <div className='flex flex-col justify-center aling-center'>
                    <span className='font-roboto font-medium xs:text-[18px] s:text-[20px] text-center text-gray-600'>{title}</span>
                    <p className='font-roboto font-light xs:text-[13px] s:text-[14px] text-center mb-[5px] pl-[5px] pr-[5px]'>{description}</p>
            </div>
        </div>
        </a>

    )
}

