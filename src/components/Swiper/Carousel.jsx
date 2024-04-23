/* eslint-disable react/prop-types */
import { Splide,SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';

const Carousel = ({image1,image2}) => {
  return (
    <div>
      <Splide
      className="h-[400px] rounded-2xl"
      options={{
          autoplay:true,
          type:'loop',
          pauseOnHover:true,
          arrows:false
      }}
      >
        <SplideSlide>
          <img className="h-[400px] w-full rounded-2xl" src={image1} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="h-[400px] w-full rounded-2xl" src={image2} alt="" />
        </SplideSlide>
      </Splide>
    </div>
  )
}

export default Carousel
