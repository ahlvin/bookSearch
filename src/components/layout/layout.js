import React from "react";
import Classes from "./layout.module.css";

const Layout = props => {
  return (
    <div>
      <div className={Classes.header}>
        {/* <h2 style={{ margin: 0 }}>Book Finder</h2> */}
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
