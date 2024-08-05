import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherAPI from "../API/WeatherAPI";

const useGetQuery = ({ city, searched }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    searched &&
      axios
        .get(
          `${WeatherAPI.baseUrl}=${WeatherAPI.apiKey}&q=${
            city === "" ? "Ujjain" : city
          }&aqi=no`,
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setLoading(true);
        })
        .catch((err) => {
          console.log("error");
        });
  }, [city, searched]);
  return { data, loading };
};

export default useGetQuery;
