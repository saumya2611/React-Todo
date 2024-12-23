import React, { useEffect, useState } from "react";
import Button from "./Button";
import TodoItem from "./TodoItem";
import Restore from "./Restore";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [restoreList, setRestoreList] = useState([]);
  const [id, setId] = useState(1);

  const addTodo = () => {
    const todoData = {
      id,
      value: inputValue,
    };

    setTodoList([...todoList, todoData]);
    setId((pr) => pr + 1);
    setInputValue("");
  };

  // State up-lift
  const editItem = (id, newValue) => {
    console.log("id, newValue-->", id, newValue);
    console.log("todoList-->", todoList);
    const newList = todoList.map((ele) => {
      if (ele.id === id) {
        return {
          id,
          value: newValue,
        };
      }
      return ele;
    });
    console.log("newList-->", newList);
    setTodoList(newList);
  };

  const deleteItem = (id) => {
    console.log("deleteItem =========>", id);

    const restore = todoList.find((item) => {
      console.log("restore item========>", item, item.id === id, id);

      return item.id === id;
    });

    setRestoreList([...restoreList, restore]);

    const newArr = todoList.filter((item) => {
      // console.log("item=========>", item);
      // [1,2,3,4,5,6,7,8,9] 5

      // console.log("item.id != id =======>", item, item.id, item.id != id);

      return item.id != id;
    });
    // console.log("newArr ==========>", newArr);

    setTodoList(newArr);
  };

  const restoreData = (item) => {
    console.log("item ===========>", item);

    const restoreItem = restoreList.filter((ele) => {
      return ele.id != item.id;
    });
    setTodoList([...todoList, item]);
    setRestoreList(restoreItem);
  };

  useEffect(() => {
    console.log("restoreList ===============>", restoreList);
  }, [restoreList]);

  return (
    <>
      <div className=" flex flex-col items-center justify-center mt-[10rem]">
        <div className="w-[400px]  mx-auto mt-3 flex items-center justify-around">
          <input
            type="text"
            placeholder="Add Todo......"
            className="rounded-md border px-5 py-2 w-[300px] ml-2"
            value={inputValue}
            onChange={(ev) => setInputValue(ev.target.value)}
          />
          <Button
            title={"Add"}
            className={"rounded-md px-5 py-2 bg-blue-700 text-zinc-50"}
            onClick={addTodo}
          />
        </div>
        <div className="mt-2">
          {todoList.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                editItem={editItem}
                deleteItem={deleteItem}
              />
            );
          })}
        </div>

        <div className="mt-9">
          {restoreList.length ? (
            <h1 className="text-2xl text-left">Restore Data</h1>
          ) : null}

          {restoreList.map((item) => {
            return (
              <Restore key={item.id} item={item} restoreData={restoreData} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
