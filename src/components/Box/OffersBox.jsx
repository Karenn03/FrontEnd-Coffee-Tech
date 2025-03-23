import React from "react";

const Box = ({ image, title, description }) => {
  return (
    <div className="flex flex-wrap justify-around pt-5 pb-5 pr-12 pl-12">
      <div className="w-full bg-[#FFFEFC] border-2 border-[#978F84] rounded-xl mb-5 p-5 flex items-center min-h-40">
        <img
          className="w-auto h-32 mr-4 object-contain p-2.5"
          src={image}
        ></img>
        <div className="text-left">
          <h3 className="text-[#978F84] text-2xl mt-2.5 mb-2.5 mr-0 ml-0">
            {title}
          </h3>
          <p className="text-base mt-4 mb-4 mr-0 ml-0">{description}</p>
          <button className="bg-[#978F84] text-white border-none pt-2.5 pb-2.5 pr-5 pl-5 cursor-pointer rounded-3xl w-40 hover:bg-[#4A362F]">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Box;
