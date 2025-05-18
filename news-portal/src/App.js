import { Routes, Route, useLocation } from 'react-router-dom';
import StickyAd from './components/StickyAds';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import EconomicsBar from './components/EconomicsBar';
import NewsCardGrid from './components/NewsCardGrid';
import WeatherCard from './components/WeatherCard';
import HistoryDropdown from './components/HistoryDropdown';
import NewsDetail from './components/NewsDetail';
import WeatherDetail from './components/WeatherDetail';
import ReklamSayfasi from './components/ReklamSayfasi';


function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
      <StickyAd position="left" />
      <StickyAd position="right" />
      <div>
        <Navbar />
        <HistoryDropdown />
        <EconomicsBar />
        <Routes>
          <Route path="/" element={
            <>
              <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Slider />
                </div>
                <div className="md:col-span-1">
                  <WeatherCard />
                </div>
              </div>
              <NewsCardGrid />
            </>
          } />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/ads" element={<ReklamSayfasi />} />
        </Routes>
        <main className="pt-16 max-w-7xl mx-auto px-6">
          {/* İçerikler buraya */}
        </main>
      </div>
    </>
  );
}

export default App;
