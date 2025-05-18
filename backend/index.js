const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path'); // ✨ React dosyalarını gösterebilmek için gerekli

const Finance = require('./models/Finance');
const SliderNews = require('./models/SliderNews');
const NewsContent = require('./models/NewsContent');
const Weather = require('./models/Weather');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB bağlantısı
const mongoURI = "mongodb+srv://denzgg0:aa6jZ2I6qRvug4C1@cluster0.h3vunhn.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB bağlantısı başarılı'))
.catch(err => console.error('MongoDB bağlantı hatası:', err));

// --- API ROTALARI ---
app.get('/api/finance', async (req, res) => {
  try {
    const financeData = await Finance.find();
    res.json(financeData);
  } catch (error) {
    res.status(500).json({ error: 'Veri alınırken hata oluştu' });
  }
});

app.get('/api/slidernews', async (req, res) => {
  try {
    const sliderNews = await SliderNews.find().limit(10);
    res.json(sliderNews);
  } catch (error) {
    res.status(500).json({ error: 'Veri alınırken hata oluştu' });
  }
});

app.get('/api/news/:id', async (req, res) => {
  try {
    const news = await NewsContent.findById(req.params.id);
    if (news) {
      res.json(news);
    } else {
      res.status(404).json({ error: 'Haber bulunamadı' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Veri alınırken hata oluştu' });
  }
});

app.get('/api/weather', async (req, res) => {
  try {
    const weatherData = await Weather.find().limit(5);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Veri alınırken hata oluştu' });
  }
});

app.get('/api/news', async (req, res) => {
  try {
    const news = await NewsContent.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Veri alınırken hata oluştu' });
  }
});

// --- REACT FRONTEND SERVE ---
app.use(express.static(path.join(__dirname, '../news-portal/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../news-portal/build', 'index.html'));
});

// --- SUNUCUYU BAŞLAT ---
app.listen(port, () => {
  console.log(`Backend server ${port} portunda çalışıyor`);
});
