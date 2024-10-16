import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Reviews } from '../constants/constant';

const Testimonial = () => {
  const properties = {
    prevArrow: <span></span>,
    nextArrow: <span></span>,
    duration: 2000,
    transitionDuration: 300,
    pauseOnHover: true,
    autoplay: true,
  }

  return (
    <section id="Testimonials" className="mx-24 mt-44 gap-10 flex">
       <div className='w-2/3 md:w-1/2 flex flex-col items-start justify-center gap-y-5'>
                <h2 className='text-[#5c3411] font-bold text-2xl'>TESTIMONIALS & REVIEWS</h2>
                <h1 className='font-bold text-7xl lilita-one'>Our Customar Feedbacks</h1>

          <div className="slide-container w-full p-2">
            <Slide {...properties}>
              {Reviews.map((rev, i) => (
                <div key={i} className=' p-4 px-5 flex flex-col gap-y-7 mx-2 border-4 border-yellow-400 rounded-xl relative'>
                  <p className='text-lg text-left mb-5'>{rev.desc}</p>
                  <div className='flex justify-start items-center gap-6'>
                    <p className='font-bold text-lg'>{rev.name}</p>
                    <div>
                      {Array.from({ length: rev.stars }, (_, index) => (
                        <span key={index}>⭐</span>
                      ))}
                    </div>
                  </div>
                  <div className='absolute bottom-1 right-1 bg-yellow-300 p-4 rounded-full'>
                    <img src="/quote.png" alt="" />
                  </div>
                </div>
              ))}
            </Slide>
          </div>

        </div>

      <div className='hidden md:flex gap-10 w-1/2 h-[500px] relative'>
       
               <img alt="" className="absolute w-60 rounded-2xl top-[40%] shadow-md" src="https://www.thedasaprakash.com/assets/img/Dasaprakash-testimonial-1.jpg"/>
               <img alt="" className="absolute w-60 rounded-2xl  left-1/4 shadow-md" src="https://www.thedasaprakash.com/assets/img/Dasaprakash-testimonial-2.jpg"/>
               <img alt="" className="absolute w-52 rounded-2xl bottom-0 right-0 shadow-md " src="https://www.thedasaprakash.com/assets/img/Dasaprakash-testimonial-3.jpg"/>
      
      </div>

    </section>
  )
}

export default Testimonial
