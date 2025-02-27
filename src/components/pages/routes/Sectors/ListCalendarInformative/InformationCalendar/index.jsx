
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
        <div className='max-w-[330px] min-h-[60px] w-full flex bg-white shadow-slate-700 shadow-md rounded-[0.4rem]'>
            <div className='min-w-[85px] bg-orange-600 text-white items-center justify-center flex flex-col rounded-l-[0.4rem]'>
                <span className='text-[16px] font-medium'>{day}</span>
                <p className='text-[16px] font-medium'>{num}</p>
            </div>
            <div className='flex flex-col w-full justify-center items-center'>
                    <p className='text-[15px] text-center text-gray-700'>
                        {description == "Ayuno congregacional"  || description == "Ayuno del Sector" || description == "Ayuno Alto San Isidro" ? <span className="text-red-500 text-[16px] font-semibold">{description}</span> : description}
                    </p>
            </div>
        </div>
    )
}

