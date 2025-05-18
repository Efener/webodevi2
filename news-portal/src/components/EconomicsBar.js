import React, { useEffect, useState } from 'react';

export default function EconomicsBar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/finance')
      .then(res => res.json())
      .then(fetchedData => setData(fetchedData))
      .catch(err => {
        console.error('Finance API fetch error:', err);
      });
  }, []);

  return (
    <div className="bg-gray-900 text-white text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 overflow-x-auto">
        {data.length === 0 ? (
          <p>Yükleniyor...</p>
        ) : (
          data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 mx-2 whitespace-nowrap">
              <span className="font-semibold">{item.title}</span>
              <span>{item.value}</span>
              <span className={item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                {item.change}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
