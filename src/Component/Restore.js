import React from "react";
import Button from "./Button";

const Restore = ({ item, restoreData }) => {
  return (
    <div className="mt-2 border px-3 py-2 flex justify-between w-[390px]">
      <div>{item.value}</div>
      <Button
        title={"Restore"}
        className={"bg-lime-600 px-3 py-1 text-slate-50"}
        onClick={() => restoreData(item)}
      />
    </div>
  );
};

export default Restore;
