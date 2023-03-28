import React from "react";
import { AppHeader, AppFooter } from "./components/app"

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <AppHeader />
      <div id="content-wrapper">
        {children}
      </div>
      <AppFooter />
    </div>
  )
}

export default AppLayout;
