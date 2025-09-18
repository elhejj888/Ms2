// utils/rssFeedUtils.js
// Utility functions for fetching and parsing RSS feeds in the browser (frontend-only)

/**
 * Strip HTML tags from text and clean up the content
 */
function stripHtmlTags(html) {
  if (!html) return '';
  
  // Create a temporary DOM element to parse HTML
  const temp = document.createElement('div');
  temp.innerHTML = html;
  
  // Get text content and clean it up
  let text = temp.textContent || temp.innerText || '';
  
  // Clean up extra whitespace and line breaks
  text = text.replace(/\s+/g, ' ').trim();
  
  // Remove common HTML entities
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");
  
  return text;
}

/**
 * Truncate text to a specified length with ellipsis
 */
function truncateText(text, maxLength = 200) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Fetch and parse an RSS/Atom feed from a given URL.
 * Returns a promise resolving to an array of articles [{title, link, pubDate, ...}]
 * Note: Many feeds may require a CORS proxy for browser access.
 */
export async function fetchRSSFeed(feedUrl, { corsProxy = null } = {}) {
  const url = corsProxy ? `${corsProxy}${encodeURIComponent(feedUrl)}` : feedUrl;
  const response = await fetch(url);
  const text = await response.text();
  const parser = new window.DOMParser();
  const xml = parser.parseFromString(text, 'text/xml');
  // RSS 2.0
  const items = Array.from(xml.querySelectorAll('item'));
  if (items.length > 0) {
    return items.map(item => {
      const rawDescription = item.querySelector('description')?.textContent || '';
      return {
        title: stripHtmlTags(item.querySelector('title')?.textContent || ''),
        link: item.querySelector('link')?.textContent || '',
        pubDate: item.querySelector('pubDate')?.textContent || '',
        description: truncateText(stripHtmlTags(rawDescription), 300),
        guid: item.querySelector('guid')?.textContent || ''
      };
    });
  }
  // Atom
  const entries = Array.from(xml.querySelectorAll('entry'));
  if (entries.length > 0) {
    return entries.map(entry => {
      const rawDescription = entry.querySelector('summary')?.textContent || entry.querySelector('content')?.textContent || '';
      return {
        title: stripHtmlTags(entry.querySelector('title')?.textContent || ''),
        link: entry.querySelector('link')?.getAttribute('href') || '',
        pubDate: entry.querySelector('updated')?.textContent || '',
        description: truncateText(stripHtmlTags(rawDescription), 300),
        id: entry.querySelector('id')?.textContent || ''
      };
    });
  }
  return [];
}

/**
 * Example CORS proxy: 'https://api.allorigins.win/raw?url='
 * Use null for no proxy (if feed supports CORS)
 */
export const DEFAULT_CORS_PROXY = 'https://api.allorigins.win/raw?url=';
