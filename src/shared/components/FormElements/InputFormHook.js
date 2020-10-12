import React from "react";

const InputFormHook = (props) => {
  const element =
    props.element === "editInput" ? (
      <textarea
        rows={props.rows || 3}
        name={props.nam1}
        defaultValue={props.val1}
        ref={props.valRef}
      />
    ) : (
      <textarea
        value={props.valu1}
        id={props.id}
        rows={props.rows || 3}
        ref={props.valRef}
        name={props.nam1}
      />
    );

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label> <br />
      {element}
    </div>
  );
};

export default InputFormHook;
