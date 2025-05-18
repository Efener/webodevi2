const mongoose = require('mongoose');
const Finance = require('./models/Finance');
const SliderNews = require('./models/SliderNews');
const NewsContent = require('./models/NewsContent');
const Weather = require('./models/Weather');

const mongoURI = "mongodb+srv://denzgg0:aa6jZ2I6qRvug4C1@cluster0.h3vunhn.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(async () => {
  console.log('MongoDB bağlantısı başarılı - seed başladı');

  await Finance.deleteMany({});
  await SliderNews.deleteMany({});
  await NewsContent.deleteMany({});
  await Weather.deleteMany({});

  await Finance.insertMany([
    { title: 'Dolar', url: '/finance/1', value: '31.45 ₺', change: '+0.15%' },
    { title: 'Altın', url: '/finance/2', value: '2.450 ₺', change: '+0.30%' },
    { title: 'Bitcoin', url: '/finance/3', value: '62,000 $', change: '-1.20%' },
  ]);

  await SliderNews.insertMany([
    { heading: 'Son Dakika Haber 1' },
    { heading: 'Son Dakika Haber 2' },
    { heading: 'Son Dakika Haber 3' },
    { heading: 'Son Dakika Haber 4' },
    { heading: 'Son Dakika Haber 5' },
    { heading: 'Son Dakika Haber 6' },
    { heading: 'Son Dakika Haber 7' },
    { heading: 'Son Dakika Haber 8' },
    { heading: 'Son Dakika Haber 9' },
    { heading: 'Son Dakika Haber 10' },
  ]);

  await NewsContent.insertMany([
    {title: 'Son Dakika Haber 1', content: 'Haber 1 içeriği...' },
    {title: 'Son Dakika Haber 2', content: 'Haber 2 içeriği...' },
    {title: 'Son Dakika Haber 3', content: 'Haber 3 içeriği...' },
  ]);

  await Weather.insertMany([
    { day: 'Pazartesi', temp: '20°C', condition: 'Güneşli' },
    { day: 'Salı', temp: '18°C', condition: 'Parçalı Bulutlu' },
    { day: 'Çarşamba', temp: '15°C', condition: 'Yağmurlu' },
    { day: 'Perşembe', temp: '17°C', condition: 'Güneşli' },
    { day: 'Cuma', temp: '19°C', condition: 'Az Bulutlu' },
  ]);

  console.log('Seed işlemi tamamlandı');
  process.exit();
})
.catch(err => {
  console.error('Seed hatası:', err);
  process.exit(1);
});
