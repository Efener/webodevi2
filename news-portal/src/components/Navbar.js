import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Menü - büyük ekran */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded font-bold">Anasayfa</Link>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">Son Dakika</a>
            
            <div className="relative">
              <button
                onClick={() => toggleSubMenu('gundem')}
                className="hover:bg-blue-700 px-3 py-2 rounded flex items-center"
              >
                Gündem
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    openSubMenu === 'gundem' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openSubMenu === 'gundem' && (
                <div className="absolute left-0 mt-1 w-40 bg-blue-700 rounded shadow-lg z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-blue-500">Yerel Haberler</a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-500">Politika</a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-500">Toplum</a>
                </div>
              )}
            </div>

            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">Ekonomi</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">Dünya</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">Günün İçinden</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">Spor</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">Hayat</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">Magazin</a>

            <div className="relative">
              <button
                onClick={() => toggleSubMenu('finans')}
                className="hover:bg-blue-700 px-3 py-2 rounded flex items-center"
              >
                Finans
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    openSubMenu === 'finans' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openSubMenu === 'finans' && (
                <div className="absolute left-0 mt-1 w-40 bg-blue-700 rounded shadow-lg z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-blue-500">Döviz</a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-500">Borsa</a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-500">Kripto</a>
                </div>
              )}
            </div>

            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">Resmi İlanlar</a>
          </div>

          {/* Hamburger Menü Butonu - küçük ekran */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setOpenSubMenu(null);
              }}
              className="focus:outline-none"
              aria-label="Menüyü aç/kapa"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger Menü İçeriği */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pt-2 pb-4 space-y-2">
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-600">Son Dakika</a>

          <div>
            <button
              onClick={() => toggleSubMenu('gundem')}
              className="w-full text-left px-3 py-2 rounded hover:bg-blue-600 flex justify-between items-center"
            >
              Gündem
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  openSubMenu === 'gundem' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {openSubMenu === 'gundem' && (
              <div className="pl-4 bg-blue-600">
                <a href="#" className="block px-4 py-2 hover:bg-blue-500">Yerel Haberler</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-500">Politika</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-500">Toplum</a>
              </div>
            )}
          </div>

          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-600">Yazarlar</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-600">Ekonomi</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-600">Dünya</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-600">Günün İçinden</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-600">Spor</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-600">Hayat</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-600">Magazin</a>

          <div>
            <button
              onClick={() => toggleSubMenu('finans')}
              className="w-full text-left px-3 py-2 rounded hover:bg-blue-600 flex justify-between items-center"
            >
              Finans
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  openSubMenu === 'finans' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {openSubMenu === 'finans' && (
              <div className="pl-4 bg-blue-600">
                <a href="#" className="block px-4 py-2 hover:bg-blue-500">Döviz</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-500">Borsa</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-500">Kripto</a>
              </div>
            )}
          </div>

          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-600">Resmi İlanlar</a>
        </div>
      )}
    </nav>
  );
}
