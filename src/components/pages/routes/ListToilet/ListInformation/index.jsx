
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
        <div className='xs:min-h-[45px] s:min-h-[55px] xs:w-[300px] s:w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-500'>
            <div className='flex justify-between w-full p-[4px]'>
                    <p className='xs:text-[14px] s:text-[16px] xs:w-[85px] s:w-[85px] flex flex-col justify-center items-center font-medium'>{date}</p>
                    <p className='xs:text-[13px] s:text-[14px] xs:w-[0px] s:w-[90px] text-center flex flex-col justify-center items-center'>{family}</p>
                    <p className='xs:text-[13px] s:text-[15px] xs:w-[85px] s:w-[97px] pr-1 flex flex-col justify-center items-center'>{tel}</p>
            </div>
        </div>
    )
}

