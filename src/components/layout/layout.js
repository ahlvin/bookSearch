import React from "react";
import Classes from "./layout.module.css";
import Aux from "../../hoc/Aux";
const Layout = props => {
  return (
    <Aux>
      <div className={Classes.header}>
        {/* <h2 style={{ margin: 0 }}>Book Finder</h2> */}
      </div>
      {props.children}
    </Aux>
  );
};

export default Layout;
