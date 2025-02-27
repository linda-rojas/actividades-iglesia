
export function ListInformation({
    // eslint-disable-next-line
    numColumnDay1,
    // eslint-disable-next-line
    numColumnDay2,
    // eslint-disable-next-line
    numColumnDay3,
    // eslint-disable-next-line
    cooks1,
    // eslint-disable-next-line
    cooks2,
    // eslint-disable-next-line
    cooks3,
  }) {

    return (
        <>
            <div className="min-h-[25px] w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 ">
                    <div className='flex justify-around w-full gap-[2px]'>
                        <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col  items-center w-[73px]'>{numColumnDay1}</p>
                        <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col  items-center w-[73px]'>{numColumnDay2}</p>
                        <p className='xs:text-[13px] s:text-[16px] font-medium flex flex-col  items-center w-[73px]'>{numColumnDay3}</p>
                    </div>
            </div>

            <div className='min-h-[60px] w-[365px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600'>
                <div className='flex items-center w-full gap-[12px]'>
                    <p className='text-[15px] flex flex-col  w-[7rem]'>
                        <p className="text-center">{cooks1}</p>
                    </p>
                    <p className='w-[7rem] text-[15px] flex flex-col '>
                        <p className="text-center ">{cooks2}</p>
                    </p>
                    <p className='w-[7rem] text-[15px] flex flex-col'>
                        <p className="text-center ">{cooks3}</p>
                    </p>
                </div>
        </div>
        </>
    );
}