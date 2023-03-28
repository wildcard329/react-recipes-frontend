import React from "react";
import navLinks from "../../assets/configs/navLinks.json";
import { NavBar } from "../common/molecules";

const AppHeader = () => 
  <section id="header">
    <header>
      <NavBar links={navLinks} />
    </header>
  </section>

export default AppHeader;
