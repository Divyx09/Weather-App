import React from "react";

const WeatherCard = (WeatherData) => {
  return (
    <div className='border  mt-4'>
      <div className='d-flex mx-3'>
        <h1>Country:{WeatherData.country}</h1>
        <h1>City:{WeatherData.city}</h1>
      </div>
      <div className='border m-3 p-2'>
        <h3>Weather Data</h3>
      </div>
    </div>
  );
};

export default WeatherCard;
