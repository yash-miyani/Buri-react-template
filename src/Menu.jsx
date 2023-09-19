import React from "react";
import Header from "./Components/Header";
import MenuDiv from "./Components/MenuDiv";

const Menu = ({ isFakeDark }) => {
  return (
    <div>
      <Header>
        <h2> Home. menu</h2>
        <h1>Menu Items</h1>
      </Header>

      <MenuDiv isFakeDark={isFakeDark} />
    </div>
  );
};

export default Menu;
