
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
        <div className='max-w-[270px] min-h-[40px] w-full flex bg-white shadow-slate-700 shadow-md rounded-[0.4rem]'>
            <div className='min-w-[50px] bg-green-800 text-white items-center justify-center flex flex-col rounded-l-[0.4rem]'>
                <span className='text-[10px]'>{day}</span>
                <p className='text-[13px]'>{num}</p>
            </div>
            <div className='flex flex-col w-full justify-center items-center'>
                    <p className='text-[12px] w-[142px] font-roboto font-normal text-description text-center text-gray-700'>{description}</p>
            </div>
        </div>
    )
}

