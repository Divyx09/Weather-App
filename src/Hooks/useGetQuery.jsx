import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherAPI from "../API/WeatherAPI";

const useGetQuery = ({ city, searched }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    searched &&
      axios
        .get(`${WeatherAPI.baseUrl}=${WeatherAPI.apiKey}&q=${city}&aqi=no`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response.data.error.message);
          setError(err.response.data.error.message);
        });
  }, [city, searched]);

  return { data, loading, error };
};

export default useGetQuery;
