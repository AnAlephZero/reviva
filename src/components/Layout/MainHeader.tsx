// import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

import React from "react";

export type IMainHeaderProps = {};

const MainHeader: React.FC<IMainHeaderProps> = () => {
  return (
    <header className={classes.header}>
      <h1>REVIVA TEST</h1>
      <nav>
        <ul>
          <li>
            {/* <CartButton /> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
