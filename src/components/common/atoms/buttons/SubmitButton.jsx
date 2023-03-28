import React from "react";
import "./appbutton.css";

const SubmitButton = ({ classname="submit-button", children }) => 
  <button className={classname} type="submit">{children}</button>

export default SubmitButton;
