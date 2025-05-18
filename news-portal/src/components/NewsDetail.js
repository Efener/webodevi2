import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../slices/historySlice';
import { useLocation, useParams } from 'react-router-dom';

export default function NewsDetail() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const [heading, setHeading] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/slidernews')
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item._id === id);
        setHeading(found ? found.heading : 'Haber Detayı');
        dispatch(addToHistory({ path: location.pathname, title: found ? found.heading : 'Haber Detayı' }));
      });
  }, [dispatch, location, id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-4 text-center">{heading}</h1>
      <p className="text-lg text-center">Bu bir haber açıklamasıdır.</p>
    </div>
  );
}
