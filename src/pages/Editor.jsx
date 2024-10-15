import React, { useEffect, useState } from "react";
import EditorNavbar from "../components/EditorNavbar";
import Editoooor from "@monaco-editor/react";
import { MdLightMode } from "react-icons/md";
import { AiOutlineExpandAlt } from "react-icons/ai";

function Editor() {
  const [htmlCode, setHtmlCode] = useState("<h1>Hello Coder ;)</h1>");
  const [cssCode, setCssCode] = useState("body { background-color: #f4f4f4; }");
  const [jsCode, setJsCode] = useState("// some comment");

  const [tab, setTab] = useState("html");
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Update the iframe content when any of the code changes
  useEffect(() => {
    const run = () => {
      const html = htmlCode || "";
      const css = `<style>${cssCode || ""}</style>`;
      const js = `<script>${jsCode || ""}</script>`;

      const iframe = document.getElementById("iframe");
      iframe.srcdoc = html + css + js;
    };

    run();
  }, [htmlCode, cssCode, jsCode]); // Dependency array includes the code states

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
                onClick={() => setTab("html")}
                className={`tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px] ${
                  tab === "html" && "bg-gray-700"
                }`}
              >
                HTML
              </div>
              <div
                onClick={() => setTab("css")}
                className={`tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px] ${
                  tab === "css" && "bg-gray-700"
                }`}
              >
                CSS
              </div>
              <div
                onClick={() => setTab("js")}
                className={`tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px] ${
                  tab === "js" && "bg-gray-700"
                }`}
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
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <AiOutlineExpandAlt />
              </i>
            </div>
          </div>

          {tab === "html" ? (
            <Editoooor
              onChange={(value) => setHtmlCode(value || "")}
              height="82vh"
              theme={isLightMode ? "vs-light" : "vs-dark"}
              language="html"
              value={htmlCode} // Use value instead of defaultValue for syncing state
            />
          ) : tab === "css" ? (
            <Editoooor
              onChange={(value) => setCssCode(value || "")}
              height="82vh"
              theme={isLightMode ? "vs-light" : "vs-dark"}
              language="css"
              value={cssCode} // Use value instead of defaultValue for syncing state
            />
          ) : (
            <Editoooor
              onChange={(value) => setJsCode(value || "")}
              height="82vh"
              theme={isLightMode ? "vs-light" : "vs-dark"}
              language="javascript"
              value={jsCode} // Use value instead of defaultValue for syncing state
            />
          )}
        </div>

        <iframe
          className={`${
            isExpanded ? "w-0 hidden" : "w-1/2"
          } min-h-[82vh] bg-[#fff] text-black`}
          id="iframe"
        ></iframe>
      </div>
    </>
  );
}

export default Editor;

// 1:41:00
