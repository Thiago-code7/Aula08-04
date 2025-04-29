import { useState, useRef } from "react";
import axios from "axios";
import WeatherInformations from "../../components/WeatherInformations/WheaterInformations";


function Homepage(){
    const inputRef = useRef();
    const [weather, setWeather] = useState();

    async function searchCity(){
        const city = inputRef.current.value;
        const key = "046c389345ffe15a1b30faddfd22060f";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;
        const apiInfo = await axios.get(url);
        setWeather(apiInfo.data)
        console.log(apiInfo.data)
    }
    return(
        <div>
            <h1> Componente Homepage </h1>
            <input ref={inputRef} type="text"  placeholder="Digite a cidade"/>
            <button onClick={searchCity}>Buscar</button>

            {weather && <WeatherInformations weather={weather} /> }

        </div>
    )

}

export default Homepage;