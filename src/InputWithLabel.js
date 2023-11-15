import React, { useEffect, useRef } from "react";

const InputWithLabel = ({ todoValue, onInputChange, children }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        name="title"
        id="todoTitle"
        value={todoValue}
        onChange={onInputChange}
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;
