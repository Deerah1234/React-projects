import React, { useState } from "react";

function App() {
    // initialize state for the temperatureValue change
    const [temperatureValue, setTemperatureValue] = useState(10);
    // initialize state for the temperatureColor change
    const [temperatureColor, setTemeperatureColor] = useState("cold");

    /* NOTE - 
      handleIncrement: if the button is clicked, the temperatureValue changes 
      and the value can't exceed 0.
      Also, the temperatureColor change to "hot" if the temperatureValue greater than or equal to 15℃.
    */
    const handleIncrement = () => {
        if (temperatureValue === 30) {
            return;
        }

        const newTemperature = temperatureValue + 1;

        if (newTemperature >= 15) {
            setTemeperatureColor((prevState) => "hot");
        }

        setTemperatureValue((prevState) => newTemperature);
    };

    const handleDecrement = () => {
        if (temperatureValue === 0) {
            return;
        }

        const newTemperature = temperatureValue - 1;

        if (temperatureValue < 15) {
            setTemeperatureColor((prevState) => "cold");
        }

        setTemperatureValue((prevState) => newTemperature);
    };

    return (
        <div className="app-container">
            <div className="temperature-display-container ">
                <div className={`temperature-display ${temperatureColor}`}>
                    {temperatureValue}°C
                </div>
            </div>
            <div className="button-container">
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
            </div>
        </div>
    );
}

export default App;
