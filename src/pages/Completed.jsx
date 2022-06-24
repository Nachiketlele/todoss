import React from "react";
import { useSelector } from "react-redux";

const Completed = () => {
  const { data: todo } = useSelector((state) => state.todo);
  return (
    <div>
      Completed
      {todo.map((el) => (
        <div key={el.id}>{el.isCompleted ? el.value : ""}</div>
      ))}
    </div>
  );
};

export default Completed;
