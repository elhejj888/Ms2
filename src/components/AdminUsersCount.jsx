import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AdminUsersCount({ apiBaseUrl }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [metrics, setMetrics] = useState(null);
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
        const res = await fetch(`${apiBaseUrl}/api/analytics/user-engagement${qs}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to fetch');
        setMetrics(data || null);
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
        <h2 className="text-xl font-semibold mb-4">User Engagement Overview</h2>

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

        {metrics ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="border rounded-lg p-4">
                <div className="text-sm text-gray-500">Total Registered Users</div>
                <div className="text-3xl font-bold text-blue-600">{metrics.total_registered_users ?? 0}</div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-gray-500">Active Users</div>
                <div className="text-3xl font-bold text-emerald-600">{metrics.active_users ?? 0}</div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-gray-500">Activation Rate</div>
                <div className="text-3xl font-bold text-indigo-600">{metrics.activation_rate ?? 0}%</div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-gray-500">Avg Posts / Active User</div>
                <div className="text-3xl font-bold text-purple-600">{metrics.avg_posts_per_active_user ?? 0}</div>
              </div>
            </div>

            <div className="lg:col-span-2 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'High', value: metrics.engagement_levels?.high_engagement ?? 0 },
                      { name: 'Medium', value: metrics.engagement_levels?.medium_engagement ?? 0 },
                      { name: 'Low', value: metrics.engagement_levels?.low_engagement ?? 0 },
                      { name: 'Inactive', value: metrics.inactive_users ?? 0 },
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    dataKey="value"
                    label
                  >
                    {["#10b981", "#60a5fa", "#a78bfa", "#94a3b8"].map((color, idx) => (
                      <Cell key={`cell-${idx}`} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No data available.</p>
        )}
      </div>
    </div>
  );
}

