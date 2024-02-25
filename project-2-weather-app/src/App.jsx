import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import bg from "./assets/background/bg.png";

function App() {
//   const [count, setCount] = useState(0)

    return (
        <BackgroundImage url={bg} alt="background-image-main" className="absolute top-0 left-0 w-screen h-screen bg-cover bg-center" >
            <WeatherCard />
        </BackgroundImage>
    )
}

export default App
