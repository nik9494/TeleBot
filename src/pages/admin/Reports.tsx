import React, { useEffect, useState } from 'react';

// Тип данных для отчётов
type Report = {
  id: number;
  date: string;
  title: string;
  details: string;
};

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]); // Состояние для списка отчётов
  const [isLoading, setIsLoading] = useState<boolean>(true); // Состояние загрузки
  const [error, setError] = useState<string | null>(null); // Состояние ошибок

  useEffect(() => {
    // Симуляция запроса на сервер
    const fetchReports = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Здесь можешь заменить на реальный API-запрос
        const simulatedResponse: Report[] = [
          { id: 1, date: '2024-12-01', title: 'Отчёт по продажам', details: '100 продаж' },
          { id: 2, date: '2024-11-30', title: 'Отчёт по доходам', details: '$5000 дохода' },
          { id: 3, date: '2024-11-29', title: 'Отчёт по пользователям', details: '200 новых пользователей' },
        ];

        // Симуляция задержки
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setReports(simulatedResponse);
      } catch (err) {
        setError('Не удалось загрузить отчёты. Попробуйте позже.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Отчёты</h1>
      {reports.length === 0 ? (
        <p className="text-gray-500">Нет доступных отчётов.</p>
      ) : (
        <table className="table-auto border-collapse border border-gray-200 w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Дата</th>
              <th className="border border-gray-300 px-4 py-2">Название отчёта</th>
              <th className="border border-gray-300 px-4 py-2">Детали</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td className="border border-gray-300 px-4 py-2">{report.date}</td>
                <td className="border border-gray-300 px-4 py-2">{report.title}</td>
                <td className="border border-gray-300 px-4 py-2">{report.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Reports;
