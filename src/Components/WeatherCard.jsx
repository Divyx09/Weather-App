import React from "react";
import demo from "../assets/demo.png";

const WeatherCard = ({ weatherData }) => {
  const { location, current } = weatherData;
  return (
    <div className='border  mt-4 weather-card w-100 '>
      <div className=' m-4 mb-2 rounded weather-card-content '>
        <h6 className=''>CURRENT WEATHER</h6>
        <hr />
        <div className='d-flex justify-content-between my-4'>
          <div>
            <span className='d-flex align-items-center justify-content-around weather-card-image-tmp me-4'>
              <img
                src={current?.condition?.icon}
                alt='weather Img'
                width={100}
                height={100}
              />
              <span className='ps-3'>
                <h1>{current?.temp_c}°C</h1>
                <h6>{current?.condition?.text}</h6>
              </span>
            </span>
          </div>
          <div className='d-flex flex-column weather-card-side '>
            <span className='border-bottom w-100 h-100 text-center '>
              Humidity: {current?.humidity}%
            </span>
            <span className='border-bottom w-100 h-100 text-center '>
              Wind Speed(kmp): {current?.wind_kph} km/ph
            </span>
            <span className=' w-100 h-100 text-center '>
              Temprature (Fahrenheit): {current?.temp_f}°F
            </span>
          </div>
        </div>
        <hr></hr>
        <div className='location-name'>
          <span>Country: {location.country}</span>
          <span>City: {location.name}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
