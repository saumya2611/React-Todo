import React, { useState } from "react";
import Button from "./Button";

const TodoItem = ({ item, editItem, deleteItem, restoreItem }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(item.value);

  const saveItem = () => {
    editItem(item.id, inputValue);
    setIsEdit(false);
  };

  const restoreData = () => {
    restoreItem(item.value);
  };

  return (
    <div className="mt-3 border px-3 py-2 flex justify-between w-[390px]">
      {isEdit === true ? ( // false === true ===> false
        <input
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
          className="border px-3 py-1"
        />
      ) : (
        item.value
      )}
      <div>
        {isEdit === true ? ( // false === true ===> false
          <Button
            title={"Save"}
            className="px-4 py-1 bg-amber-500 hover:bg-amber-600 text-white"
            onClick={saveItem}
          />
        ) : (
          <Button
            title={"Edit"}
            className="px-4 py-1 bg-amber-500 hover:bg-amber-600 text-white"
            onClick={() => setIsEdit(true)}
          />
        )}

        <Button
          title={"Delete"}
          className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white ml-2"
          onClick={() => deleteItem(item.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
