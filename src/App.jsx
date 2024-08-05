import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Button, Input } from "antd";
import useGetQuery from "./Hooks/useGetQuery";
import WeatherCard from "./Components/WeatherCard";

const App = () => {
  const [city, setCity] = useState("");
  const [useCity, setUseCity] = useState("");
  const [searched, setSearched] = useState(false);
  const { data, loading } = useGetQuery({ city, searched });
  const handleSearch = () => {
    setCity(useCity);
    setSearched(true);
  };
  return (
    <>
      <Header />
      <div className='container mt-5'>
        <div className='d-flex'>
          <Input
            className=''
            placeholder='Enter City'
            size='large'
            value={useCity}
            onChange={(e) => setUseCity(e.target.value)}
          />
          <Button
            size='large'
            type='primary'
            className='ms-4'
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
        <WeatherCard />
      </div>
    </>
  );
};

export default App;
