import React from "react";

const TopButton = () => {
  const cities = [
    {
      id: 1,
      title: "Paris",
    },
    {
      id: 2,
      title: "New York",
    },
    {
      id: 3,
      title: "Sydney",
    },
    {
      id: 4,
      title: "Dhaka",
    },
    {
      id: 5,
      title: "Tokyo",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => {
        return (
          <button key={city.id} className="text-white text-lg font-medium">
            {city.title}
          </button>
        );
      })}
      ,
    </div>
  );
};

export default TopButton;
