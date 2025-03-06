
export function Information(
    {
    // eslint-disable-next-line
    day,
    // eslint-disable-next-line
    num,
    // eslint-disable-next-line
    description,
}) {
    return (
        <div className='xs:max-w-[300px] s:max-w-[340px] xs:min-h-[60px] s:min-h-[60px]  w-full flex bg-white shadow-slate-700 shadow-md rounded-[0.4rem]'>
            <div className='xs:min-w-[75px] s:min-w-[80px] bg-green-700 text-white items-center justify-center flex flex-col rounded-l-[0.4rem]'>
                <span className='xs:text-[14px] s:text-[15px] font-medium'>{day}</span>
                <p className='xs:text-[15px] s:text-[16px] font-medium'>{num}</p>
            </div>
            <div className='flex flex-col w-full justify-center items-center'>
                    <p className='text-[15px] text-center text-gray-700'>{description}</p>
            </div>
        </div>
    )
}

