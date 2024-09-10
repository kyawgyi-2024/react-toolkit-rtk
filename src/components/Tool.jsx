import React, { useState } from "react";
import { usePostTodoMutation } from "../store/endpoints/todo.endpoint";

const Tool = ({ handleRefetch }) => {
  const [todo, setTodo] = useState("");

  const [fun, data] = usePostTodoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fun({
      text: todo,
    });
    handleRefetch();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Tool;
