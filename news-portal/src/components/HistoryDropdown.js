import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function HistoryDropdown() {
  const history = useSelector(state => state.history);

  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="bg-white shadow-lg rounded-md w-60">
        <div className="px-4 py-2 border-b font-bold">Geçmiş</div>
        <ul className="max-h-64 overflow-y-auto">
          {history.length === 0 ? (
            <li className="px-4 py-2 text-sm text-gray-500">Henüz ziyaret edilen haber yok.</li>
          ) : (
            history.map((item, index) => (
              <li key={index} className="px-4 py-2 border-b hover:bg-gray-100">
                <Link to={item.path} className="text-blue-600 text-sm">{item.title}</Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
