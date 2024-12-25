import { Navitems } from "../constants/constant"
import { useState } from "react"
import { LogIn } from 'lucide-react';

const Navbar = () => {

  const [path, setpath] = useState("nahi")

  const handleclick = (item) => {
    setpath(item)
    const element = document.getElementById(item);
    if(element){
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <nav className='container absolute top-0 z-50 mx-auto h-fit  px-10 flex justify-between items-center text-white'>
      <div className="logo drop-shadow-sm"><img className="w-52" src='/foodbhandaar.png' alt="Food Bhandaar"/></div>

      <div className="hidden md:flex items-center justify-start gap-8 sticky top-0">
        <ul className="relative flex justify-center items-center overflow-hidden ">
            {Navitems.map((item,i)=>{
                return (
                    <li 
                    onClick={() => handleclick(item)}
                    className={`cursor-pointer w-32 py-1 font-semibold text-center hover:border-4 hover:border-[#f9bc52] hover:border-t-0 hover:border-l-0 hover:border-r-0 duration-200 ${path === item ? 'border-4 border-[#f9bc52] border-t-0 border-l-0 border-r-0' : ''}`} key={i}>{item}</li>
                )
            })}
        </ul>

      </div> 

      <div>
        <ul className="flex justify-center items-center gap-x-3">
          <button className="bg-[#5c3411] text-[#f7cb7f] font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#845226] duration-150">Upgrade Plans</button>
          <button  className="hidden sm:flex justify-center items-end gap-2 backdrop-blur-sm px-5 py-2 rounded-full shadow-md" >Login<LogIn className="w-5 h-5"/></button>
        </ul>
        </div> 

      
    </nav>
  )
}

export default Navbar
