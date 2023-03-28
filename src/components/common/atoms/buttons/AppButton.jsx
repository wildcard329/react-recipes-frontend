import React from "react";
import "./appbutton.css";

const AppButton = ({ btnCb, children, classname="app-button" }) => 
  <button className={classname} type="button" onClick={btnCb}>{children}</button>

export default AppButton;
  