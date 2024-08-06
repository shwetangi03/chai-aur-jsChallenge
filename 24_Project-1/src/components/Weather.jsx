import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaCity } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://freetestapi.com/api/v1/weathers?city=${city}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  return (
    <div>
      <form onSubmit={submithandler}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Get weather</button>
      </form>
      {loading && <div>Loading...</div>}

      {error && <div>Error: {error}</div>}
      <ul>
        {weather.map((data) => (
          <li key={data.id}>
            <FaCity /> {data.city} <FaTemperatureHigh /> : {data.temperature}{" "}
            Weather-description: {data.weather_description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;
