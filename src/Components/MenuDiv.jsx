import React from "react";
import "./MenuDiv.css";

const MenuDiv = ({ isFakeDark }) => {
  const foodItem = [
    {
      path: "./Asseets/images/pork-sandwich.png",
      name: "PORK SANDWICH",
    },
    {
      path: "./Asseets/images/easter-delight.png",
      name: "EASTER DELIGHT",
    },
    {
      path: "./Asseets/images/roasted-marrow.png",
      name: "ROASTED MARROW",
    },
    {
      path: "./Asseets/images/tiner-schnittze.png",
      name: "TIENER SCHNITZE",
    },
    {
      path: "./Asseets/images/summer-cooking.png",
      name: "SUMMER COOKING",
    },
    {
      path: "./Asseets/images/chicken-roast.png",
      name: "CHICKEN ROAST",
    },
  ];

  let item;
  item = foodItem.map((food, index) => {
    return (
      <div className="menusub-div" key={index} data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 col-md-10 col-12">
            <img src={food.path} alt={food.name} className="menudiv-img" />
          </div>
          <div className="col-lg-8 col-md-10 col-12">
            <div style={{ marginLeft: "2rem" }}>
              <h2>{food.name}</h2>
              <p>They're wherein heaven seed hath nothing</p>
              <span>Form $40.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="my-8">
      <div className="container">
        <div className="grid col-2-template" style={{ gap: "2rem" }}>
          {item}
        </div>
      </div>
    </div>
  );
};

export default MenuDiv;
