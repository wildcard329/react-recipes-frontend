import React from "react";
import { Link } from "react-router-dom";
import "./link.css";

const AppLink = ({ path, label, classname }) => 
  <Link to={path} className={classname}>{label}</Link>

export default AppLink;
