import React, { useState } from "react";
import EditorNavbar from "../components/EditorNavbar";
import Editoooor from "@monaco-editor/react";
import { MdLightMode } from "react-icons/md";
import { AiOutlineExpandAlt } from "react-icons/ai";

function Editor() {
  const [tab, setTab] = useState("html");

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
        <div className={`left ${isExpanded ? "w-full" : "w-1/2"}`}>
          <div className="tabs flex items-center justify-between gap-2 w-full bg-[#1A1919] h-[50px] px-[40px]">
            <div className="tabs flex items-center gap-2">
              <div
                onClick={() => {
                  setTab("html");
                }}
                className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]"
              >
                HTML
              </div>
              <div
                onClick={() => {
                  setTab("css");
                }}
                className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]"
              >
                CSS
              </div>
              <div
                onClick={() => {
                  setTab("js");
                }}
                className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]"
              >
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

          {tab == "html" ? (
            <>
              <Editoooor
                height="82vh"
                theme={isLightMode ? "vs-light" : "vs-dark"}
                language="html"
                value="<h1>Hello Coder ;)</h1>"
              />
            </>
          ) : tab == "css" ? (
            <>
              <Editoooor
                height="82vh"
                theme={isLightMode ? "vs-light" : "vs-dark"}
                language="css"
                value="body { background-color : #f4f4f4; }"
              />
            </>
          ) : (
            <>
              <Editoooor
                height="82vh"
                theme={isLightMode ? "vs-light" : "vs-dark"}
                language="javascript"
                value="// some comment"
              />
            </>
          )}
        </div>
        <iframe
          className={`${
            isExpanded ? "w-0 hidden" : "w-1/2"
          } min-h-[82vh] bg-[#fff] text-black`}
          id="output"
        ></iframe>
      </div>
    </>
  );
}

export default Editor;

// 1:30:00
