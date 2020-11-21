import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ categories }) => {
  return (
    <ul className="Sidebar">
      <NavLink to="/category/all" exact>
        All
      </NavLink>
      <hr />
      {categories.map((category) => (
        <li key={category._id}>
          <NavLink to={"/category/" + category._id} exact>
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Sidebar;
