import React, { useEffect, useState } from 'react';

export default function NewsCardGrid() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/news') // Proxy varsa sadece `/api/news` de yazabilirsin
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error('Haberler alınamadı:', err));
  }, []);

  if (!news.length) {
    return <div className="text-center text-gray-500 py-10">Yükleniyor...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Günün Haberleri</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {news.map((item, idx) => (
          <div key={item._id || idx} className="bg-white rounded-lg shadow hover:shadow-md transition duration-300">
            <img
              src={`https://placehold.co/600x400/0074D9/fff?text=${encodeURIComponent(item.title || 'Haber')}`}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.summary}</p>
              <a
                href={item.url || '#'}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Devamını oku →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
