import React from "react";
import { AppLink } from "../atoms/links";

const NavBar = ({ links }) => 
  <ul>{links?.map((link) => <AppLink path={link?.path} label={link?.label} classname={link?.classname} />)}</ul>

export default NavBar;
