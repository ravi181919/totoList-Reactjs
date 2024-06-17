import React from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
function Todolist({ text, id, isComplete, deleteTodo, toggle }) {
  return (
    <div onClick={() => {toggle(id)}}  className="flex justify-between px-4 mt-1 py-1 bg-black/20 rounded-md w-full">
      <div  className="flex justify-center items-center gap-5">
        <span className="bg-[#556CE0] rounded-full p-1">
          {isComplete ? (
            <FaCheck size={"14px"} className="invert" />
          ) : (
            <RxCross2  size={"14px"} className="invert"/>
          )}
        </span>
        <p className="text-sm font-medium tracking-wide text-white/80">
          {text}
        </p>
      </div>
      <div className="flex items-center gap-1" onClick={() => deleteTodo(id)}>
        <span className="bg-[#e05555] rounded-full p-1">
          <MdDelete size={"15px"} className="invert" />
        </span>
      </div>
    </div>
  );
}

export default Todolist;
