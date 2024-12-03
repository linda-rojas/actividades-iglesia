
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
            <div className="min-h-[20px] w-[300px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start">
                <div className='flex justify-around items-center w-full gap-[5px]'>
                    <p className='text-[11px] flex flex-col justify-start items-center'>{date1}</p>
                    <p className='text-[11px] flex flex-col justify-start items-center'>{date2}</p>
                    <p className='text-[11px] flex flex-col justify-start items-center'>{date3}</p>
                    <p className='text-[11px] flex flex-col justify-start items-center'>{date4}</p>
                </div>
            </div>
            <div className='min-h-[90px] w-[300px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start'>
            <div className='flex justify-start items-center w-full gap-[5px]'>
                    <p className='text-[11px] flex flex-col justify-start items-center'>
                        <p className="text-center">{date1Text}</p>
                        <p className="font-bold text-center">{textToilet}</p>
                    </p>
                    <p className='text-[11px] flex flex-col justify-center items-center'>
                        <p className="text-center">{date2Text}</p>
                        <p className="font-bold text-center">{textToilet}</p>
                    </p>
                    <p className='flex flex-col justify-center items-center text-[11px] font-normal'>
                        <p className="text-center">{date3Text}</p>
                        <p className="font-bold text-center">{textToilet}</p>
                    </p>
                    <p className='flex flex-col justify-center items-center text-[11px] font-normal'>
                        <p className="text-center">{date4Text}</p>
                        <p className="font-bold text-center">{textToilet}</p>
                    </p>
            </div>
        </div>
        </>
    )
}

