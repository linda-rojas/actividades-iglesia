import { Link } from 'react-router-dom';

export const ListInformation = ({
    // eslint-disable-next-line
    sector,
    // eslint-disable-next-line
    classbg,
    // eslint-disable-next-line
    to
}) => {
    return (
        <Link 
            className={`${classbg} min-h-[40px] w-[210px] flex flex-col justify-center rounded-md`}
            to={to}>
            <h1 className='text-center font-medium text-[17px] text-white'>{sector}</h1>
        </Link>
    )
}