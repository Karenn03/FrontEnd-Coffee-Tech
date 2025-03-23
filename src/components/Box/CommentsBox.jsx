import React from "react";

const CommentsBox = ({
  imageSrc,
  userName,
  rating,
  commentDate,
  commentText,
}) => {
  return (
    <div className="bg-[#FFFEFC] p-2.5 rounded-md mb-5 border-2 border-[#B7AE8F28]">
      <div className="flex items-center my-1">
        <img
          src={imageSrc}
          alt="user"
          className="w-12 h-12 rounded-[50%] m-2.5"
        />
        <div className="flex flex-col ml-2.5">
          <div>
            <span className="font-bold text-base text-[#B7AE8F]">
              {userName}
            </span>
            <div className="items-center justify-between">
              <span className="text-[#B7AE8F] text-xl">{rating}</span>
              <span className="text-base text-[#A6A6A6] ml-2.5">
                {commentDate}
              </span>
            </div>
          </div>
          <div className="text-base text-black mt-1.5 text-justify">
            {commentText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsBox;
