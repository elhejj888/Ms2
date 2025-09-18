// utils/useRssPolling.js
// React hook for polling RSS feeds for new articles (frontend-only)
import { useEffect, useRef, useState } from 'react';
import { fetchRSSFeed, DEFAULT_CORS_PROXY } from './rssFeedUtils';

/**
 * useRssPolling
 * @param {string} feedUrl - The RSS/Atom feed URL
 * @param {object} options - { intervalMs, corsProxy, onNewArticles }
 * @returns {object} { articles, lastChecked, error }
 */
export function useRssPolling(feedUrl, {
  intervalMs = 60000, // 1 min default
  corsProxy = DEFAULT_CORS_PROXY,
  onNewArticles = null
} = {}) {
  const [articles, setArticles] = useState([]);
  const [lastChecked, setLastChecked] = useState(null);
  const [error, setError] = useState(null);
  const lastGuidsRef = useRef(new Set());

  useEffect(() => {
    // Don't start polling if feedUrl is null/undefined
    if (!feedUrl) {
      setArticles([]);
      setLastChecked(null);
      setError(null);
      return;
    }

    let interval;
    let cancelled = false;
    async function poll() {
      try {
        const fetched = await fetchRSSFeed(feedUrl, { corsProxy });
        if (cancelled) return;
        setArticles(fetched);
        setLastChecked(new Date());
        // Detect new articles
        const newGuids = new Set(fetched.map(a => a.guid || a.link));
        const oldGuids = lastGuidsRef.current;
        const newArticles = fetched.filter(a => !oldGuids.has(a.guid || a.link));
        if (newArticles.length && onNewArticles) {
          onNewArticles(newArticles);
        }
        lastGuidsRef.current = newGuids;
        setError(null);
      } catch (e) {
        if (!cancelled) {
          setError(e.message || 'Error fetching RSS');
        }
      }
    }
    poll();
    interval = setInterval(poll, intervalMs);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [feedUrl, intervalMs, corsProxy]);
  return { articles, lastChecked, error };
}
