import React from 'react'

const Booking = () => {
  return (
    <section id="Booking" className='flex flex-col items-start justify-center mx-24 mt-28 my-20 gap-y-12 '>
        <div className='flex flex-col items-start justify-center gap-y-2'>
            <h2 className='text-[#5c3411] font-bold text-2xl'>GET IN TOUCH</h2>
            <h1 className='font-bold text-7xl lilita-one'>Reserve Your Dining Table!</h1>
        </div>

        <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start w-full'>

            <div className='flex flex-col items-start gap-9'>
                <div className='flex items-center justify-center gap-7 cursor-pointer'>
                    <div className='bg-[#f9b85c] p-4 rounded-full'>
                        <svg height="40" viewBox="0 0 32 32" width="40"><g id="_16-Smartphone" data-name="16-Smartphone"><path d="m23 2h-14a3 3 0 0 0 -3 3v22a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-22a3 3 0 0 0 -3-3zm-5.39 2-.33 1h-2.56l-.33-1zm6.39 23a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1-1v-22a1 1 0 0 1 1-1h3.28l.54 1.63a2 2 0 0 0 1.9 1.37h2.56a2 2 0 0 0 1.9-1.37l.54-1.63h3.28a1 1 0 0 1 1 1z"></path><path d="m17 24h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"></path></g></svg>
                    </div>
                    <div>
                        <p className='font-bold drop-shadow-sm font-mono text-lg text-[brown]'>For Home Delivery</p>
                        <p className='font-black font-mono text-lg '>Book Now</p>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-7 cursor-pointer'>
                    <div className='bg-[#f9b85c] p-4 rounded-full'>
                    <svg height="40" viewBox="0 0 32 32" width="40"><g id="_01-Email" data-name="01-Email"><path d="m29.61 12.21-13-10a1 1 0 0 0 -1.22 0l-13 10a1 1 0 0 0 -.39.79v14a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-14a1 1 0 0 0 -.39-.79zm-13.61-7.95 11.36 8.74-11.36 8.74-11.36-8.74zm11 23.74h-22a1 1 0 0 1 -1-1v-12l11.39 8.76a1 1 0 0 0 1.22 0l11.39-8.76v12a1 1 0 0 1 -1 1z"></path></g></svg>
                    </div>
                    <div>
                        <p className='font-bold drop-shadow-sm font-mono text-lg text-[brown]'>For Private Dinning</p>
                        <p className='font-black font-mono text-lg '>info@foodbhandaar.com</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-7 cursor-pointer'>
                    <div className='bg-[#f9b85c] p-4 rounded-full'>
                    <svg height="40" viewBox="0 0 32 32" width="40"><g id="_06-Location" data-name="06-Location"><path d="m25 21.61a1 1 0 1 0 -.84 1.82c1.37.57 1.84 1.23 1.84 1.57 0 1.19-4 3-10 3s-10-1.81-10-3c0-.34.47-1 1.8-1.57a1 1 0 1 0 -.8-1.82c-2.49 1.12-3 2.46-3 3.39 0 3.28 6 5 12 5s12-1.72 12-5c0-.93-.51-2.27-3-3.39z"></path><path d="m15.45 25.83a1 1 0 0 0 1.1 0c.39-.26 9.45-6.38 9.45-13.83a10 10 0 0 0 -20 0c0 7.45 9.06 13.57 9.45 13.83zm.55-21.83a8 8 0 0 1 8 8c0 5.41-6.1 10.36-8 11.77-1.9-1.41-8-6.36-8-11.77a8 8 0 0 1 8-8z"></path><path d="m21 12a5 5 0 1 0 -5 5 5 5 0 0 0 5-5zm-8 0a3 3 0 1 1 3 3 3 3 0 0 1 -3-3z"></path></g></svg>
                    </div>
                    <div>
                        <p className='font-bold drop-shadow-sm font-mono text-lg text-[brown]'>Location</p>
                        <p className='font-black font-mono text-lg '>Check All Locations</p>
                    </div>
                </div>
            </div>

            <form className='h-full md:w-2/3 space-y-4'>
                <input className='w-full px-6 py-4 outline-none border-[3px] border-slate-200 rounded-lg' placeholder='No of Guest' type='number'/>
                <div className='w-full flex items-center justify-center gap-3'>
                    <input className='w-1/2 px-6 py-4 outline-none border-[3px] border-slate-200 rounded-lg' placeholder='Your name' type="text" />
                    <input className='w-1/2 px-6 py-4 outline-none border-[3px] border-slate-200 rounded-lg' placeholder='Phone no' type="text" />
                </div>
                <div className='w-full flex items-center justify-center gap-3'>
                    <input className='w-1/2 px-6 py-4 outline-none border-[3px] border-slate-200 rounded-lg'  type="date" />
                    <input className='w-1/2 px-6 py-4 outline-none border-[3px] border-slate-200 rounded-lg'  type="time" />
                </div>
                <button className="w-full text-lg bg-[#5c3411] text-[#f7cb7f] font-semibold px-6 py-4 rounded-lg shadow-md hover:bg-[#845226] duration-150">Reserve a Table</button>
            </form>
        </div>
      
    </section>
  )
}

export default Booking
