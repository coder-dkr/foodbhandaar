import { ChevronRight, ChevronLeft ,Pause , Play} from 'lucide-react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { SlideSections } from '../constants/constant';
import { useState } from 'react';


const HeroSlides = () => {
  const [paused, setpaused] = useState(false)

  const handlePause = () => {
    setpaused(!paused)
}

  const properties = {
    prevArrow: <div className='mx-3 p-3 bg-black/50 text-white hover:bg-black/20 font-bold rounded-full'><ChevronLeft /></div>,
    nextArrow: <div className='mx-3 p-3 bg-black/50 text-white hover:bg-black/20 font-bold rounded-full'><ChevronRight /></div>,
    duration: 3000,
    transitionDuration: 500,
    pauseOnHover: false,
    autoplay: ( paused ? false : true),
  }


  return (
    <>
      <div className="slide-container">
        <Slide {...properties}>
          {SlideSections.map((sec, i) => (
            <div key={i} className='relative' >
              <div
                style={{ backgroundImage: `url(${sec.url})` }}
                className={`h-[100vh] bg-cover bg-no-repeat bg-center flex justify-center items-center relative`}>
                <div className={`absolute flex flex-col items-start gap-y-8 top-1/2 -translate-y-1/2 left-32 z-50 drop-shadow-md text-white`}>
                  <h1 className="font-bold text-7xl w-[70%] text-white">{sec.title}</h1>
                  <p className="w-[90%] text-xl text-white">{sec.subtitle}</p>
                  <button
                    style={{ backgroundColor: sec.btnBg }}
                    className={`w-fit px-6 py-2 rounded-full shadow-sm font-bold text-black text-xl`}>{sec.btntext}</button>
                </div>
              </div>
            </div>
          ))}
        </Slide>
        <span onClick={handlePause} className=" w-fit absolute  bottom-12 right-1/2 bg-black/20 hover:bg-black text-white p-2 rounded-full flex justify-center items-center cursor-pointer  duration-200 shadow-md">
                {paused ? <Play/> : <Pause/>}
        </span>
        <div className='absolute bottom-0 z-50'>
                  <img src="/design.png" />
                </div>
      </div>
    </>
  )
}

export default HeroSlides
