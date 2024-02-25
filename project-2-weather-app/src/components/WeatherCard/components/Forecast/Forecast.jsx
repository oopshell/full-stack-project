import DayOfWeek from "./components/DayOfWeek";

const Forecast = () => {
    // const dayOfWeekData = {};
    return (
        <div className="row-span-3 col-span-4 flex justify-between">
            <DayOfWeek valueName="Monday" valueDate="19 Feb" valueLow="20" valueHigh="25" className="text-center" classNameName="text-2xl text-bold" classNameWeatherIcon="flex justify-center items-center" />
            <DayOfWeek valueName="Monday" valueDate="19 Feb" valueLow="20" valueHigh="25" className="text-center" classNameName="text-2xl text-bold" classNameWeatherIcon="flex justify-center items-center" />
            <DayOfWeek valueName="Monday" valueDate="19 Feb" valueLow="20" valueHigh="25" className="text-center" classNameName="text-2xl text-bold" classNameWeatherIcon="flex justify-center items-center" />
            <DayOfWeek valueName="Monday" valueDate="19 Feb" valueLow="20" valueHigh="25" className="text-center" classNameName="text-2xl text-bold" classNameWeatherIcon="flex justify-center items-center" />
        </div>
    )
}

export default Forecast;
