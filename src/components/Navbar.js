import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-500 p-4">
    <div className="container mx-auto">
      <Link to="/" className="text-white mr-4">
        Home
      </Link>
      <Link to="/create" className="text-white">
        Create Restaurant
      </Link>
    </div>
  </nav>
);

export default Navbar;
