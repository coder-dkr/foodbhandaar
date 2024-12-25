import React, { useState } from 'react';

const Cuisine = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseOver = (index, isAltCard) => {
    setHoveredCard(index);
  };

  const handleMouseOut = () => {
    setHoveredCard(null);
  };

  const cuisines = [
    {
      name: 'INDIAN',
      imgSrc: '/img/imag6.jpg',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicing'
      
    },
    {
      name: 'AMERICAN',
      imgSrc: '/img/imag3.jpg',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicing'
    },
  ];

  return (
    <section id="cuisine" className="Cuisines mt-0 scale-[0.85]">
      <div className="flex flex-col items-center space-y-10">
        {cuisines.map((cuisine, index) => (
          <div
            key={index}
            className={`hover:scale-[1.1] relative w-11/12 h-72 flex items-center justify-center rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 ${index % 2 == 0 ? '' : 'flex-row-reverse'} ${
              hoveredCard === index ? 'translate-x-0' : ''
            }`}
            // onMouseOver={() => handleMouseOver(index, index % 2 !== 0)}
            onMouseOut={handleMouseOut}
          >
            <div
              className="absolute  inset-0 bg-cover bg-center opacity-40 rounded-full"
              style={{
                backgroundImage: `url(${cuisine.imgSrc})`,
              }}
            ></div>
            <div
              className={`w-full h-full flex items-center justify-between transform transition-transform duration-500 ${
                hoveredCard === index ? (index%2 ==0 ? 'translate-x-[40vw]' : '-translate-x-[40vw]') : ''
              }`}
            >
              <div className={`p-5 text-slate-700 drop-shadow-md text-center space-y-4 h-full w-full flex items-center justify-center flex-col ${hoveredCard === index ? 'hidden' : 'block'}`}>
                <h3 className="text-3xl font-bold lilita-one text-white">{cuisine.name}</h3>
                <p className="w-[600px] text-justify poppins-bold-italic text-lg">
                  {cuisine.info}
                </p>
              </div>
              <div 
              onMouseOver={() => handleMouseOver(index, index % 2 !== 0)}
              className={`p-5 w-full h-full flex justify-center items-center  text-white text-center space-y-4  ${hoveredCard === index ? 'flex' : 'hidden'}`}>
                <div className="flex flex-col items-center space-y-3 text-purple-700 hover:text-purple-6000 font-extrabold">
                  <a href="#" className="text-3xl hover:underline hover:text-purple-600">
                    Order NOW!
                  </a>
                  <a href="#" className="text-3xl hover:underline hover:text-purple-600">
                    Explore Recipes
                  </a>
                  <a href="#" className="text-3xl hover:underline hover:text-purple-600">
                    Find more
                  </a>
                </div>
              </div>
            </div>
            <span
            onMouseOver={() => handleMouseOver(index, index % 2 !== 0)}
              className={`w-11/12 h-full rounded-full transition-transform duration-500 ${
                hoveredCard === index
                  ? index % 2 === 0
                    ? 'transform translate-x-[-48vw]'
                    : 'transform translate-x-[48vw]'
                  : 'transform translate-x-0'
              }`}
            >
              <img
                src={cuisine.imgSrc}
                alt={cuisine.name}
                className="w-full h-full object-cover rounded-full"
              />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cuisine;
