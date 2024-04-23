/* eslint-disable react/prop-types */

const SpotsCard = ({name,city,country,thumbnail}) => {
  return (
    <div className='w-[290px] h-[300px] rounded-2xl shadow-xl flex flex-col'>
        <div className="h-[60%]">
            <img className="h-full w-full rounded-t-2xl" src={`${thumbnail}`} alt="" />
        </div>
        <div className="h-[40%] px-1">
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <h2 className='text-lg font-semibold'>City:- <span className='text-md font-normal'>{city}</span></h2>
            <h2 className='text-lg font-semibold'>Country:- <span className='text-md font-normal'>{country}</span></h2>
        </div>
    </div>
  )
}

export default SpotsCard
