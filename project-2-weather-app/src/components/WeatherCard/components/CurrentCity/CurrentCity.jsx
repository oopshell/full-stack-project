import BackgroundImage from "../../../BackgroundImage";
import Date from "../../../Date";
import Name from "../../../Name";
import Temperature from "./components/Temperature";
import TemperatureRange from "../../../TemperatureRange";
import WeatherIcon from "../../../WeatherIcon";
import Meta from "./components/Meta/Meta";
import bgCloudy from "./assets/background/Cloudy_day_background.png";

const CurrentCity = () => {
  return (
    <div className="row-span-6 col-span-2 relative">
      <BackgroundImage url={bgCloudy} alt="background-image-current-city" className="bg-linear-gradient rounded-3xl">
        <div className="absolute top-0 left-0 p-3">
            <Date value="18 February, Sunday 17:23" className="text-white" />
            <Name value="Melbourne" className="text-white text-3xl font-bold text-center py-10" />
            <Temperature value="18" className="text-slate-200 text-8xl font-bold text-center" />
            <TemperatureRange valueLow="10" valueHigh="25" className="text-white text-center" />
            <WeatherIcon className="flex justify-center items-center" />
            <Meta />
        </div>
      </BackgroundImage>
    </div>
  );
}

export default CurrentCity;
