
export function ListInformation(
    {
    // eslint-disable-next-line
    date,
    // eslint-disable-next-line
    family,
    // eslint-disable-next-line
    tel,
}) {
    return (
        <div className='min-h-[30px] w-[270px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300'>
            <div className='flex justify-between w-full'>
                    <p className='text-[10px] w-[85px] flex flex-col justify-center items-center'>{date}</p>
                    <p className='text-[11px] flex flex-col justify-center items-center'>{family}</p>
                    <p className='w-[80px] flex flex-col justify-center items-center text-[10px] font-normal'>{tel}</p>
            </div>
        </div>
    )
}

