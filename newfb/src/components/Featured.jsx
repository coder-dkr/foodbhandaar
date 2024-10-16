import { FeatureCompany } from "../constants/constant"
const Featured = () => {
  return (
    <div className="flex my-60 md:my-14 mt-10">
        <div className=" w-8 h-80 bg-[#f9b85c] rounded-r-full"></div>
    <div className="flex flex-col gap-14 pb-16 my-4 w-full h-80 ">
      <h1 className='text-center font-mono shadow-font font-semibold text-2xl'>AS FEATURED IN</h1>
      <div className="flex flex-wrap gap-10 sm:gap-0 justify-around items-center"> 
        {FeatureCompany.map((feat,i)=>{
            return (
                <div key={i}>
                    <img width={250} height={250} src={feat} />
                </div>
            )
        })}
      </div>
    </div>
         <div className="w-8 h-80 bg-[#f9b85c] rounded-l-full"></div>
    </div>
  )
}

export default Featured
