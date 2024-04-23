import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white font-main-font">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-gray-300">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">VoyageVista</span>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-5">
              <Link to='/'>
                <a className="text-gray-800 hover:text-gray-600 font-semibold">Home</a>
              </Link>
                <Link to='/destinations'>
              <a className="text-gray-800 hover:text-gray-600 font-semibold">Destination</a>
                </Link>
              <a className="text-gray-800 hover:text-gray-600 font-semibold">About Us</a>
            </div>
          </div>
          <div>
            <Link to='/signup'>
              <button className="inline-block bg-white border border-black font-semibold px-4 py-2 rounded-lg">Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
