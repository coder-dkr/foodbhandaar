import { Facebook , Youtube, Twitter , Instagram} from 'lucide-react';

const Footer = () => {
  return (
    <section id="Footer" className='bg-black flex flex-col justify-center items-center'>
      <img src="/footersolid.png" alt="" />
      <div className='mt-5'>
        <img src="/foodbhandaar.png" className='w-52' alt="" />
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center md:gap-1 my-10 border-y-2 md:border-y-slate-700'>
        <div className='w-full  p-5 text-center flex flex-col justify-center items-center'>
            <h2 className='font-bold text-white mb-2 text-xl'>Address</h2>
            <p className='text-slate-400'>Apke dil mein</p>
            <p className='text-slate-400'>Rehte hai hum</p>
        </div>
        <div className='w-full  p-5 text-center flex flex-col justify-center items-center'>
            <h2 className='font-bold text-white mb-2 text-xl'>Book a table</h2>
            <p className='text-slate-400'>Separate Hall Available For Birthday, Kitty Parties & Get Together</p>
            <p className='text-red-500'>+91 1234567890</p>
        </div>
        <div className='w-full  p-5 text-center flex flex-col justify-center items-center'>
            <h2 className='font-bold text-white mb-2 text-xl'>Opening hours</h2>
            <p className='text-slate-400'>Monday - Sunday</p>
            <p className='text-slate-400'>6:30AM - 12:00PM</p>
        </div>
        <div className='w-full  p-5 text-center flex flex-col justify-center items-center'>
            <h2 className='font-bold text-white mb-2 text-xl'>Our Delivery Partners</h2>
            <img src="/partner.png" alt="" />
            
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-start w-full text-sm px-36 mb-8'>
        <div className='flex flex-col justify-center items-start  text-slate-400 gap-1'>
          <ul className='flex justify-center items-center gap-3 mb-2'>
            <li className='hover:text-red-500 cursor-pointer'>Gallery</li>
            <li className='hover:text-red-500 cursor-pointer'>Faq</li>
            <li className='hover:text-red-500 cursor-pointer'>Testimonial</li>
            <li className='hover:text-red-500 cursor-pointer'>Privacy Policy</li>
          </ul>
          <p className='hover:text-red-500 cursor-pointer'>Refund and Returns Policy</p>
          <p className='text-sm'>© 2024. Food Bhandaar. All rights reserved</p>
        </div>

        <div className='text-slate-400  flex justify-center items-center gap-3'>
          <Facebook className='hover:text-white cursor-pointer'/>
          <Instagram className='hover:text-white cursor-pointer'/>
          <Youtube className='hover:text-white cursor-pointer'/>
          <Twitter className='hover:text-white cursor-pointer'/>
        </div>

      </div>
    </section>
  )
}

export default Footer
