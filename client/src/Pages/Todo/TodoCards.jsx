import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
import { delTask, getTask, updateTask } from "../../http";

function TodoCards() {
  // TODO: fix this toast success gives 4 times toast on 1st render of site

  const [todoData, setTodoData] = useState();

  const getTodoData = async () => {
    try {
      let res = await getTask();
      console.log("data fetching")
      if (res.status === 200) {
        setTodoData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckbox = async (id) => {
    try {
      let updatedTodo = todoData.map((prev) =>
        prev._id === id ? { ...prev, isCompleted: !prev.isCompleted } : prev
      );

      let res = await updateTask(id, {
        isCompleted: updatedTodo.find((task) => task._id === id)?.isCompleted,
      });

      if (res.data.statusCode === 200) {
        setTodoData(updatedTodo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      let res = await delTask(id);
      if (res.data.statusCode === 200) {
        setTodoData((prev) => prev.filter((task) => task?._id !== id));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodoData()
  }, []);

  return (
    <>
      {todoData?.length > 0 &&
        todoData?.map((todos) => (
          <div key={todos._id} className="relative">
            <ImCross
              className="absolute text-red-600 right-96 cursor-pointer"
              onClick={() => handleDelete(todos?._id)}
            />
            <div className="flex flex-col items-center border border-red-500 w-1/2 h-20 my-10 mx-auto bg-amber-500">
              <p>{todos.title}</p>
              <hr />
              <div className="flex justify-between items-center">
                <input
                  type="checkbox"
                  checked={todos.isCompleted}
                  onChange={() => {
                    handleCheckbox(todos?._id);
                  }}
                />
                {todos.isCompleted ? (
                  <p className="line-through">{todos.task}</p>
                ) : (
                  <p>{todos.task}</p>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default TodoCards;
