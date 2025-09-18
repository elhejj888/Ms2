import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Zap, Hash, Calendar, Image, Link, Shield } from 'lucide-react';

const AIChatbot = ({ onFormFill, onPostSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState('platform_selection');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedXForm, setSelectedXForm] = useState(null);
  const [formData, setFormData] = useState({});
  const messagesEndRef = useRef(null);

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: '📷' },
    { id: 'facebook', name: 'Facebook', icon: '📚' },
    { id: 'x', name: 'X (Twitter)', icon: '𝕏' },
    { id: 'reddit', name: 'Reddit', icon: '🔴' },
    { id: 'pinterest', name: 'Pinterest', icon: '📌' },
    { id: 'youtube', name: 'YouTube Shorts', icon: '📺' }
  ];

  const xFormTypes = [
    { id: 'compose', name: 'Create a Post', description: 'Create a single tweet' },
    { id: 'threads', name: 'Create a Thread', description: 'Create a thread of connected tweets' },
    { id: 'schedule', name: 'Schedule a Post', description: 'Schedule a tweet for later' }
  ];

  // Gemini API key from environment or fallback
  const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY || 'AIzaSyBJYuCpi86B7fnquLReShxjwcwMERvXPbc';

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (content, isBot = true, isOptions = false, options = null) => {
    setMessages(prev => [...prev, {
      id: Date.now() + Math.random(), // Fix duplicate key issue
      content,
      isBot,
      timestamp: new Date(),
      isOptions,
      options
    }]);
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      addMessage("👋 Hi! I'm your AI assistant for social media posting. Which platform would you like to create a post for?", true, true, platforms);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReset = () => {
    setMessages([]);
    setCurrentStep('platform_selection');
    setSelectedPlatform(null);
    setSelectedXForm(null);
    setFormData({});
    addMessage("👋 Hi! I'm your AI assistant for social media posting. Which platform would you like to create a post for?", true, true, platforms);
  };

  const handleOptionSelect = (option) => {
    if (currentStep === 'platform_selection') {
      setSelectedPlatform(option);
      addMessage(`${option.icon} ${option.name}`, false);
      
      if (option.id === 'x') {
        setCurrentStep('x_form_selection');
        addMessage("Great! X has multiple posting options. What would you like to do?", true, true, xFormTypes);
      } else {
        setCurrentStep('content_generation');
        startContentGeneration(option.id);
      }
    } else if (currentStep === 'x_form_selection') {
      setSelectedXForm(option);
      addMessage(`${option.name}`, false);
      setCurrentStep('content_generation');
      startContentGeneration('x', option.id);
    } else if (currentStep === 'confirmation') {
      if (option.action === 'post') {
        addMessage('Post Now', false);
        addMessage('🚀 Perfect! Posting your content now...');
        if (onPostSubmit) {
          onPostSubmit(selectedPlatform.id, selectedXForm?.id);
        }
        // Reset after posting
        setTimeout(() => {
          handleReset();
        }, 2000);
      } else if (option.action === 'regenerate') {
        addMessage('Generate New Content', false);
        setCurrentStep('content_generation');
        startContentGeneration(selectedPlatform.id, selectedXForm?.id);
      } else if (option.action === 'reset') {
        addMessage('Start Over', false);
        handleReset();
      }
    }
  };

  const startContentGeneration = async (platformId, xFormType = null) => {
    addMessage("Perfect! Let me generate some engaging content for your post. What topic or theme would you like me to focus on?");
    setCurrentStep('awaiting_topic');
  };

  const generateContent = async (topic) => {
    try {
      setIsLoading(true);
      
      // Check if Gemini API key is available
      if (!GEMINI_API_KEY || GEMINI_API_KEY.trim() === '') {
        addMessage('❌ Gemini API key is not configured. Please add your API key to the environment file.');
        return;
      }
      
      console.log('Using Gemini API for content generation...');
      let data;
      let isFromAPI = false;
      
      try {
        data = await generateWithGemini(topic);
        isFromAPI = true;
        console.log('✅ Successfully generated content using Gemini API');
      } catch (error) {
        console.error('❌ Gemini API failed:', error);
        addMessage(`❌ Failed to generate content using Gemini API: ${error.message}. Please check your API key and try again.`);
        
        // Only use fallback as absolute last resort
        console.log('Using fallback test data as last resort...');
        data = generateTestData(topic);
        isFromAPI = false;
      }
      
      setFormData(data);
      fillFormWithData(data);
      
      const sourceMessage = isFromAPI 
        ? `✨ Great! I've generated AI-powered content for your ${selectedPlatform.name} post${selectedXForm ? ` (${selectedXForm.name})` : ''} using Gemini API.`
        : `⚠️ Using fallback content for your ${selectedPlatform.name} post${selectedXForm ? ` (${selectedXForm.name})` : ''} since API failed.`;
      
      addMessage(`${sourceMessage} The form has been filled automatically. Would you like to post it now or generate new content?`, true, true, [
        { id: 'post', name: 'Post Now', action: 'post' },
        { id: 'regenerate', name: 'Generate New Content', action: 'regenerate' },
        { id: 'reset', name: 'Start Over', action: 'reset' }
      ]);
      
      setCurrentStep('confirmation');
    } catch (error) {
      console.error('Content generation failed:', error);
      addMessage('❌ Sorry, I encountered an error generating content. Please try again or start over.');
    } finally {
      setIsLoading(false);
    }
  };

  const generateWithGemini = async (topic) => {
    const platform = selectedPlatform.id;
    const formType = selectedXForm?.id;
    
    let prompt = `Generate engaging social media content for ${platform}`;
    if (formType) prompt += ` (${formType})`;
    prompt += ` about "${topic}". `;
    
    // Platform-specific prompts
    switch (platform) {
      case 'x':
        if (formType === 'threads') {
          prompt += 'Create 3-5 connected tweets for a thread. Each tweet should be under 280 characters. Return ONLY the plain text tweets separated by line breaks, no labels, no formatting, no explanations.';
        } else {
          prompt += 'Create ONE engaging tweet under 280 characters with relevant hashtags. Return ONLY the plain tweet text, no labels, no formatting, no explanations.';
        }
        break;
      case 'instagram':
        prompt += 'Create ONE engaging Instagram caption with relevant hashtags. Return ONLY the plain caption text, no labels like **Caption:**, no formatting, no explanations.';
        break;
      case 'facebook':
        prompt += 'Create ONE engaging Facebook post with text content. Return ONLY the plain post text, no labels like **Text:**, no formatting, no explanations, no image suggestions.';
        break;
      case 'tiktok':
        prompt += 'Create ONE engaging TikTok caption with trending hashtags. Return ONLY the plain caption text, no labels like **Caption:**, no formatting, no explanations.';
        break;
      case 'reddit':
        prompt += 'Create ONE Reddit post. Return the title on first line and content on following lines, no labels like **Title:** or **Content:**, no formatting, no explanations.';
        break;
      case 'pinterest':
        prompt += 'Create ONE Pinterest pin. Return the title on first line and description on second line, no labels like **Title:** or **Description:**, no formatting, no explanations.';
        break;
      case 'youtube':
        prompt += 'Create ONE YouTube Shorts video content. Return the title on first line and description on following lines, no labels like **Title:** or **Description:**, no formatting, no explanations.';
        break;
    }
    
    console.log('Making Gemini API request with prompt:', prompt);
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 1,
          topP: 1,
          maxOutputTokens: 500,
        }
      })
    });
    
    console.log('Gemini API response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error response:', errorData);
      throw new Error(`API request failed with status ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
    }
    
    const data = await response.json();
    console.log('Gemini API response data:', data);
    
    // Validate response structure
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts || !data.candidates[0].content.parts[0]) {
      console.error('Invalid Gemini API response structure:', data);
      throw new Error('Invalid response structure from Gemini API');
    }
    
    const content = data.candidates[0].content.parts[0].text;
    
    if (!content || content.trim() === '') {
      throw new Error('Empty content received from Gemini API');
    }
    
    console.log('Generated content from Gemini:', content);
    
    return parseGeminiResponse(content, platform, formType);
  };

  const parseGeminiResponse = (content, platform, formType) => {
    // Parse Gemini response based on platform
    const lines = content.split('\n').filter(line => line.trim());
    
    switch (platform) {
      case 'x':
        if (formType === 'threads') {
          return {
            threadTweets: lines.slice(0, 5),
            hashtags: extractHashtags(content)
          };
        } else if (formType === 'schedule') {
          return {
            text: lines[0] || content.substring(0, 280),
            hashtags: extractHashtags(content),
            scheduled_time: getDefaultScheduleTime()
          };
        } else {
          return {
            text: lines[0] || content.substring(0, 280),
            hashtags: extractHashtags(content)
          };
        }
      case 'instagram':
        return { caption: content };
      case 'facebook':
        return {
          message: content,
          link: '',
          scheduled_time: ''
        };
      case 'tiktok':
        return {
          caption: content.substring(0, 150),
          hashtags: extractHashtags(content),
          privacy_level: 2
        };
      case 'reddit':
        return {
          subreddit_name: 'general',
          title: lines[0] || 'Interesting Topic',
          content: lines.slice(1).join('\n') || content,
          is_spoiler: false,
          nsfw: false
        };
      case 'pinterest':
        return {
          board_id: '',
          title: lines[0] || 'Amazing Pin',
          description: content,
          link: ''
        };
      case 'youtube':
        return {
          title: lines[0] || 'Amazing YouTube Short',
          description: lines.slice(1).join('\n') || content,
          link: '',
          privacyStatus: 'public'
        };
      default:
        return {};
    }
  };

  const generateTestData = (topic) => {
    const platform = selectedPlatform.id;
    const formType = selectedXForm?.id;
    
    switch (platform) {
      case 'x':
        if (formType === 'threads') {
          return {
            threadTweets: [
              `🧵 Let's talk about ${topic}! Here's what you need to know... 1/3`,
              `The key insights about ${topic} that everyone should understand... 2/3`,
              `In conclusion, ${topic} is definitely worth exploring further! What are your thoughts? 3/3 #${topic.replace(/\s+/g, '')}`
            ],
            hashtags: `#${topic.replace(/\s+/g, '')} #trending #discussion`
          };
        } else if (formType === 'schedule') {
          return {
            text: `Excited to share insights about ${topic}! 🚀 #${topic.replace(/\s+/g, '')} #trending`,
            hashtags: `#${topic.replace(/\s+/g, '')} #trending #scheduled`,
            scheduled_time: getDefaultScheduleTime()
          };
        } else {
          return {
            text: `Just discovered something amazing about ${topic}! 🔥 #${topic.replace(/\s+/g, '')} #trending`,
            hashtags: `#${topic.replace(/\s+/g, '')} #trending #amazing`
          };
        }
      case 'instagram':
        return {
          caption: `✨ Exploring the world of ${topic} today! 📸\n\nThere's so much to discover and share. What's your experience with ${topic}?\n\n#${topic.replace(/\s+/g, '')} #instagram #explore #amazing #daily #inspiration`
        };
      case 'facebook':
        return {
          message: `Hey everyone! 👋\n\nI wanted to share some thoughts about ${topic}. It's fascinating how much there is to learn and explore in this area.\n\nWhat are your experiences with ${topic}? I'd love to hear your thoughts in the comments!`,
          link: '',
          scheduled_time: ''
        };
      case 'tiktok':
        return {
          caption: `Amazing ${topic} content coming your way! 🎵✨`,
          hashtags: `#${topic.replace(/\s+/g, '')} #trending #fyp #viral #amazing`,
          privacy_level: 2
        };
      case 'reddit':
        return {
          subreddit_name: 'discussion',
          title: `What are your thoughts on ${topic}?`,
          content: `I've been exploring ${topic} lately and found it really interesting. There are so many different perspectives and approaches to consider.\n\nWhat has been your experience with ${topic}? Any tips or insights you'd like to share?\n\nLooking forward to hearing from the community!`,
          is_spoiler: false,
          nsfw: false
        };
      case 'pinterest':
        return {
          board_id: '',
          title: `Amazing ${topic} Ideas`,
          description: `Discover incredible ${topic} inspiration and ideas! Perfect for anyone interested in exploring ${topic} and finding new creative approaches.`,
          link: ''
        };
      case 'youtube':
        return {
          title: `Amazing ${topic} Content!`,
          description: `Check out this incredible ${topic} content! 🎥✨\n\nDiscover amazing insights and tips about ${topic}. Perfect for anyone looking to learn more!\n\n#${topic.replace(/\s+/g, '')} #YouTubeShorts #Amazing #Trending`,
          link: '',
          privacyStatus: 'public'
        };
      default:
        return {};
    }
  };

  const extractHashtags = (content) => {
    const hashtags = content.match(/#\w+/g);
    return hashtags ? hashtags.join(' ') : `#${selectedPlatform.name.toLowerCase()}`;
  };

  const getDefaultScheduleTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    return now.toISOString().slice(0, 16);
  };

  const fillFormWithData = (data) => {
    console.log('AIChatbot: Filling form with data:', data);
    setFormData(data);
    
    if (onFormFill) {
      console.log('AIChatbot: Calling onFormFill callback');
      onFormFill(selectedPlatform.id, selectedXForm?.id, data);
      
      // Add a success message after form filling
      setTimeout(() => {
        addMessage(
          "✅ Great! I've generated and filled the form with engaging content. Please review the form and let me know if you'd like me to post it!",
          true,
          true,
          [
            { id: 'post', name: 'Post Now', action: 'post' },
            { id: 'regenerate', name: 'Generate New Content', action: 'regenerate' },
            { id: 'reset', name: 'Start Over', action: 'reset' }
          ]
        );
        setCurrentStep('confirmation');
      }, 2000); // Wait for form filling to complete
    } else {
      console.error('AIChatbot: onFormFill callback not provided');
      addMessage("❌ Sorry, there was an issue filling the form. Please try again.");
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    
    const userMessage = inputValue.trim();
    setInputValue('');
    addMessage(userMessage, false);
    
    if (currentStep === 'awaiting_topic') {
      await generateContent(userMessage);
    } else if (currentStep === 'confirmation') {
      if (userMessage.toLowerCase().includes('yes') || userMessage.toLowerCase().includes('post')) {
        addMessage("🚀 Perfect! Posting your content now...");
        if (onPostSubmit) {
          onPostSubmit(selectedPlatform.id, selectedXForm?.id);
        }
        setTimeout(() => {
          addMessage("✅ Your post has been submitted successfully! Would you like to create another post?", true, true, [
            { id: 'new', name: 'Create New Post', action: 'reset' },
            { id: 'done', name: 'Done', action: 'close' }
          ]);
        }, 2000);
      } else {
        addMessage("No problem! Feel free to edit the form manually, or tell me what you'd like me to change about the content.");
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-5 rounded-3xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-500 z-50 border border-blue-400/20"
      >
        <div className="relative">
          <MessageCircle className="w-7 h-7" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-black/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-500/20 flex flex-col z-50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Bot className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <span className="font-bold text-lg">AI Social Assistant</span>
            <div className="text-xs text-blue-100 opacity-80">Powered by Gemini AI</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleReset}
            className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 group"
            title="New Conversation"
          >
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-lg -z-10"></div>
      </div>

      {/* Messages */}
      <div className="relative flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] ${
              message.isBot 
                ? 'bg-white/10 text-white border border-white/20 shadow-lg' 
                : 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white shadow-lg border border-blue-400/30'
            }`}>
              <div className="flex items-start space-x-3">
                {message.isBot && (
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-1.5 rounded-xl flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  {message.isOptions && message.options && (
                    <div className="mt-4 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            if (option.action === 'reset') {
                              handleReset();
                            } else if (option.action === 'close') {
                              handleClose();
                            } else {
                              handleOptionSelect(option);
                            }
                          }}
                          className="w-full text-left p-3 bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 text-white text-sm group transform hover:scale-[1.02]"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span>{option.icon && `${option.icon} `}</span>
                                <span className="font-medium group-hover:text-blue-300 transition-colors">{option.name}</span>
                              </div>
                              {option.description && (
                                <p className="text-xs text-gray-300 mt-1">{option.description}</p>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {!message.isBot && (
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-1.5 rounded-xl flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/10 backdrop-blur-lg text-white p-4 rounded-2xl border border-white/20 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-1.5 rounded-xl">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                <span className="text-sm">Generating content...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      {(currentStep === 'awaiting_topic' || currentStep === 'confirmation') && (
        <div className="relative p-5 bg-black/50 backdrop-blur-lg border-t border-white/10">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={currentStep === 'awaiting_topic' ? 'Enter your topic...' : 'Type your response...'}
              className="flex-1 p-3 bg-white/10 backdrop-blur-lg text-white placeholder-gray-300 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
          {/* Input glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl -z-10"></div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;