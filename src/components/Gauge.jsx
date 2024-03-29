import React, { useState } from "react";
import "./Gauge.css";

const Gauge = () => {
  const [humidityValue, setHumidityValue] = useState(52.2);
  const [temperatureValue, setTemperatureValue] = useState(9.6);
  const [gasValue, setGasValue] = useState(233.43);

  const [humidityMin, setHumidityMin] = useState(0);
  const [humidityMax, setHumidityMax] = useState(400);
  const [humidityThreshold, setHumidityThreshold] = useState(60);

  const [temperatureMin, setTemperatureMin] = useState(0);
  const [temperatureMax, setTemperatureMax] = useState(120);
  const [temperatureThreshold, setTemperatureThreshold] = useState(9);

  const [gasMin, setGasMin] = useState(0);
  const [gasMax, setGasMax] = useState(10000);
  const [gasThreshold, setGasThreshold] = useState(300);

  const gaugeColor = (value, min, max, threshold) => {
    if (value < min || value > max) {
      return "gray"; // Outside the specified range
    }
    return value >= threshold ? "red" : "green";
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <center>
          <div className="row">
            <div className="col-md-4">
              <div className="gauge">
                <div className="gauge__body">
                  <div
                    className="gauge__fill"
                    style={{
                      transform: `rotate(${
                        ((humidityValue - humidityMin) /
                          (humidityMax - humidityMin)) *
                        2
                      }turn)`,
                      background: gaugeColor(
                        humidityValue,
                        humidityMin,
                        humidityMax,
                        humidityThreshold
                      ),
                    }}
                  ></div>
                  <div className="gauge__cover">{`${humidityValue}%`}</div>
                </div>
                <span>Humidity</span>
              </div>
            </div>
            <br />

            <div className="col-md-4">
              <div className="gauge">
                <div className="gauge__body">
                  <div
                    className="gauge__fill"
                    style={{
                      transform: `rotate(${
                        ((temperatureValue - temperatureMin) /
                          (temperatureMax - temperatureMin)) *
                        2
                      }turn)`,
                      background: gaugeColor(
                        temperatureValue,
                        temperatureMin,
                        temperatureMax,
                        temperatureThreshold
                      ),
                    }}
                  ></div>
                  <div className="gauge__cover">{`${temperatureValue}°C`}</div>
                </div>
                <span>Temperature</span>
              </div>
            </div>
            <br />

            <div className="col-md-4">
              <div className="gauge">
                <div className="gauge__body">
                  <div
                    className="gauge__fill"
                    style={{
                      transform: `rotate(${
                        ((gasValue - gasMin) / (gasMax - gasMin)) * 2
                      }turn)`,
                      background: gaugeColor(
                        gasValue,
                        gasMin,
                        gasMax,
                        gasThreshold
                      ),
                    }}
                  ></div>
                  <div className="gauge__cover">{`${gasValue} ppm`}</div>
                </div>
                <span>Gas</span>
              </div>
            </div>
            <br />
          </div>
        </center>
      </div>
    </>
  );
};

export default Gauge;
