import humidityIcon from "./meta_icon/humidity.svg"
import windIcon from "./meta_icon/wind_speed.svg"
import airQualityIcon from "./meta_icon/PM2.5.svg"
import somatosensoryIcon from "./meta_icon/Somatosensory_temperature.svg"
import MetaItem from "./components/MetaItem";

const Meta = ({
    humidity = "85%",
    wind = "9km/h",
    airQuality = "75µg",
    somatosensory = "26°",
}) => {
    return (
        <div className="bg-slate-50 max-w-full rounded-2xl flex justify-between items-center">
            <MetaItem url={humidityIcon} alt="humidity-icon" value={humidity} />
            <MetaItem url={windIcon} alt="wind-icon" value={wind} />
            <MetaItem url={airQualityIcon} alt="airQuality-icon" value={airQuality} />
            <MetaItem url={somatosensoryIcon} alt="somatosensory-icon" value={somatosensory} />
        </div>
    )
}

export default Meta;
