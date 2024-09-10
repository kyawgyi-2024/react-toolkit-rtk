import React from "react";
import Tool from "./components/Tool";
import List from "./components/List";
import { useGetTodoQuery } from "./store/endpoints/todo.endpoint";

const App = () => {
  const { isLoading, isError, isSuccess, refetch } = useGetTodoQuery();

  const handleRefetch = () => {
    refetch();
  };
  return (
    <div>
      <h1>Rtk Todo</h1>
      <Tool handleRefetch={handleRefetch} />
      <List />
    </div>
  );
};

export default App;
