import React from "react";
import demo from "../assets/demo.png";

const WeatherCard = ({ weatherData }) => {
  const { location, current } = weatherData;
  return (
    <div className='border  mt-4 weather-card w-100'>
      <div className=' m-4 rounded weather-card-content '>
        <h6 className='text-secondary'>CURRENT WEATHER</h6>
        <hr />
        <div className='d-flex justify-content-between'>
          <div>
            <span className='d-flex align-items-center justify-content-around weather-card-image-tmp'>
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
          <div className='d-flex flex-column weather-card-side'>
            <span>Wind Speed(kmp): {current?.wind_kph} km/ph</span>
            <span>Wind Speed(mph): {current?.wind_mph} m/ph</span>
            <span>Temprature (Fahrenheit): {current?.temp_f}°F</span>
          </div>
        </div>
        {/* <div>
          <span>Temprature (Celcius): {current?.temp_c}</span>
          <span>Temprature (Fahrenheit): {current?.temp_f}</span>
          <span>Humidity: {current?.humidity}</span>
        </div> */}
      </div>
    </div>
  );
};

export default WeatherCard;
