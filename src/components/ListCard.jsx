import React from "react";
import image from "../images/code.png";
import deleteing from "../images/delete.png";

function ListCard() {
  return (
    <>
      <div className="listCard mb-2 w-[full] flex items-center justify-between p-[10px] bg-[#141414] cursor-pointer rounded-lg hover:bg-[#202020]">
        <div className="flex items-center gap-2">
          <img className="w-[80px]" src={image} alt="code" />
          <div>
            <h3 className="text-[20px]">My First Project</h3>
            <p className="text-[gray] text-[14px]">Created in 9 Mon 2024</p>
          </div>
        </div>
        <div className="">
          <img
            className="w-[30px] cursor-pointer mr-4"
            src={deleteing}
            alt="deleteing"
          />
        </div>
      </div>
    </>
  );
}

export default ListCard;
