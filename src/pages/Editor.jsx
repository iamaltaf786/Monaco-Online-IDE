import React, { useState } from "react";
import EditorNavbar from "../components/EditorNavbar";
import Editoooor from "@monaco-editor/react";
import { MdLightMode } from "react-icons/md";
import { AiOutlineExpandAlt } from "react-icons/ai";

function Editor() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const changeTheme = () => {
    if (isLightMode) {
      document.querySelector(".EditorNavbar").style.background = "#141414";
      document.body.classList.remove("lightMode");
      setIsLightMode(false);
    } else {
      document.querySelector(".EditorNavbar").style.background = "#f4f4f4";
      document.body.classList.add("lightMode");
      setIsLightMode(true);
    }
  };
  return (
    <>
      <EditorNavbar />
      <div className="flex">
        <div className={`left w-[${isExpanded ? "100%" : "50%"}]`}>
          <div className="tabs flex items-center justify-between gap-2 w-full bg-[#1A1919] h-[50px] px-[40px]">
            <div className="tabs flex items-center gap-2">
              <div className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">
                HTML
              </div>
              <div className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">
                CSS
              </div>
              <div className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">
                JavaScript
              </div>
            </div>
            <div className="flex items-center gap-2">
              <i className="text-[20px] cursor-pointer" onClick={changeTheme}>
                <MdLightMode />
              </i>
              <i
                className="text-[20px] cursor-pointer"
                onClick={() => {
                  setIsExpanded(!isExpanded);
                }}
              >
                <AiOutlineExpandAlt />
              </i>
            </div>
          </div>
          <Editoooor
            height="82vh"
            theme={isLightMode ? "vs-light" : "vs-dark"}
            defaultLanguage="javascript"
            defaultValue="// some comment"
          />
        </div>
        <iframe
          className={`w-[${isExpanded ? "0%" : "50%"}] ${
            isExpanded ? "hidden" : ""
          } min-h-[82vh] bg-[#fff] text-black`}
          id="output"
        ></iframe>
      </div>
    </>
  );
}

export default Editor;

// 1:24:00
