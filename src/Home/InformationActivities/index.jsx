import { Link } from 'react-router-dom';

export function InformationActivities({
    // eslint-disable-next-line
  imageName,
   // eslint-disable-next-line
  title,
 // eslint-disable-next-line
  description,
 // eslint-disable-next-line
  button,
 // eslint-disable-next-line
  to 
}) {
    const imageCard = `/assets/img/${imageName}.jpg`;

    return (
        <div className="w-full max-w-[350px] min-w-[300px] max-h-[200px] flex bg-white shadow-slate-700 shadow-md rounded-bl-lg">
            <figure className="min-w-[110px] min-h-[84px] flex-shrink-0">
                <img 
                    className="object-cover w-[110px] h-[84px] sm:w-[130px] sm:h-[100px] md:w-[150px] md:h-[120px]"
                    src={imageCard} 
                    alt="image-card" 
                />
            </figure>
            <div className="flex flex-col justify-between p-2 w-full">
                <span className="font-roboto font-medium text-[16px] sm:text-[18px] text-center self-center text-gray-600">{title}</span>
                <p className="font-roboto font-light text-[12px] sm:text-[14px] text-center line-clamp-2 h-[48px] overflow-hidden text-ellipsis">{description}</p>
                <Link to={to}>
                    <button className="bg-[#ef8f41e3] hover:bg-green-600 flex justify-center mt-[0.75rem] font-normal w-full sm:w-24 h-8 rounded-full text-white text-xs">
                        <span className="m-[-1px]">{button}</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
