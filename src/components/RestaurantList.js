import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await axios.get("/api/restaurant");
      setRestaurants(response.data);
    };
    fetchRestaurants();
  }, []);

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-2xl mb-4">Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id} className="mb-2">
            <Link
              to={`/restaurant/${restaurant._id}`}
              className="text-blue-500"
            >
              {restaurant.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
