import { useState } from 'react';

export default function StickyAd({ position }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed top-0 ${position === 'left' ? 'left-0' : 'right-0'}
        h-screen w-24 bg-gray-100 shadow-lg flex flex-col items-center pt-4 z-50
      `}
    >
      <button
        onClick={() => setVisible(false)}
        className="p-1 rounded hover:bg-gray-300 transition bg-white border border-gray-400 text-gray-700 font-bold absolute top-2 right-2 z-50"
        aria-label="Close Ad"
        style={{ boxShadow: '0 2px 6px rgba(219, 10, 10, 0.15)' }}
      >
        &#10005;
      </button>
      <a href="/ads" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full">
        <img
          src="https://placehold.co/80x300/0074D9/fff?text=Reklam"
          alt="Advertisement"
          className="object-contain max-h-full"
          style={{ width: '80px', height: '300px' }}
        />
      </a>
    </div>
  );
}
