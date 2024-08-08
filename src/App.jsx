import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Button, Input } from "antd";
import useGetQuery from "./Hooks/useGetQuery";
import WeatherCard from "./Components/WeatherCard";
import weatherDummyData from "../dummyData";
import Loader from "./Components/Loader";

const App = () => {
  const [city, setCity] = useState("Ujjain");
  const [useCity, setUseCity] = useState("");
  const [searched, setSearched] = useState(false);
  const { data, loading, error } = useGetQuery({ city, searched });
  const handleSearch = () => {
    setCity(useCity);
    setSearched(true);
  };

  useEffect(() => {
    if (!searched) {
      setCity("Ujjain");
      setSearched(true);
    }
  }, []);
  return (
    <>
      {/* <Header /> */}
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
        {loading ? (
          <Loader />
        ) : data === "" ? (
          <div className=' mt-3 d-flex justify-content-center w-100'>
            <h1>{error}</h1>
          </div>
        ) : (
          <div className=' mt-3 d-flex justify-content-center w-100'>
            <WeatherCard weatherData={data ?? weatherDummyData} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
