import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RestaurantPage from "./pages/RestaurantPage";
import CreateRestaurant from "./pages/CreateRestaurant";
import UpdateRestaurant from "./pages/UpdateRestaurant";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<RestaurantPage />} />
      <Route path="/create" element={<CreateRestaurant />} />
      <Route path="/update/:id" element={<UpdateRestaurant />} />
    </Routes>
  </Router>
);

export default App;
