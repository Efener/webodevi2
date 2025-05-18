import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function WeatherDetail() {
  const { day } = useParams();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/weather')
      .then(res => res.json())
      .then(data => {
        const found = data.find(w => w.day === day);
        setWeather(found);
      });
  }, [day]);

  if (!weather) return <div>Yükleniyor...</div>;

  return (
    <div className="bg-white shadow rounded-lg p-8 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{weather.day} Detaylı Hava Durumu</h2>
      <p className="text-lg">Sıcaklık: {weather.temp}</p>
      <p className="text-lg">Durum: {weather.condition}</p>
    </div>
  );
} 