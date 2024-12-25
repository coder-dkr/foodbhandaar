const MenuCards = ({filteredItems}) => {

  return (
    <div className="flex flex-wrap gap-7 text-black">
      {filteredItems.map((item, i) => {
        return (
          <div
            className="rounded-xl overflow-hidden cursor-pointer relative group  "
            key={i}
          >
            <div
            style={{backgroundImage : `url(${item.url})`}}
            className="bg-no-repeat bg-cover bg-center h-52 w-48"></div>
            <div className="absolute -bottom-44 group-hover:bottom-0 group-hover:pt-10 group-hover:backdrop-blur-sm duration-300 w-full z-[1000] bg-black/50 text-white h-52">
              <p className="px-2 py-1 text-center text-lg">{item.name} {i+1} <span className="text-xs font-semibold">({item.type})</span></p>
              <p className="px-2 py-1 text-center text-lg">{item.desc}</p>
              <p className="px-2 py-1 text-center text-lg">{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCards;
