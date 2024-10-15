import React, {forwardRef, useRef} from "react";
import "./Button.scss";

const Button = forwardRef(function Button(
  {onClick, disabled = false, classname, children},
  ref
) {
  return (
    <button
      ref={ref}
      className={`btn ${classname}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
});
export default Button;
