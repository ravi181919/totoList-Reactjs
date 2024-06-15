import React from "react";
import { FcTodoList } from "react-icons/fc";
import { LuListPlus } from "react-icons/lu";
function Todo() {
  const hr = document.querySelector(".hoverme");

  function applyHover() {
    hr.style.borderColor = "red";
    hr.style.width = "100%";
  }
  function removeHover() {
    hr.style.borderColor = "black";
    hr.style.width = "0";
  }

  return (
    <div className="h-full w-full flex justify-center items-start">
      <div className="h-full w-full flex justify-center items-start">
        <div className="h-[auto] w-[95%] bg-white/20 rounded-md shadow-sm shadow-black backdrop-blur-sm py-[1vw] px-[2vw] sm:h-[auto] sm:w-[85%] md:h-[auto] md:w-[75%] lg:h-[auto] lg:w-[65%] mt-10">
          {/********* tittle of todo *********/}

          <div className="relative h-fit w-fit flex items-center justify-center gap-3">
            <span className="font-medium text-lg p-2 bg-transparent  rounded-full shadow-black/50 shadow-md ">
              <FcTodoList
                size={"2.2vw"}
                className=" rounded-full brightness-125"
              />
            </span>
            <h1 className=" text-[#556CE0] font-semibold text-lg relative mr-8">
              Todo
              <span className=" text-[#B6FEFF] absolute top-1 left-12">
                List
              </span>
            </h1>
          </div>

          {/************ divider line **************/}

          <div
            className="h-10 w-full mt-3"
            onMouseEnter={applyHover}
            onMouseLeave={removeHover}
          >
            <hr className="hoverme border-black w-0 ease-in duration-500" />
          </div>

          {/************ Input and Add list button */}

          <div className="bg-white/10 flex justify-between items-center h-[8vh]">
            <input type="text" placeholder="Please enter your plan" />
            <button className="shadow-sm shadow-black/50 rounded-md px-2 py-1 text-[#B6FEFF] font-medium flex justify-center items-center gap-2 ">
              Add <span>
                <LuListPlus size={'2vw'} color="#556CE0"/>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
