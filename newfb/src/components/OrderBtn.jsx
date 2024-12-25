import React from 'react'

const OrderBtn = () => {
  return (
    <div className='flex  justify-center items-center gap-x-32'>
        <button className='bg-[#5c3411] w-60 text-center py-2 px-3 rounded-full text-lg font-medium text-[#fac79a] hover:shadow-[5px_7px_1px_#fac79a]  duration-200'>
          Order from Swiggy
         </button>
        <button className='bg-[#5c3411] w-60 text-center py-2 px-3 rounded-full text-lg font-medium text-[#fac79a] hover:shadow-[5px_7px_1px_#fac79a] duration-200'>
          Order from Zomato
         </button>
        <button className='bg-[#5c3411] w-60 text-center py-2 px-3 rounded-full text-lg font-medium text-[#fac79a] hover:shadow-[5px_7px_1px_#fac79a]  duration-200'>
          Order Now
         </button>
    </div>
  )
}

export default OrderBtn
