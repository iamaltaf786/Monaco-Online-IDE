import React, { useState } from "react";
import image from "../images/code.png";
import deleteing from "../images/delete.png";

function ListCard() {
  const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);

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
        <div>
          <img
            onClick={() => {
              setIsDeleteModelShow(true);
            }}
            className="w-[30px] cursor-pointer mr-4"
            src={deleteing}
            alt="deleteing"
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

export default ListCard;
