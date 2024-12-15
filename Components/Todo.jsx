import React from "react";

const Todo = ({
  id,
  title,
  description,
  isCompleted,
  mongoId,
  deleteTodo,
  completeTodo,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id + 1}
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">
        {isCompleted ? "Completed" : "Not Completed"}
      </td>
      <td className="px-6 py-4 flex gap-2">
        <button
          onClick={() => deleteTodo(mongoId)}
          className="py-2 px-4 bg-red-500 text-white"
        >
          Delete
        </button>
        <button
          onClick={() => completeTodo(mongoId)}
          className="py-2 px-4 bg-green-500 text-white"
        >
          Done
        </button>
      </td>
    </tr>
  );
};

export default Todo;
