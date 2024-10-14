import React from "react";
import codeImg from "../images/code.png";
import deleteing from "../images/delete.png";

function GridCard() {
  return (
    <div className="gridCard bg-[#141414] w-[270px] p-[10px] h-[180px] cursor-pointer hover:bg-[#202020] rounded-lg shadow-lg shadow-black/50">
      <img className="w-[90px]" src={codeImg} alt="Code Img" />
      <h3 className="text-[20px] w-[90%] line-clamp-1">
        My first project project project project
      </h3>
      <div className="flex items-center justify-between">
        <p className="text-[14px] text-[gray]">Created in 9 mon 2024</p>
        <img className="w-[30px] cursor-pointer" src={deleteing} alt="" />
      </div>
    </div>
  );
}

export default GridCard;
