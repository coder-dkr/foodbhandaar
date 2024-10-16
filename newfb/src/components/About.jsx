import React from 'react'

const About = () => {
    return (
        <>
        <section id="About" className='flex flex-col gap-5 md:gap-0 md:flex-row justify-center items-start mx-24 mt-20  '>
            <div className='md:w-1/2  flex flex-col items-start justify-center gap-y-5'>
                <h2 className='text-[#5c3411] font-bold text-2xl'>About FoodBhandaar</h2>
                <h1 className='font-bold text-7xl lilita-one'>Where Every Bite Tells a Story</h1>
            </div>

            <div className='md:w-1/2 flex items-center justify-center flex-col gap-3'>
                <p className='text-justify text-lg poppins-light-italic'>
                    FoodBhandaar has been a trusted name in bringing authentic Indian flavors to every corner of the country. With a legacy of taste, quality, and dedication, FoodBhandaar has captured the hearts of food lovers across India.
                </p>
                <p className='text-justify text-lg poppins-light-italic'>   
                    The visionary behind this culinary journey is Daddy Roy, who expanded FoodBhandaar's reach across India with an unwavering commitment to deliver the best of Indian cuisine. From humble beginnings, Daddy Roy’s passion for food has resulted in a chain of successful outlets, each serving delectable dishes that celebrate the essence of traditional Indian flavors.
                </p>
                <p className='text-justify text-lg poppins-light-italic'>FoodBhandaar's mission is to continue spreading the joy of authentic Indian food, making it a household name for generations to come.</p>
            </div>

        </section>

        </>
    )
}

export default About
