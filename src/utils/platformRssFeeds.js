// utils/platformRssFeeds.js
// Centralized config for RSS/Atom feeds for each platform (public feeds only)

export const PLATFORM_RSS_FEEDS = {
  x: [
    // Reliable RSS feeds for Twitter/X content
    'https://feeds.feedburner.com/TechCrunch', // Tech news popular on Twitter
    'https://rss.cnn.com/rss/edition.rss', // Breaking news
    'https://feeds.bbci.co.uk/news/technology/rss.xml', // BBC Tech
    // Note: Twitter/X doesn't have native RSS feeds, using general news feeds
  ],
  instagram: [
    // Reliable RSS feeds for Instagram-style content
    'https://feeds.feedburner.com/TechCrunch', // Visual tech content
    'https://rss.cnn.com/rss/edition.rss', // News with images
    'https://feeds.bbci.co.uk/news/rss.xml', // BBC News
    // Note: Instagram doesn't have native RSS feeds, using general content feeds
  ],
  facebook: [
    // Reliable RSS feeds for Facebook-style content
    'https://feeds.feedburner.com/TechCrunch', // Shareable tech content
    'https://rss.cnn.com/rss/edition.rss', // News articles
    'https://feeds.bbci.co.uk/news/rss.xml', // BBC News
    // Note: Facebook doesn't have native RSS feeds, using general content feeds
  ],
  reddit: [
    // Native subreddit feed
    'https://www.reddit.com/r/news/.rss',
    // 'https://www.reddit.com/user/spez/.rss',
  ],
  pinterest: [
    // Alternative RSS feeds for Pinterest-related content
    'https://feeds.feedburner.com/TechCrunch', // Tech news that Pinterest users often share
    'https://rss.cnn.com/rss/edition.rss', // General news
    'https://feeds.bbci.co.uk/news/rss.xml', // BBC News
    // Note: Pinterest doesn't have native RSS feeds, so we use general content feeds
    // Users can add their own Pinterest-related RSS feeds in the custom input
  ],
  youtube: [
    // Native YouTube channel feed (replace CHANNEL_ID)
    'https://www.youtube.com/feeds/videos.xml?channel_id=UC_x5XG1OV2P6uZZ5FSM9Ttw', // Google Developers
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCBJycsmduvYEL83R_U4JriQ', // Marques Brownlee
  ],
};
