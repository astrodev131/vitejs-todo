import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodos, updateTodos } from "../redux/reducer";
import { v4 } from "uuid";

export default function TodoInput({ visableHandler, index, tableId }) {
  const defaultText = useSelector((state) => state?.todos[index - 1]?.note);
  const [text, setText] = useState("");
  useEffect(() => {
    if (defaultText) {
      setText(defaultText);
    }
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="mt-20 p-10 bg-slate-800">
      <input
        placeholder="Enter name"
        className="bg-slate-300 text-black p-2 w-96"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          visableHandler(true);
          index === 0
            ? dispatch(addTodos({ note: text, checked: false, id: v4() }))
            : dispatch(updateTodos({ text, tableId }));
          setText("");
        }}
        className="bg-blue-400 text-1xl mt-2 pl-7 pr-7 p-1 text-black rounded-lg text-center"
      >
        {index === 0 ? "ADD" : "UPDATE"}
      </button>
    </div>
  );
}
