import './App.css'
import { createBrowserRouter , Outlet } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Homepage from './pages/Homepage'
import TravelSpot from './pages/TravelSpot'
import SpotsDetails from './pages/SpotsDetails'
import Map from './pages/Map'
import Apitest from './pages/Apitest'
import TopCities from './pages/TopCities'
import CityDetails from './pages/CityDetails'
import HotelDetails from './pages/HotelDetails'
import Navbar from './components/Navigation/Navbar'
import Destination from './pages/Destination'
import DestinationDetails from './pages/DestinationDetails'

export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Homepage/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/travelspots',
        element:<TravelSpot/>
      },
      {
        path:'/spots/:id',
        element:<SpotsDetails/>
      },
      {
        path:'/map',
        element:<Map/>
      },
      {
        path:'/api',
        element:<Apitest/>
      },
      {
        path:'/topcities',
        element:<TopCities/>
      },
      {
        path:'/citydetails/:id',
        element:<CityDetails/>
      },
      {
        path:'/hoteldetails',
        element:<HotelDetails/>
      },
      {
        path:'/destinations',
        element:<Destination/>
      },
      {
        path:'/destinationdetails/:id',
        element:<DestinationDetails/>
      }
    ]
  }
])

function App() {
  return(
    <>
    <div>
      <Navbar/>
      <div><Outlet/></div>
    </div>
    </>
  )
}

export default App
