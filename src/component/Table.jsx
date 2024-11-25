import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { completeTodos, deleteTodos } from "../redux/reducer";

export default function TodoTable({
  visableHandler,
  idHandler,
  tableIdHandler,
}) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state?.todos);
  return (
    <table className="table-auto border-collapse border border-slate-500 w-full mt-5">
      <thead>
        <tr className="text-xl p-3.5">
          <th className="border border-slate-600">completed</th>
          <th className="border border-slate-600">text</th>
          <th className="border border-slate-600">action</th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((value, index) => (
          <tr key={value.id}>
            {console.log(value, "$$#sdd$")}
            <td className="border border-slate-700 text-center">
              <input
                type="checkbox"
                checked={value.checked}
                onChange={(e) => {
                  dispatch(completeTodos(value.id));
                }}
              ></input>
            </td>
            <td className="border border-slate-700">{value.note}</td>
            <td className="p-3 border border-slate-700">
              <button
                onClick={() => dispatch(deleteTodos(value.id))}
                className="bg-red-500 hover:bg-red-700 p-1 rounded-lg text-center text-teal-950"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  visableHandler(false);
                  idHandler(index);
                  tableIdHandler(value.id);
                }}
                className="bg-green-500 hover:bg-green-700 p-1 ml-4 rounded-lg text-center text-teal-950"
              >
                update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
