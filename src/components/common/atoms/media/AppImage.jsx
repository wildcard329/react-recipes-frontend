import React from "react";
import "./media.css";

const AppImage = ({ classname, source, alt }) =>
  <img className={classname} src={source} alt={alt} />

export default AppImage;
