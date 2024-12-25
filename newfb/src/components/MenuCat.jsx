import { menucat , MenuItems} from "../constants/constant"
import { useState , useEffect } from "react"



const MenuCat = ({onCategoryChange}) => {
    const [checkindex, setcheckindex] = useState(1)

    const handleclick = (i) => {
      setcheckindex(i);
    };

    useEffect(() => {
      const livecat = menucat[checkindex];

      if (livecat !== 'All') {
        const filtered = MenuItems.filter((item) => item.type === livecat);
        onCategoryChange(filtered);
      } else {
        onCategoryChange(MenuItems);
      }

    }, [checkindex])
    
    
  return (
    <div className="flex flex-col justify-center items-start gap-y-2 ">
       {menucat.map((cat,i) => {
        return (
            <div 
            onClick={()=>handleclick(i)}
            key={i} className="flex items-center justify-start gap-x-2 cursor-pointer hover:bg-gray-100 w-44 rounded-lg p-2 px-3">
                <input 
                onChange={()=>handleclick(i)}
                checked={checkindex == i ? true : false} className="hover:bg-yellow-600" type="checkbox"/>
                <p className="font-semibold">{cat}</p>
            </div>
        )
       })}
    </div>
  )
}

export default MenuCat

