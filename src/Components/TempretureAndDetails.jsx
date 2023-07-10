import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TempretureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        <p className="text-5xl">34°</p>

        {/* Weather feels icons */}
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1"></UilTemperature>
            Real feel:
            <span className="font-medium ml-1"> 32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1"></UilTear>
            Humidity:
            <span className="font-medium ml-1"> 60%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1"></UilWind>
            Wind :<span className="font-medium ml-1"> 11km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSunset></UilSunset>
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 am</span>
        </p>
      </div>
    </div>
  );
};

export default TempretureAndDetails;
