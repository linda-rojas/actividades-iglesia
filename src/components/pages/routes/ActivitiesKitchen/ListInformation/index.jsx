
export function ListInformation(
    {
    // eslint-disable-next-line
    date1,
    // eslint-disable-next-line
    date2,
    // eslint-disable-next-line
    date3,
    // eslint-disable-next-line
    date4,
    // eslint-disable-next-line
    date1Text,
    // eslint-disable-next-line
    date2Text,
    // eslint-disable-next-line
    date3Text,
    // eslint-disable-next-line
    date4Text,
    // eslint-disable-next-line
    textToilet,
}) {
    return (
        <>
            <div className="xs:min-h-[20px] s:min-h-[25px] xs:w-[300px] s:w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start">
                <div className='flex justify-around items-center w-full xs:gap-[5px] s:gap-[2px]'>
                    <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>{date1}</p>
                    <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>{date2}</p>
                    <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col justify-start items-center w-[73px]'>{date3}</p>
                </div>
            </div>
            <div className='xs:min-h-[50px] s:min-h-[60px] xs:w-[300px] s:w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start'>
            <div className='flex justify-start items-center w-full gap-[12px]'>
                    <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-start items-center'>
                        <p className="text-center">{date1Text}</p>
                    </p>
                    <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-center items-center'>
                        <p className="text-center ">{date2Text}</p>
                    </p>
                    <p className='xs:text-[13px] s:text-[14px] flex flex-col justify-center items-center'>
                        <p className="text-center ">{date3Text}</p>
                    </p>
            </div>
        </div>
        </>
    )
}

