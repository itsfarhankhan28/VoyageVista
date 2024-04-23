/* eslint-disable react/prop-types */
import degreeimg from '../assets/IMG/thermometer.png'
import degreeimg1 from '../assets/IMG/thermometer (1).png'
import windspeedimg from '../assets/IMG/winds-weather-symbol.png'
import winddegreeimg from '../assets/IMG/wind-direction.png'
import winddegree1 from '../assets/IMG/wind-direction (1).png'
import pressureimg from '../assets/IMG/atmospheric.png'
import humidityimg from '../assets/IMG/water-temperature.png'
import uvimg from '../assets/IMG/uv-protection.png'

const Weather = ({celcius,fehrenheit,windspeed,winddegree,winddirection,pressure,humidity,uv}) => {
  return (
    <div className=" rounded-2xl p-2 flex flex-col gap-5">
        <h1 className='font-semibold text-4xl'>Weather Status:-</h1>
        <div className="w-full h-[40%] flex gap-5">
            <div className="p-5 shadow-xl rounded-xl border w-[50%] flex gap-1 justify-center items-center">
                <h1 className="font-semibold text-gray-400 text-8xl">{celcius}</h1>
                <img className="w-[50px] h-[50px]" src={degreeimg} alt="" />
            </div>
            <div className="p-5 shadow-xl rounded-xl border w-[50%] flex gap-1 justify-center items-center">
                <h1 className="font-semibold text-gray-400 text-8xl">{fehrenheit}</h1>
                <img className="w-[50px] h-[50px]" src={degreeimg1} alt="" />
            </div>
        </div>
        <div className="w-full flex flex-wrap gap-7 h-[50%]">
            <div className="p-5 shadow-xl rounded-xl border flex gap-1 justify-center items-center w-[200px] h-[200px]">
                <h1 className="font-semibold text-gray-400 text-3xl">{windspeed}</h1>
                <img className="w-[30px] h-[30px]" src={windspeedimg} alt="" />
            </div>
            <div className="p-5 shadow-xl rounded-xl border flex gap-1 justify-center items-center w-[200px] h-[200px]">
                <h1 className="font-semibold text-gray-400 text-3xl">{winddegree}</h1>
                <img className="w-[30px] h-[30px]" src={winddegreeimg} alt="" />
            </div>
            <div className="p-5 shadow-xl rounded-xl border flex gap-1 justify-center items-center w-[200px] h-[200px]">
                <h1 className="font-semibold text-gray-400 text-3xl">{winddirection}</h1>
                <img className="w-[30px] h-[30px]" src={winddegree1} alt="" />
            </div>
            <div className="p-5 shadow-xl rounded-xl border flex gap-1 justify-center items-center w-[200px] h-[200px]">
                <h1 className="font-semibold text-gray-400 text-3xl">{pressure}</h1>
                <img className="w-[30px] h-[30px]" src={pressureimg} alt="" />
            </div>
            <div className="p-5 shadow-xl rounded-xl border flex gap-1 justify-center items-center w-[200px] h-[200px]">
                <h1 className="font-semibold text-gray-400 text-3xl">{humidity}</h1>
                <img className="w-[30px] h-[30px]" src={humidityimg} alt="" />
            </div>
            <div className="p-5 shadow-xl rounded-xl border flex gap-1 justify-center items-center w-[200px] h-[200px]">
                <h1 className="font-semibold text-gray-400 text-3xl">{uv}</h1>
                <img className="w-[30px] h-[30px]" src={uvimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Weather
