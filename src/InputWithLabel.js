import React, { useEffect, useRef } from "react";

const InputWithLabel = ({ todoValue, onInputChange, children }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [todoValue]);

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        name="title"
        id="todoTitle"
        value={todoValue}
        onChange={onInputChange}
        ref={inputRef}
      ></input>
    </>
  );
};

export default InputWithLabel;
