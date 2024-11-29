
export function CalendarInformativeActivities(
    {
    // eslint-disable-next-line
    day,
    // eslint-disable-next-line
    num,
    // eslint-disable-next-line
    description,
}) {
    return (
        <div className='max-w-[270px] min-h-[35px] w-full flex bg-white shadow-slate-700 shadow-md'>
            <div className='min-w-[50px] bg-green-800 text-white items-center justify-center flex flex-col '>
                <span className='text-[7px]'>{day}</span>
                <p className='text-[11px]'>{num}</p>
            </div>
            <div className='flex flex-col w-full justify-center items-center'>
                    <p className='text-[10px] w-[142px] font-roboto font-normal text-description text-center'>{description}</p>
            </div>
        </div>
    )
}

