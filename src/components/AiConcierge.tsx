import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  ShoppingBag, 
  ArrowRight, 
  Info,
  ChevronDown
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ChatMessage, Product } from '../types';

export const AiConcierge: React.FC = () => {
  const { 
    isAiAssistantOpen, 
    setIsAiAssistantOpen, 
    products, 
    bundles, 
    addToCart, 
    activePersona,
    setActiveDetailProduct
  } = useStore();

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      text: `Hello! I am your NOVA AI Personal Shopper. I analyze your lifestyle persona (${activePersona}), budget limits, and style goals to curate tailored recommendations. How can I assist your discovery today?`,
      timestamp: 'Just now',
      suggestedProducts: ['nova-aura-headphones', 'nova-solstice-watch']
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isAiAssistantOpen) {
      scrollToBottom();
    }
  }, [messages, isAiAssistantOpen]);

  const quickPrompts = [
    'Best desk setup under $200',
    'Which bundle saves the most?',
    'Find items for a young professional',
    'Eco-friendly luxury products',
    'Why is NOVA better than Amazon?'
  ];

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Rule-based heuristic matching logic
    setTimeout(() => {
      const q = query.toLowerCase();
      let responseText = '';
      let recommendedIds: string[] = [];

      if (q.includes('under') || q.includes('budget') || q.includes('200') || q.includes('150') || q.includes('cheap')) {
        const affordable = products.filter((p) => p.price <= 185);
        recommendedIds = affordable.slice(0, 2).map((p) => p.id);
        responseText = `I prioritized high-durability essentials within your budget limit. The Sandstone Pour-Over Set ($68) and Kyoto Ceramic Diffuser ($79) provide luxury craftsmanship without breaking the bank.`;
      } else if (q.includes('bundle') || q.includes('save') || q.includes('discount')) {
        recommendedIds = ['nova-aura-headphones', 'nova-mechanical-keyboard', 'nova-lumina-lamp'];
        responseText = `Our top bundle recommendation is "The Executive Productivity Suite" which saves you $120 (20% off). Bundling complementary hardware gives you direct volume savings without waiting for seasonal sales!`;
      } else if (q.includes('work') || q.includes('desk') || q.includes('professional') || q.includes('laptop')) {
        recommendedIds = ['nova-mechanical-keyboard', 'nova-lumina-lamp', 'nova-lumbar-backpack'];
        responseText = `For remote & hybrid knowledge workers, I recommend the Monolith Gasket Keyboard ($165) paired with the Lumina Brass Lamp ($185) with built-in Qi wireless charging. It eliminates clutter and elevates daily focus.`;
      } else if (q.includes('eco') || q.includes('sustainable') || q.includes('green')) {
        recommendedIds = ['nova-botanical-parfum', 'nova-linen-duvet', 'nova-ceramic-pour'];
        responseText = `These items hold our highest Eco-Impact ratings (Grade A & A+): 100% cruelty-free botanicals from Grasse, Normandy French flax linen, and reusable titanium pour-over filters eliminating single-use paper waste.`;
      } else if (q.includes('amazon') || q.includes('different') || q.includes('why nova') || q.includes('advantage')) {
        responseText = `Unlike Amazon's uncurated algorithmic marketplace of millions of low-grade dropshipped clones, NOVA curates strictly verified items, enforces zero-waste packaging, and generates dynamic cross-category bundles saving an average of 20% with zero cognitive fatigue.`;
      } else if (q.includes('student') || q.includes('college') || q.includes('campus')) {
        recommendedIds = ['nova-lumbar-backpack', 'nova-leather-organizer', 'nova-ceramic-pour'];
        responseText = `For university scholars, enter coupon "STUDENT20" for an instant 20% discount. The Kyoto Commuter Backpack features suspended shockproof 16" laptop protection and Fidlock magnetic closures!`;
      } else {
        recommendedIds = ['nova-solstice-watch', 'nova-botanical-parfum'];
        responseText = `Based on your ${activePersona} lifestyle profile, I selected items that balance timeless aesthetics with premium functionality. Here are two standout pieces you might love:`;
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: responseText,
        timestamp: 'Just now',
        suggestedProducts: recommendedIds.length > 0 ? recommendedIds : undefined
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isAiAssistantOpen && (
        <button
          onClick={() => setIsAiAssistantOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#4A3028] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl hover:bg-[#35211B] hover:scale-105 transition-all flex items-center space-x-2.5 border border-[#C5A46D]/60 group"
          aria-label="Open AI Shopping Concierge"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-[#C5A46D] animate-spin" style={{ animationDuration: '6s' }} />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#C5A46D] animate-ping" />
          </div>
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            NOVA AI Concierge
          </span>
          <span className="hidden md:inline text-[10px] bg-[#E9E0D2] text-[#4A3028] px-2 py-0.5 rounded-full font-bold">
            Online
          </span>
        </button>
      )}

      {/* Chat Window Modal */}
      {isAiAssistantOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[420px] max-h-[620px] h-[85vh] bg-[#F7F3EB] rounded-3xl border border-[#C5A46D]/50 shadow-2xl flex flex-col overflow-hidden animate-slideUp">
          
          {/* Header */}
          <div className="bg-[#4A3028] text-white p-4 flex items-center justify-between border-b border-[#C5A46D]/30">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-[#35211B] flex items-center justify-center border border-[#C5A46D]/50">
                <Sparkles className="w-4 h-4 text-[#C5A46D]" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold flex items-center space-x-1.5">
                  <span>NOVA AI Concierge</span>
                  <span className="text-[10px] bg-[#C5A46D] text-white px-1.5 py-0.2 rounded font-mono font-semibold">v2.6</span>
                </h4>
                <p className="text-[10px] text-[#DFC8A2]">Rule-Based Generative Retail Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsAiAssistantOpen(false)}
              className="p-1 rounded-full text-[#DFC8A2] hover:text-white hover:bg-white/10 transition-colors"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Persona Calibration Notice */}
          <div className="bg-[#F2ECE2] px-4 py-2 border-b border-[#E9E0D2] flex items-center justify-between text-[11px] text-[#63443A]">
            <span>Active Persona: <strong className="text-[#4A3028]">{activePersona}</strong></span>
            <span className="text-[10px] text-[#8C7A70] italic">Rule-based demo engine</span>
          </div>

          {/* Messages Flow */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 space-y-2 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#4A3028] text-white rounded-br-none shadow-sm'
                      : 'bg-white text-[#4A3028] rounded-bl-none border border-[#E9E0D2] shadow-sm'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Embedded Recommended Product Cards */}
                  {msg.suggestedProducts && msg.suggestedProducts.length > 0 && (
                    <div className="pt-2 space-y-2 border-t border-[#F2ECE2]">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#C5A46D]">
                        Suggested Products:
                      </p>
                      {msg.suggestedProducts.map((pId) => {
                        const product = products.find((p) => p.id === pId);
                        if (!product) return null;

                        return (
                          <div
                            key={product.id}
                            className="bg-[#F7F3EB] rounded-xl p-2 flex items-center justify-between border border-[#E9E0D2] hover:border-[#C5A46D] transition-colors"
                          >
                            <div
                              onClick={() => {
                                setActiveDetailProduct(product);
                                setIsAiAssistantOpen(false);
                              }}
                              className="flex items-center space-x-2 cursor-pointer flex-1 min-w-0 mr-2"
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-10 h-10 rounded-lg object-cover"
                              />
                              <div className="truncate">
                                <p className="font-bold text-[11px] text-[#4A3028] truncate">
                                  {product.name}
                                </p>
                                <p className="font-mono text-[10px] font-bold text-[#C5A46D]">
                                  ${product.price.toFixed(2)}
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() => addToCart(product, 1)}
                              className="px-2.5 py-1 rounded-lg bg-[#4A3028] hover:bg-[#35211B] text-white text-[10px] font-semibold transition-colors flex items-center space-x-1"
                            >
                              <ShoppingBag className="w-2.5 h-2.5 text-[#C5A46D]" />
                              <span>Add</span>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-[#9E8B83] mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-1.5 bg-white p-3 rounded-2xl rounded-bl-none border border-[#E9E0D2] w-20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-white/70 border-t border-[#E9E0D2] flex gap-1.5 overflow-x-auto scrollbar-none">
            {quickPrompts.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(chip)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#F7F3EB] hover:bg-[#E9E0D2] text-[#4A3028] text-[11px] border border-[#D4C8B5] transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#E9E0D2] flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Ask for advice, budget bundles, style ideas..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-[#F7F3EB] border border-[#D4C8B5] rounded-full py-2 px-4 text-xs text-[#4A3028] focus:outline-none focus:ring-1 focus:ring-[#C5A46D]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-full bg-[#4A3028] text-white hover:bg-[#35211B] disabled:opacity-40 transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5 text-[#C5A46D]" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
