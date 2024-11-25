import React, { useState } from "react";
import TodoTable from "./component/table";
import TodoInput from "./component/TodoInput";

export default function mainPage() {
  const [visable, setVisable] = useState(true);
  const [id, setId] = useState(0);
  const [tableId, setTableId] = useState(0);
  {
    console.log(id);
  }

  const visableHandler = (value) => {
    setVisable(value);
  };
  const idHandler = (value) => {
    setId(value);
  };
  const tableIdHandler = (value) => {
    setTableId(value);
  };

  const inputVisable = visable;
  const index = id + 1;
  return (
    <>
      <p className="text-yellow-200 text-4xl">TO DO LIST</p>
      <TodoTable
        idHandler={idHandler}
        tableIdHandler={tableIdHandler}
        visableHandler={visableHandler}
      ></TodoTable>
      <button
        onClick={() => {
          idHandler(-1);
          visableHandler(false);
        }}
        className="bg-yellow-400 text-1xl mt-2 pl-7 pr-7 p-1 text-black rounded-lg text-center "
      >
        Add
      </button>
      {inputVisable ? (
        <></>
      ) : (
        <TodoInput
          visableHandler={visableHandler}
          index={index}
          tableId={tableId}
        />
      )}
    </>
  );
}
