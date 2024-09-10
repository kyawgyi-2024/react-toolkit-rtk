import React from "react";
import { useGetTodoQuery } from "../store/endpoints/todo.endpoint";

const List = () => {
  const { isLoading, isError, isSuccess, data } = useGetTodoQuery();
  //   console.log(data);
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {data?.map((i) => (
            <h1 key={i.id}><span>{i.id}</span> - {i.text}</h1>
          ))}
        </>
      )}
    </div>
  );
};

export default List;
