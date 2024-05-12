import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Forecast = ({ forecastData }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const newWeekday = weekday
    .slice(new Date().getDay() + 1, weekday.length)
    .concat(weekday.slice(0, new Date().getDay() + 1));

  return (
    <div className="w-full">
      <div className="text-center font-bold text-3xl my-10">
        Next 7 Days Forecast
      </div>

      <Accordion type="single" collapsible className="w-full">
        {forecastData.list.splice(0, 7).map((forecast, idx) => {
          return (
            <AccordionItem key={idx} value={`item-${idx}`} className="my-2">
              <AccordionTrigger>
                <div className="w-full flex flex-row items-center justify-between p-2">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-x-2 gap-y-2">
                    <img
                      alt="weather-icon"
                      src={`icons/${forecast.weather[0].icon}.png`}
                      height={40}
                      width={40}
                      className="rounded-full border"
                    />
                    <label className="text-sm sm:text-lg font-semibold">
                      {forecast.weather[0].description.toUpperCase()}
                    </label>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-x-2 gap-y-2">
                    <label className="text-sm sm:text-lg font-semibold">
                      {newWeekday[idx]}
                    </label>
                    <label className="text-sm sm:text-lg font-semibold">
                      {Math.round(forecast.main.temp_max - 273.15)}°C /{" "}
                      {Math.round(forecast.main.temp_min - 273.15)}°C
                    </label>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="rounded-lg my-4 p-4 grid grid-cols-2 gap-4">
                <div className="flex flex-col sm:flex-row justify-start items-center">
                  <label className="textbase sm:text-lg font-bold">
                    Pressure&nbsp;:&nbsp;
                  </label>
                  <label className="text-normal">
                    {forecast.main.pressure}hPa
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row justify-end items-center">
                  <label className="textbase sm:text-lg font-bold">
                    Humidity&nbsp;:&nbsp;
                  </label>
                  <label className="text-normal">
                    {forecast.main.humidity}%
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-center">
                  <label className="textbase sm:text-lg font-bold">
                    Clouds&nbsp;:&nbsp;
                  </label>
                  <label className="text-normal">{forecast.clouds.all}</label>
                </div>
                <div className="flex flex-col sm:flex-row justify-end items-center">
                  <label className="textbase sm:text-lg font-bold">
                    Wind Speed&nbsp;:&nbsp;
                  </label>
                  <label className="text-normal">
                    {forecast.wind.speed}m/s
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-center">
                  <label className="textbase sm:text-lg font-bold">
                    Sea Level&nbsp;:&nbsp;
                  </label>
                  <label className="text-normal">
                    {forecast.main.sea_level}m
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row justify-end items-center">
                  <label className="textbase sm:text-lg font-bold">
                    Feels Like&nbsp;:&nbsp;
                  </label>
                  <label className="text-normal">
                    {Math.round(forecast.main.feels_like - 273.15)}°C
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Forecast;
