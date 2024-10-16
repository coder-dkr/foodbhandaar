import {useState} from 'react'
import MenuCat from './MenuCat'
import MenuCards from './MenuCards'
import { MenuItems} from "../constants/constant"

const Menu = () => {
  const [filteredItems, setFilteredItems] = useState(MenuItems);

  const handleCategoryChange = (filteredData) => {
    setFilteredItems(filteredData);
  };

  return (
    <section id="Meals" className='mt-32 mx-14 '>
        <div className='w-full min-h-[800px] border-[20px] border-x-4 border-[#f9b85c] rounded-t-[7rem] border-b-0 relative'>
          <div  className=' bg-[url("https://media.istockphoto.com/id/515373062/vector/food-seamless-background.jpg?s=612x612&w=0&k=20&c=hexa_lBms2zsFxEHASUeYhNu17i8JfV3TGOoDark-tk=")] opacity-15 absolute inset-0 rounded-t-[7rem]'/>
            <div className='text-center flex w-full items-center justify-center'>
                <h1 className='absolute -top-16 border-[#f9b85c] border-r-[16px] border-t-[9px] border-4  border-b-0 dancing-script bg-white rounded-full w-fit text-8xl px-6 text-[#f9b85c]'>Menu</h1>
                <img className='w-[500px] absolute top-2 left-[50%] -translate-x-1/2' src="/menudivide.svg"/>
            </div>
            <div className='relative bg-[url("/navratri.png")] bg-contain bg-no-repeat bg-center top-16 h-72  '></div>
            <div className='relative top-20  px-8 py-5 flex flex-col md:flex-row items-start gap-x-6 w-full'>
              <div className=' md:w-1/6 p-3 flex flex-col justify-center items-start gap-4 bg-white shadow-xl rounded-md'>
                <h3 className='font-bold '>Categories</h3>
                <MenuCat onCategoryChange={handleCategoryChange}/>
              </div>
              <div className='w-5/6 p-3'>
                <MenuCards filteredItems={filteredItems} />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Menu
