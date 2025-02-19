import React, { useEffect, useState } from "react";
import { getTask } from "../../http";
import toast from "react-hot-toast";

function TodoCards() {

  // TODO: fix this toast success gives 4 times toast on 1st render of site

  const [todoData, setTodoData] = useState();

  const getTodoData = async () => {
    let res = await getTask();
    try {
      setTodoData(res.data.data);
      if (res.status === 200) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <>
      {todoData?.length > 0 &&
        todoData?.map((todos) => (
          <div key={todos._id}>
            <p>{todos.title}</p>
            <p>{todos.task}</p>
          </div>
        ))}
    </>
  );
}

export default TodoCards;
