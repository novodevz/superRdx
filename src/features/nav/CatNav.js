// CatNav.js
import React from "react";
import { useParams } from "react-router-dom";
import MyLink from "./MyLink";

const CatNav = () => {
  const { dep } = useParams();

  let catNavComponent;
  const path = `/shop/${dep}/`;
  switch (dep) {
    case "fresh":
      catNavComponent = (
        <div>
          <p>
            <MyLink to={path + "fruits"}>fruits</MyLink>
          </p>
          <p>
            <MyLink to={path + "vegetables"}>Vegetables</MyLink>
          </p>
          <p>
            <MyLink to={path + "herbs"}>herbs</MyLink>
          </p>
        </div>
      );
      break;
    case "bread":
      catNavComponent = (
        <div>
          <p>
            <MyLink to={path + "white-bread"}>white bread</MyLink>
          </p>
          <p>
            <MyLink to={path + "whole-bread"}>whole bread</MyLink>
          </p>
          <p>
            <MyLink to={path + "baguette"}>baguette</MyLink>
          </p>
        </div>
      );
      break;
    case "wine":
      catNavComponent = (
        <div>
          <p>
            <MyLink to={path + "red"}>red</MyLink>
          </p>
          <p>
            <MyLink to={path + "white"}>white</MyLink>
          </p>
          <p>
            <MyLink to={path + "rose"}>rose</MyLink>
          </p>
        </div>
      );
      break;
    // Add more cases as needed for other categories
    default:
      // Render default navigation or handle other cases
      catNavComponent = (
        <div>
          {/* Render default navigation */}
          <p>Default catNavComponent</p>
        </div>
      );
  }

  return <div>{catNavComponent}</div>;
};

export default CatNav;
