import React, { useEffect, useRef, useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { LuListPlus } from "react-icons/lu";
import Todolist from "./Todolist";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();
  const topLineEffect = document.querySelector(".hoverme");
  const deleteMessage = document.querySelector(".deleteMessage");

  const list = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const todolistObject = {
      id: Date.now(),
      listText: inputText,
      isComplete: false
    };
    setTodoList((prev) => [...prev, todolistObject]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => {
      return prev.filter((todoListId) => todoListId.id !== id);
    });

    deleteMessage.textContent = "List item deleted successfully!";
    setTimeout(() => {
      deleteMessage.textContent = "";
    }, 1500);

    topLineEffect.style.borderColor = "#fff";
    topLineEffect.style.width = "0";
  };

  const onHover = () => {
    topLineEffect.style.borderColor = "red";
    topLineEffect.style.width = "100%";
  };

  const completeToggle = (id) => {
    setTodoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

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
            <h1 className="text-[#556CE0] font-semibold text-lg relative mr-8">
              Todo
              <span className=" text-[#B6FEFF] absolute top-1 left-12">
                List
              </span>
            </h1>
          </div>

          {/************ divider line **************/}
          <div className="w-full h-5 mt-5">
            <hr className="hoverme border-black w-0 ease-in duration-500" />
          </div>

          {/*** delete message show */}

          <div className="absolute top-0 left-[40%] grid place-items-center mb-5  ">
            <span className="deleteMessage text-black text-lg"></span>
          </div>

          {/************ Input and Add list button */}
          <div className="flex rounded-full  bg-white/30">
            <input
              ref={inputRef}
              // onFocus={onHover}
              type="text"
              placeholder="Please enter your plan..."
              className="flex-1 border-0 placeholder:text-black pl-8 focus:outline-none py-3 text-md tracking-wide rounded-md bg-transparent"
            />
            <button
              onClick={list}
              className="border-none rounded-full px-5 py-auto font-medium text-md flex justify-center items-center gap-2 "
            >
              Add{" "}
              <span>
                <LuListPlus size={"2vw"} color="#556CE0" />
              </span>
            </button>
          </div>

          {/******** list *********/}
          <div className="w-full h-auto px-3 py-2 rounded-lg mt-10 mb-4 ">
            {todoList.map((item, index) => (
              <Todolist
                key={index}
                text={item.listText}
                id={item.id}
                isComplete={item.isComplete}
                deleteTodo={deleteTodo}
                toggle={completeToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
