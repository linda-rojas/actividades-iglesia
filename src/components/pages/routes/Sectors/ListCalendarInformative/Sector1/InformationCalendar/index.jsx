
export function InformationSector(
    {
    // eslint-disable-next-line
    day,
    // eslint-disable-next-line
    num,
    // eslint-disable-next-line
    description,
}) {
    return (
        <div className='xs:max-w-[270px] s:max-w-[300px] xs:min-h-[50px] s:min-h-[50px]  w-full flex bg-white shadow-slate-700 shadow-md rounded-[0.4rem]'>
            <div className='xs:min-w-[62px] s:min-w-[68px] bg-orange-600 text-white items-center justify-center flex flex-col rounded-l-[0.4rem]'>
                <span className='xs:text-[13px] s:text-[14px] font-medium'>{day}</span>
                <p className='xs:text-[13px] s:text-[14px] font-medium'>{num}</p>
            </div>
            <div className='flex flex-col w-full justify-center items-center'>
                    <p className='text-[15px] text-center text-gray-700'>{description}</p>
            </div>
        </div>
    )
}

