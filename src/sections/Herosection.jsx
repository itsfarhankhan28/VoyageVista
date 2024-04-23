import discoverimg from '../assets/IMG/discovericon 1.png'
import searchimg from '../assets/IMG/search.png'
import { Link } from 'react-router-dom'

const Herosection = () => {
  return (
    <>
    <div className="flex justify-center items-center text-3xl font-main-font h-screen flex-col">
      <div className='flex justify-between items-center flex-wrap w-[1200px]'>
        <h1 className="font-bold text-9xl">Discover</h1>
        <img src={discoverimg} alt="" />
        <h1 className='font-light text-9xl'>Your</h1>
        <h1 className='font-bold text-9xl'>Next</h1>
      </div>
      <div className='flex gap-1'>
        <h1 className='font-light text-9xl'>Adventure</h1>
        <img src={searchimg} alt="" />
        <h1 className='font-bold text-9xl'>Here!</h1>
      </div> 
      <div className='pt-10'>
        <Link to='/destinations'>
          <button className='w-[350px] py-4 bg-black text-white rounded-xl'>
            Explore VoyageVista
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Herosection
