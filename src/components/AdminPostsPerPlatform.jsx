import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

export default function AdminPostsPerPlatform({ apiBaseUrl }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
    async function load() {
      try {
        setLoading(true);
        const params = [];
        if (startDate) params.push(`start_date=${encodeURIComponent(startDate)}`);
        if (endDate) params.push(`end_date=${encodeURIComponent(endDate)}`);
        const qs = params.length ? `?${params.join('&')}` : '';
        const res = await fetch(`${apiBaseUrl}/api/analytics/platform-usage${qs}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || 'Failed to fetch');
        setStats(json || null);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [apiBaseUrl, startDate, endDate]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  const platformStats = stats?.platform_statistics || {};
  const dataArr = Object.entries(platformStats)
    .filter(([platform]) => platform !== 'tiktok')
    .map(([platform, s]) => ({
      platform,
      total_posts: s.total_posts ?? 0,
      success_rate: s.success_rate ?? 0,
      usage_percentage: s.usage_percentage ?? 0,
    }));

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Posts per Platform</h2>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>

        {dataArr.length === 0 ? (
          <p className="text-gray-500">No data</p>
        ) : (
          <>
            <div className="h-80 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataArr} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="platform" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="total_posts" name="Total Posts" fill="#60a5fa" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-2">Platform</th>
                    <th className="text-right px-4 py-2">Total Posts</th>
                    <th className="text-right px-4 py-2">Success Rate</th>
                    <th className="text-right px-4 py-2">Usage %</th>
                  </tr>
                </thead>
                <tbody>
                  {dataArr.map((row) => (
                    <tr key={row.platform} className="border-t">
                      <td className="px-4 py-2 capitalize">{row.platform}</td>
                      <td className="px-4 py-2 text-right font-semibold">{row.total_posts}</td>
                      <td className="px-4 py-2 text-right">{row.success_rate}%</td>
                      <td className="px-4 py-2 text-right">{row.usage_percentage}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

