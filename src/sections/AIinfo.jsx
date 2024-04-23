import chatbotimg from '../assets/IMG/chatbotfeatureimg.png'
import { TypewriterEffectSmoothDemo } from '../components/TextEffect/TypewriterEffectSmoothDemo'

const AIinfo = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" flex flex-col justify-center items-center w-full mx-52">
        <div>
            <img src={chatbotimg} alt="" />
        </div>
        <div>
            <TypewriterEffectSmoothDemo/>
        </div>
      </div>
    </div>
  )
}

export default AIinfo
