import React from "react";

const style =
  "text-center w-full h-full grid grid-cols1 place-items-center bg-gray-100 dark:bg-gray-900";

const Center = ({ children }) => {
  return <div className={style}>{children}</div>;
};

export default Center;
