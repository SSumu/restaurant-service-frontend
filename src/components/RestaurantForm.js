import React, { useState } from "react";

const RestaurantForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || "");
  const [address, setAddress] = useState(initialData.address || "");
  const [telephone, setTelephone] = useState(initialData.telephone || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, address, telephone });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-4">
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Telephone</label>
        <input
          type="text"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default RestaurantForm;
