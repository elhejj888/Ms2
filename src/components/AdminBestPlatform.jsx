import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function AdminBestPlatform({ apiBaseUrl }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [best, setBest] = useState(null);
  const [rankings, setRankings] = useState([]);
  const [hours, setHours] = useState([]);
  const [topics, setTopics] = useState([]);
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
        const res = await fetch(`${apiBaseUrl}/api/analytics/predictions${qs}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || 'Failed to fetch');
        const data = json || {};
        const bestPlatforms = Array.isArray(data.best_platforms) ? data.best_platforms : [];
        setRankings(bestPlatforms);
        setBest(bestPlatforms.length ? bestPlatforms[0]?.platform : null);
        setHours(Array.isArray(data.best_posting_hours) ? data.best_posting_hours : []);
        setTopics(Array.isArray(data.top_content_topics) ? data.top_content_topics : []);
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

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Best Platforms & Predictions</h2>

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

        <div className="mb-6">
          <div className="text-sm text-gray-500 mb-1">Top Recommended Platform</div>
          <span className="text-4xl font-bold text-emerald-600 capitalize">{best || 'N/A'}</span>
        </div>

        {/* Rankings Bar Chart */}
        <div className="h-80 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rankings} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="platform" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" name="Score" fill="#34d399" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Best Posting Hours */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Best Posting Hours</h3>
            {hours.length === 0 ? (
              <p className="text-gray-500">No data</p>
            ) : (
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left px-2 py-1">Hour</th>
                    <th className="text-right px-2 py-1">Posts</th>
                  </tr>
                </thead>
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.hour} className="border-t">
                      <td className="px-2 py-1">{String(h.hour).padStart(2, '0')}:00</td>
                      <td className="px-2 py-1 text-right">{h.posts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Top Content Topics */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Top Content Topics</h3>
            {topics.length === 0 ? (
              <p className="text-gray-500">No data</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <span key={t.term} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm">
                    {t.term} <span className="text-indigo-400">({t.count})</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

