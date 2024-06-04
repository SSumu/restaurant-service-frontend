import React from "react";
import RestaurantForm from "../components/RestaurantForm";
import axios from "axios";

const CreateRestaurant = () => {
  const createRestaurant = async (data) => {
    await axios.post("/api/restaurants", data);
  };

  return (
    <div>
      <h2 className="text-2xl my-4">Create Restaurant</h2>
      <RestaurantForm onSubmit={createRestaurant} />
    </div>
  );
};

export default CreateRestaurant;
