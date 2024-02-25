import Name from "../../../../Name";
import Date from "../../../../Date";
import WeatherIcon from "../../../../WeatherIcon";
import TemperatureRange from "../../../../TemperatureRange";

const DayOfWeek = ({
    valueName,
    valueDate,
    valueLow,
    valueHigh,
    url,
    className,
    classNameName,
    classNameDate,
    classNameWeatherIcon,
    classNameTemperatureRange,
}) => {
    return (
        <div className={className}>
            <Name value={valueName} className={classNameName} />
            <Date value={valueDate} className={classNameDate} />
            <WeatherIcon className={classNameWeatherIcon} />
            <TemperatureRange valueLow={valueLow} valueHigh={valueHigh} className={classNameTemperatureRange} />
        </div>
    )
}

export default DayOfWeek;
