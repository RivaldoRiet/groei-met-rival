// Utility function to automatically assign appropriate icons based on service type
export function getServiceIcon(title: string, unit: string): string {
  const titleLower = title.toLowerCase();
  
  // Views services
  if (titleLower.includes('views') || titleLower.includes('watch') || unit === 'views') {
    return 'Eye';
  }
  
  // Likes services
  if (titleLower.includes('likes') || titleLower.includes('like') || unit === 'likes') {
    return 'Heart';
  }
  
  // Followers/Subscribers services
  if (titleLower.includes('followers') || titleLower.includes('subscriber') || 
      titleLower.includes('members') || unit === 'followers' || unit === 'subscribers' || unit === 'members') {
    return 'Users';
  }
  
  // Comments services
  if (titleLower.includes('comments') || titleLower.includes('comment') || unit === 'comments') {
    return 'MessageCircle';
  }
  
  // Shares/Retweets services
  if (titleLower.includes('shares') || titleLower.includes('share') || 
      titleLower.includes('retweets') || titleLower.includes('retweet') || unit === 'shares' || unit === 'retweets') {
    return 'Share';
  }
  
  // Saves/Bookmarks services
  if (titleLower.includes('saves') || titleLower.includes('save') || 
      titleLower.includes('bookmark') || unit === 'saves') {
    return 'Bookmark';
  }
  
  // Music/Audio services
  if (titleLower.includes('plays') || titleLower.includes('streams') || 
      titleLower.includes('spotify') || titleLower.includes('apple music') || 
      titleLower.includes('music') || unit === 'plays' || unit === 'streams') {
    return 'Play';
  }
  
  // Reactions services
  if (titleLower.includes('reaction') || titleLower.includes('emoji') || 
      titleLower.includes('👍') || titleLower.includes('❤️') || titleLower.includes('🔥')) {
    if (titleLower.includes('positive') || titleLower.includes('👍') || titleLower.includes('❤️')) {
      return 'Heart';
    }
    if (titleLower.includes('negative') || titleLower.includes('👎')) {
      return 'ThumbsDown';
    }
    if (titleLower.includes('fire') || titleLower.includes('🔥')) {
      return 'Flame';
    }
    return 'Heart';
  }
  
  // Upvotes/Downvotes
  if (titleLower.includes('upvote') || titleLower.includes('vote') && !titleLower.includes('down')) {
    return 'ArrowUp';
  }
  if (titleLower.includes('downvote')) {
    return 'ThumbsDown';
  }
  
  // Reviews
  if (titleLower.includes('review') || unit === 'reviews') {
    return 'Star';
  }
  
  // Live/Stream services
  if (titleLower.includes('live') || titleLower.includes('stream')) {
    return 'Eye';
  }
  
  // Premium/Special services
  if (titleLower.includes('premium') || titleLower.includes('verified') || titleLower.includes('influencer')) {
    return 'Crown';
  }
  
  // Auto/Automatic services
  if (titleLower.includes('auto') || titleLower.includes('automatic')) {
    return 'Zap';
  }
  
  // Default fallback
  return 'Eye';
}