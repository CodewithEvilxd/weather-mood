import { useState } from "react";
import Search from "@/components/Search";
import Forecast from "@/components/Forecast";
import CurrentWeather from "@/components/CurrentWeather.jsx";
import {
  OPEN_WEATHER_BASE_URL,
  OPEN_WEATHER_FORECAST_URL,
} from "@/api/openWeatherApi.js";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  function handleOnSearchChange(searchData) {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${OPEN_WEATHER_BASE_URL}&lat=${lat}&lon=${lon}`
    );
    const forecastFetch = fetch(
      `${OPEN_WEATHER_FORECAST_URL}&lat=${lat}&lon=${lon}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setWeatherData({ city: searchData.label, ...weatherResponse });
        setForecastData({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <div className="p-4 w-full min-h-screen flex justify-center items-start">
        <div className="w-11/12">
          <Search onSearchChange={handleOnSearchChange} />
          {weatherData && <CurrentWeather weatherData={weatherData} />}
          {forecastData && <Forecast forecastData={forecastData} />}
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
