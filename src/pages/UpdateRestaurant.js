import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantForm from "../components/RestaurantForm";
import axios from "axios";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await axios.get(`/api/restaurant/${id}`);
      setRestaurant(response.data);
    };

    fetchRestaurants();
  }, [id]);

  const updateRestaurant = async (data) => {
    await axios.put(`/api/restaurant/${id}`, data);
  };

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl my-4">UpdateRestaurant</h2>
      <RestaurantForm initialData={restaurant} onSubmit={updateRestaurant} />
    </div>
  );
};

export default UpdateRestaurant;
