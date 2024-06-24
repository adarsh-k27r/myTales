import React from "react";
import logo from "../assets/mytales_logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "flowbite-react";

function NavBar() {
  const path = useLocation().pathname;
  const navigate = useNavigate();

  const handler = () => {
    navigate("/");
  };

  // Define the routes where you want to show the navbar
  const navRoutes = ["/", "/stories", "/dashboard", "/publish", "/about"];

  // Check if the current location matches any of the navRoutes
  const showNavbar = navRoutes.includes(path);

  // Render the navbar conditionally
  if (!showNavbar) {
    return null;
  }

  return (
    <Navbar
      rounded
      className="top-0 sticky bg-white border-b-[0.1px] border-solid border-[#5671895a] z-[3]"
    >
      <img
        src={logo}
        className="w-[20%] sm:w-[11%] cursor-pointer"
        alt="logo"
        onClick={handler}
      />

      <ul className="flex justify-center items-center md:order-2 gap-3">
        <li>
          <Link
            to="/sign-in"
            className="hover:text-[#FF597B] hover:bg-[#ff8e9d14] sm:font-medium px-[17px] py-[12px] flex justify-center items-center bg-white border border-solid border-[#ff000028] rounded-[15px] box-border font-sans text-[10pt] cursor-pointer duration-[0.4s] "
          >
            Sign In&nbsp;&nbsp;
            <i className="fa-solid fa-circle-user fa-xl" />
          </Link>
        </li>
        <li>
          <Navbar.Toggle />
        </li>
      </ul>

      <Navbar.Collapse>
        <Navbar.Link as={"div"}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#ff597b" : "",
            })}
            className="leading-[2] hover:text-[#ff597b] sm:text-base "
          >
            Home
          </NavLink>
        </Navbar.Link>

        <Navbar.Link as={"div"}>
          <NavLink
            to="/stories"
            style={({ isActive }) => ({
              color: isActive ? "#ff597b" : "",
            })}
            className="leading-[2] hover:text-[#FF597B] sm:text-base"
          >
            Stories
          </NavLink>
        </Navbar.Link>

        <Navbar.Link as={"div"}>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#ff597b" : "",
            })}
            className="leading-[2] hover:text-[#FF597B] sm:text-base"
          >
            About us
          </NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
