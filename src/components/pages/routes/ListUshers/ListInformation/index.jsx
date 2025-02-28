
export function ListInformation({
    // eslint-disable-next-line
    numColumnDay1,
    // eslint-disable-next-line
    numColumnDay2,
    // eslint-disable-next-line
    numColumnDay3,
    // eslint-disable-next-line
    numColumnDay4,
    // eslint-disable-next-line
    usher1,
    // eslint-disable-next-line
    usher2,
    // eslint-disable-next-line
    usher3,
    // eslint-disable-next-line
    usher4,
    // eslint-disable-next-line
    theyNotClean1,
    // eslint-disable-next-line
    theyNotClean2,
    // eslint-disable-next-line
    Toilet,
 //    eslint-disable-next-line
    fast
}) {



    return (
        <>
            <div className="xs:min-h-[25px] s:min-h-[30px] xs:w-[300px] s:w-[350px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start">
                <div className="flex justify-around items-center w-full gap-[5px]">
                        <p className="xs:text-[13px] s:text-[14px] font-semibold flex flex-col justify-start items-center">
                            {numColumnDay1}
                        </p>
                        <p className="xs:text-[13px] s:text-[14px] font-medium flex flex-col justify-start items-center">
                            {numColumnDay2}
                        </p>
                        <p className="xs:text-[13px] s:text-[14px] font-medium flex flex-col justify-start items-center">
                            {numColumnDay3}
                        </p>
                        <p className="xs:text-[13px] s:text-[14px] font-medium flex flex-col justify-start items-center">
                            {numColumnDay4}
                        </p>
                </div>
            </div>
            <div className="xs:min-h-[90px] s:min-h-[120px] xs:w-[300px] s:w-[350px] flex bg-white border-r-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-600 justify-start">
                <div className="flex justify-end items-center w-full xs:gap-[9px] s:gap-[13px]">
                        <p className="xs:text-[13px] s:text-[14px]  flex flex-col justify-center items-center w-[90px]">
                            <p className="text-center">{usher1}</p>
                            <p className="font-bold text-center xs:text-[11px] s:text-[12px]">{usher1 == ""? "": Toilet}</p>
                        </p>
                        <p className="xs:text-[13px] s:text-[14px] flex flex-col justify-center items-center w-[90px]">
                            <p className="text-center">{usher2}</p>
                            <p className="font-bold text-center text-[12px]">{usher2 == ""? "": Toilet} {usher2 == ""? <span className="text-red-500 text-[16px]">{fast}</span> : ""}</p>
                        </p>
                        <p className="flex flex-col justify-center items-center text-[14px] w-[86px]">
                            <p className="text-center">{usher3}</p>
                            <p className="font-bold text-center text-[12px]">
                              {theyNotClean1? <p className="font-normal text-[14px]">{theyNotClean1}</p> : Toilet}
                            </p>
                        </p>
                        <p className="flex flex-col justify-center items-center text-[14px] w-[86px]">
                            <p className="text-center text-[14px]">{usher4}</p>
                            <p className="font-bold text-center text-[12px]">
                            {theyNotClean2? <p className="font-normal text-[14px]">{theyNotClean2}</p> : Toilet}
                            </p>
                        </p>
                </div>
            </div>
        </>
    );
}

