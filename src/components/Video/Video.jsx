/* eslint-disable react/prop-types */


const Video = ({video}) => {
  return (
    <div>
      <video className="w-[710px] rounded-2xl" controls autoPlay>
        <source src={`${video}`}/>
      </video>
    </div>
  )
}

export default Video
