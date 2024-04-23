import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { getTopDestinationSpots } from "../utils/Slices/getTopDestinationData"
import { DirectionAwareHoverDemo } from "../components/Cards/DirectionAwareHoverDemo"

const TopDestination = () => {

  const dispatch = useDispatch()

  const TopDestinationSpots = useSelector((store)=>store.getTopSpots.alltopspots)
  console.log(TopDestinationSpots)

  useEffect(()=>{
    dispatch(getTopDestinationSpots())
  },[dispatch])

  return (
    <div className="">
      <div className="border border-black p-3 flex gap-3">
        <div className="flex flex-col gap-3">
          <div><DirectionAwareHoverDemo/></div>
          <div><DirectionAwareHoverDemo/></div>
        </div>
        <div>
          <DirectionAwareHoverDemo/>
        </div>
      </div>
    </div>
  )
}

export default TopDestination
