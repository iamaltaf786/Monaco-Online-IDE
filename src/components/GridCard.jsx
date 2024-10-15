import React, { useState } from "react";
import codeImg from "../images/code.png";
import deleteing from "../images/delete.png";

function GridCard() {
  const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);

  return (
    <>
      <div className="gridCard bg-[#141414] w-[270px] p-[10px] h-[180px] cursor-pointer hover:bg-[#202020] rounded-lg shadow-lg shadow-black/50">
        <img className="w-[90px]" src={codeImg} alt="Code Img" />
        <h3 className="text-[20px] w-[90%] line-clamp-1">
          My first project project project project
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-[gray]">Created in 9 mon 2024</p>
          <img
            onClick={() => {
              setIsDeleteModelShow(true);
            }}
            className="w-[30px] cursor-pointer"
            src={deleteing}
            alt=""
          />
        </div>
      </div>

      {isDeleteModelShow ? (
        <div className="flex justify-center items-center flex-col model fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.2)]">
          <div className="mainModel w-[25vw] h-[25vh] bg-[#141414] rounded-lg p-[20px]">
            <h3 className="text-3xl">
              Do you want to delete <br /> this project
            </h3>
            <div className="flex w-full mt-5 items-center gap-[10px]">
              <button className="p-[10px] rounded-lg bg-[#FF4343] text-white cursor-pointer min-w-[49%]">
                Delete
              </button>
              <button
                onClick={() => {
                  setIsDeleteModelShow(false);
                }}
                className="p-[10px] rounded-lg bg-[#1A1919] text-white cursor-pointer min-w-[49%]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default GridCard;
