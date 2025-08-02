import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const ProductBox = ({
  className,
  title,
  imageSrc,
  imageAlt,
  onAddToCart,
  price,
  detailsLink,
}) => {
  return (
    <div className="bg-[#FFF] border border-solid border-[#DDD] rounded-lg w-[15%] text-center p-5 mb-5 shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
      <h2 className="font-fjalla text-lg mb-2.5 text-[#333]">{title}</h2>
      <div className=" flex justify-center items-center">
        <img
          className="w-auto h-24 object-cover mb-2.5"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className="font-montserrat flex justify-center gap-2.5">
        <button
          className="border-2 border-[#4A362F] bg-[#FFF] cursor-pointer text-[#4A362F] text-lg w-10 h-10 rounded-3xl flex items-center justify-center transition-colors duration-300 hover:bg-[#4A362F] hover:text-[#FFF]"
          onClick={() => onAddToCart({ title, image: imageSrc, price })}
        >
          <i className="fa fa-shopping-cart"></i>
        </button>
        <Link
          to={detailsLink}
          className="border-2 border-[#4A362F] bg-[#FFF] cursor-pointer text-[#4A362F] text-lg w-28 h-10 rounded-3xl flex items-center justify-center transition-colors duration-300 hover:bg-[#4A362F] hover:text-[#FFF]"
        >
          Detalles
        </Link>
        <button className="border-2 border-[#4A362F] bg-[#FFF] cursor-pointer text-[#4A362F] text-lg w-10 h-10 rounded-3xl flex items-center justify-center transition-colors duration-300 hover:bg-[#4A362F] hover:text-[#FFF]">
          <i className="fa fa-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
