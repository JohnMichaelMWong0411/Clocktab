import React, { useState, useEffect } from 'react';
import './Clock.css'

function Clock() {
  const [time, setTime] = useState(new Date());
  const [is24HourFormat, setIs24HourFormat] = useState(false);
  const [showSeconds, setShowSeconds] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const toggleFormat = () => {
    setIs24HourFormat(!is24HourFormat);
  };

  const toggleSeconds = () => {
    setShowSeconds(!showSeconds);
  };

  return (
    <div className="clock-container">
      <h1>Current Time:</h1>
      <h2 className="time-display">
        {time.toLocaleTimeString([], {
          hour12: !is24HourFormat,
          hour: 'numeric',
          minute: 'numeric',
          second: showSeconds ? 'numeric' : undefined,
        })}
      </h2>
      <button className="button" onClick={toggleFormat}>
        {is24HourFormat ? '24-hour' : '12-hour'}
      </button>
      <button className="button" onClick={toggleSeconds}>
        {showSeconds ? 'Hide' : 'Show'} Seconds
      </button>
    </div>
  );
}

export default Clock;
