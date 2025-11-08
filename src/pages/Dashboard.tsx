import React, { useEffect, useState } from 'react';
import { fetchJSON } from '../api/client';

interface AnalyticsData {
  users: number;
  completions: number;
  date: string;
}

export const Dashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData[] | null>(null);

  useEffect(() => {
    (async () => {
      const result = await fetchJSON('/api/analytics');
      setData(result);
    })();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Welcome to the Notalyn MVP Dashboard. Live stats from backend below:</p>
      {!data && <p>Loading analytics...</p>}
      {data && (
        <table style={{ borderCollapse: 'collapse', marginTop: '1rem', width: '100%' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>
              <th>Date</th>
              <th>Users</th>
              <th>Completions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                <td>{row.date}</td>
                <td>{row.users}</td>
                <td>{row.completions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
