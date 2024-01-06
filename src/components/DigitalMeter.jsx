import React, { useState, useEffect } from "react";

import "./DigitalMeter.css";

const DigitalMeter = () => {
  const [humidity, setHumidity] = useState(50);
  const [temperature, setTemperature] = useState(25);
  const [gas, setGas] = useState(500);

  const [humidityThreshold, setHumidityThreshold] = useState(70);
  const [temperatureThreshold, setTemperatureThreshold] = useState(30);
  const [gasThreshold, setGasThreshold] = useState(800);

  useEffect(() => {
    updateMeterColor("humidityMeter", humidity, humidityThreshold);
    updateMeterColor("temperatureMeter", temperature, temperatureThreshold);
    updateMeterColor("gasMeter", gas, gasThreshold);
  }, [
    humidity,
    temperature,
    gas,
    humidityThreshold,
    temperatureThreshold,
    gasThreshold,
  ]);

  const updateMeterColor = (meterId, reading, threshold) => {
    const meter = document.getElementById(meterId);
    if (reading > threshold) {
      meter.classList.remove("bg-success");
      meter.classList.add("bg-danger");
    } else {
      meter.classList.remove("bg-danger");
      meter.classList.add("bg-success");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Humidity Sensor</h5>
              <div className="meter" id="humidityMeter">
                <span>{humidity}%</span>
              </div>
              <label>Threshold:</label>
              <input
                type="number"
                value={humidityThreshold}
                onChange={(e) => setHumidityThreshold(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Temperature Sensor</h5>
              <div className="meter" id="temperatureMeter">
                <span>{temperature}°C</span>
              </div>
              <label>Threshold:</label>
              <input
                type="number"
                value={temperatureThreshold}
                onChange={(e) => setTemperatureThreshold(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Gas Sensor</h5>
              <div className="meter" id="gasMeter">
                <span>{gas} ppm</span>
              </div>
              <label>Threshold:</label>
              <input
                type="number"
                value={gasThreshold}
                onChange={(e) => setGasThreshold(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMeter;
