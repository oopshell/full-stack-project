import BackgroundImage from "../../../BackgroundImage";
import WeatherIcon from "../../../WeatherIcon";
import Name from "../../../Name";
import TemperatureRange from "../../../TemperatureRange";
import bgLondon from "./assets/city/London.png"

const SearchHistory = ({
    WeatherIconUrl,
    value = "Sydney",
    valueLow = "28",
    valueHigh = "32",
}) => {
    return (
        <div className="row-span-2 col-span-4 flex justify-between items-end">
            <div className="relative bg-blue-400 rounded-2xl">
                <BackgroundImage url={bgLondon} alt="background-image-other-city" className="rounded-2xl opacity-20" />
                <div className="flex-col absolute top-3 left-3 text-center">
                    <WeatherIcon className="size-10" />
                    <Name value={value} className="text-white text-2xl text-bold" />
                    <TemperatureRange valueLow={valueLow} valueHigh={valueHigh} className="text-white" />
                </div>
            </div>
        </div>
    )
}

export default SearchHistory;
