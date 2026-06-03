import { useState } from "react";
import "./App.css";

const city = "Berlin, Germany";
const date = "Tuesday, Aug 5, 2025";
const condition = "Partly Cloudy";
const temperature = 20;
const feelsLike = 18;
const humidity = 62;
const wind = "14 km/h";
const precip = "0.4 mm";

const forecastDays = [
  { day: "Today",     icon: "⛅", high: 20, low: 13 },
  { day: "Wednesday", icon: "🌧️", high: 17, low: 11 },
  { day: "Thursday",  icon: "☁️",  high: 15, low: 10 },
  { day: "Friday",    icon: "🌤️", high: 19, low: 12 },
  { day: "Saturday",  icon: "☀️",  high: 23, low: 14 },
  { day: "Sunday",    icon: "🌦️", high: 18, low: 11 },
  { day: "Monday",    icon: "⛅", high: 21, low: 13 },
];

const hourlyData = {
  Tuesday:   [{ time: "12 PM", icon: "⛅", temp: 19 }, { time: "1 PM", icon: "⛅", temp: 20 }, { time: "2 PM", icon: "🌤️", temp: 20 }, { time: "3 PM", icon: "☁️", temp: 20 }, { time: "4 PM", icon: "🌦️", temp: 20 }, { time: "5 PM", icon: "🌦️", temp: 20 }, { time: "6 PM", icon: "🌧️", temp: 18 }, { time: "7 PM", icon: "🌧️", temp: 17 }],
  Wednesday: [{ time: "9 AM",  icon: "🌧️", temp: 13 }, { time: "10 AM", icon: "🌧️", temp: 14 }, { time: "11 AM", icon: "🌦️", temp: 15 }, { time: "12 PM", icon: "☁️", temp: 16 }, { time: "1 PM", icon: "☁️", temp: 17 }],
  Thursday:  [{ time: "9 AM",  icon: "☁️",  temp: 11 }, { time: "10 AM", icon: "☁️", temp: 12 }, { time: "12 PM", icon: "⛅", temp: 14 }, { time: "1 PM", icon: "⛅", temp: 15 }],
  Friday:    [{ time: "9 AM",  icon: "🌤️", temp: 13 }, { time: "10 AM", icon: "☀️", temp: 15 }, { time: "12 PM", icon: "☀️", temp: 18 }, { time: "2 PM", icon: "⛅", temp: 19 }],
  Saturday:  [{ time: "9 AM",  icon: "☀️",  temp: 15 }, { time: "11 AM", icon: "☀️", temp: 19 }, { time: "1 PM", icon: "☀️", temp: 23 }, { time: "3 PM", icon: "🌤️", temp: 22 }],
  Sunday:    [{ time: "10 AM", icon: "🌦️", temp: 13 }, { time: "12 PM", icon: "🌧️", temp: 15 }, { time: "2 PM", icon: "⛅", temp: 17 }],
  Monday:    [{ time: "9 AM",  icon: "⛅",  temp: 14 }, { time: "11 AM", icon: "🌤️", temp: 17 }, { time: "1 PM", icon: "⛅", temp: 21 }],
};

export default function App() {
  const [selectedDay, setSelectedDay] = useState("Tuesday");
  const [tempUnit, setTempUnit] = useState("C");
  const [windUnit, setWindUnit] = useState("kmh");
  const [precipUnit, setPrecipUnit] = useState("mm");
  const [unitsOpen, setUnitsOpen] = useState(false);

  const hours = hourlyData[selectedDay];

  return (
    <div className="app">

      {/* Header */}
      <div className="header">
        <div className="logo">
          🌤️ Weather Now
        </div>

        {/* Units dropdown */}
        <div className="units-wrapper">
          <button className="units-btn" onClick={() => setUnitsOpen(!unitsOpen)}>
            ⚙ Units ▾
          </button>

          {unitsOpen && (
            <div className="units-dropdown">

              <p>TEMPERATURE</p>
              <div className="toggle-group">
                <button className={`toggle-btn ${tempUnit === "C" ? "active" : ""}`} onClick={() => setTempUnit("C")}>°C</button>
                <button className={`toggle-btn ${tempUnit === "F" ? "active" : ""}`} onClick={() => setTempUnit("F")}>°F</button>
              </div>

              <p>WIND SPEED</p>
              <div className="toggle-group">
                <button className={`toggle-btn ${windUnit === "kmh" ? "active" : ""}`} onClick={() => setWindUnit("kmh")}>km/h</button>
                <button className={`toggle-btn ${windUnit === "mph" ? "active" : ""}`} onClick={() => setWindUnit("mph")}>mph</button>
              </div>

              <p>PRECIPITATION</p>
              <div className="toggle-group" style={{ marginBottom: 0 }}>
                <button className={`toggle-btn ${precipUnit === "mm" ? "active" : ""}`} onClick={() => setPrecipUnit("mm")}>mm</button>
                <button className={`toggle-btn ${precipUnit === "in" ? "active" : ""}`} onClick={() => setPrecipUnit("in")}>in</button>
              </div>

            </div>
          )}
        </div>
      </div>

      {/* Search section */}
      <div className="search-section">
        <h1>How's the sky looking today?</h1>
        <div className="search-row">
          <input type="text" placeholder="Search for a place..." className="search-input" />
          <button className="search-btn">Search</button>
        </div>
      </div>

      {/* Main grid */}
      <div className="main-grid">

        {/* Left side */}
        <div className="left-col">

          {/* Big weather card */}
          <div className="weather-card">
            <div>
              <h2>{city}</h2>
              <p className="date">{date}</p>
              <p className="condition">{condition}</p>
            </div>
            <div className="weather-right">
              <span className="weather-icon">⛅</span>
              <span className="temperature">{temperature}°</span>
            </div>
          </div>

          {/* 4 metric boxes */}
          <div className="metrics-grid">

            <div className="metric-card">
              <div className="metric-icon">🌡️</div>
              <div className="metric-label">FEELS LIKE</div>
              <div className="metric-value">{feelsLike}°{tempUnit}</div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">💧</div>
              <div className="metric-label">HUMIDITY</div>
              <div className="metric-value">{humidity}%</div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">💨</div>
              <div className="metric-label">WIND</div>
              <div className="metric-value">{wind}</div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">🌧️</div>
              <div className="metric-label">PRECIP</div>
              <div className="metric-value">{precip}</div>
            </div>

          </div>

          {/* 7-day forecast */}
          <div className="forecast-card">
            <p className="section-title">7-DAY FORECAST</p>
            {forecastDays.map((item) => (
              <div key={item.day} className="forecast-row">
                <span className="forecast-day">{item.day}</span>
                <span className="forecast-icon">{item.icon}</span>
                <div className="forecast-temps">
                  <span className="temp-high">{item.high}°</span>
                  <span className="temp-low">{item.low}°</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right side - hourly forecast */}
        <div className="hourly-card">

          <div className="hourly-header">
            <span>Hourly forecast</span>
            <select
              className="day-select"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              {Object.keys(hourlyData).map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>

          {hours.map((h) => (
            <div key={h.time} className="hourly-row">
              <span className="hourly-time">{h.time}</span>
              <span className="hourly-icon">{h.icon}</span>
              <span className="hourly-temp">{h.temp}°</span>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}