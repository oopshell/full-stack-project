import CurrentCity from "./components/CurrentCity/CurrentCity";
import Forecast from "./components/Forecast/Forecast";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchHistory from "./components/SearchHistory/SearchHistory";

const WeatherCard = () => {
    return (
        <div className="w-screen h-screen flex items-center">
            <div className="relative container p-10 mx-auto bg-slate-50 rounded-3xl shadow-blue-800 grid grid-cols-6 grid-rows-6">
                <CurrentCity />
                <Forecast />
                <SearchBar />
                <SearchHistory />
            </div>
        </div>
    )
}

export default WeatherCard;
// 236 236 251