import cbw from "clothes-by-weather";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CurrentWeather = ({ weatherData }) => {
  const output = cbw({
    temperature: weatherData.main.temp - 273.15,
    pop: weatherData.main.humidity / 100,
    description: weatherData.weather[0].description,
    windGust: weatherData.wind.speed,
  });

  const { upperbody, lowerbody, shoes, misc } = output;

  return (
    <div className="my-6 w-full flex flex-col sm:flex-row gap-x-4 gap-y-4 justify-center sm:justify-between items-center">
      <Card className="w-full sm:w-2/4">
        <CardHeader className="border border-x-0 border-t-0 flex flex-row justify-between items-center h-fit w-full">
          <CardTitle className="flex flex-col justify-center items-center">
            <span className="text-lg sm:text-xl font-bold">
              {weatherData.city}
            </span>
            <span className="text-base font-semibold">
              {" "}
              {weatherData.weather[0].description?.toUpperCase()}{" "}
            </span>
          </CardTitle>
          <CardDescription className="text-2xl font-bold">
            {Math.round(weatherData.main.temp - 273.15)}°C
          </CardDescription>
          <img
            src={`icons/${weatherData.weather[0].icon}.png`}
            alt="weather"
            height={50}
            width={50}
            className="rounded-full"
          />
        </CardHeader>
        <CardContent className="mt-4 flex flex-col items-center justify-center space-y-2">
          <div>
            <span className="text-base font-semibold">Feels Like : </span>
            <span className="font-normal">
              {Math.round(weatherData.main.feels_like - 273.15)}°C
            </span>
          </div>
          <div>
            <span className="text-base font-semibold">Humidity : </span>
            <span className="font-normal">{weatherData.main.humidity}%</span>
          </div>
          <div>
            <span className="text-base font-semibold">Wind Speed : </span>
            <span className="font-normal">{weatherData.wind.speed}m/s</span>
          </div>
          <div>
            <span className="text-base font-semibold">Pressure : </span>
            <span className="font-normal">{weatherData.main.pressure}hPa</span>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full sm:w-2/4">
        <CardHeader className="text-center border border-x-0 border-t-0">
          <CardTitle className="text-lg font-bold">
            Outfit Recommendation
          </CardTitle>
          <CardDescription className="text-sm font-semibold">
            Style Made Simple: Your Personal Outfit Guide
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full mt-4 flex flex-wrap flex-col items-center justify-center space-y-2">
          {[upperbody].length !== 0 && (
            <div className="text-center">
              <span className="text-base font-semibold">UpperBody : </span>{" "}
              {[upperbody].map((up, index) => {
                return (
                  <span key={index} className="font-normal">
                    {" " + up}
                  </span>
                );
              })}
            </div>
          )}

          {[lowerbody].length !== 0 && (
            <div className="text-center">
              <span className="text-base font-semibold">LowerBody :</span>{" "}
              {[lowerbody].map((low, index) => {
                return (
                  <span key={index} className="font-normal">
                    {low + " "}
                  </span>
                );
              })}
            </div>
          )}

          {[shoes].length !== 0 && (
            <div className="text-center">
              <span className="text-base font-semibold">Shoes : </span>{" "}
              {[shoes].map((shoe, index) => {
                return (
                  <span key={index} className="font-normal">
                    {shoe + " "}
                  </span>
                );
              })}
            </div>
          )}

          {[misc].length !== 0 && (
            <div className="text-center">
              <span className="text-base font-semibold">Misc : </span>{" "}
              {[misc].map((m, index) => {
                return (
                  <span key={index} className="font-normal">
                    {m + " "}
                  </span>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CurrentWeather;
