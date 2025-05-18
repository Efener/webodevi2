import React, { useEffect, useState } from 'react';

export default function WeatherCard() {
  const [weatherList, setWeatherList] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/weather')
      .then(res => res.json())
      .then(data => setWeatherList(data))
      .catch(err => console.error('Hava durumu fetch hatası:', err));
  }, []);

  const getIconUrl = (condition) => {
    if (condition.includes('Güneş')) return 'https://openweathermap.org/img/wn/01d@2x.png';
    if (condition.includes('Bulut')) return 'https://openweathermap.org/img/wn/03d@2x.png';
    if (condition.includes('Yağmur')) return 'https://openweathermap.org/img/wn/09d@2x.png';
    return 'https://openweathermap.org/img/wn/50d@2x.png';
  };

  if (!weatherList.length) return <div>Yükleniyor...</div>;
  const weather = weatherList[selected];

  return (
    <div className="bg-white shadow rounded-lg p-4 max-w-xs w-full mx-auto">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-lg font-bold">İstanbul</h3>
          <p className="text-sm text-gray-600">{weather.condition}</p>
        </div>
        <img src={getIconUrl(weather.condition)} alt={weather.condition} className="w-12 h-12" />
      </div>
      <div className="mt-2 text-3xl font-semibold text-gray-800">
        {parseInt(weather.temp)}°C
      </div>
      <div className="flex justify-between mt-4">
        {weatherList.map((w, idx) => (
          <button
            key={w.day}
            className={`px-2 py-1 rounded ${selected === idx ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelected(idx)}
          >
            {w.day.slice(0,3)}
          </button>
        ))}
      </div>
    </div>
  );
}
