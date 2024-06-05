import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async (id) => {
      try {
        const response = await axios.get(`/api/restaurant/${id}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error("Error fetching restaurant:", error);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-2xl mb-4">{restaurant.name}</h2>
      <p className="mb-2">
        <strong>Address:</strong>
        {restaurant.address}
      </p>
      <p className="mb-4">
        <strong>Telephone:</strong>
        {restaurant.telephone}
      </p>
      <Link
        to={`/update/${restaurant._id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Edit
      </Link>
    </div>
  );
};

export default RestaurantDetail;
