import { AnimatePresence, motion } from 'framer-motion';
import { Bot, MessageSquare, SendHorizontal, Sparkles, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  chatbotFallback,
  chatbotTopics,
  suggestedQuestions,
} from '../data/chatbotKnowledge';

type Message = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
};

const initialMessages: Message[] = [
  {
    id: 'intro',
    role: 'assistant',
    content:
      "Hi, I'm Wasla Assistant. I can explain campaigns, creators, approvals, and payment flow.",
  },
];

const getAssistantReply = (input: string) => {
  const normalized = input.toLowerCase();

  const bestTopic = chatbotTopics
    .map((topic) => ({
      topic,
      score: topic.keywords.reduce((total, keyword) => {
        if (normalized.includes(keyword)) {
          return total + (keyword.length > 4 ? 2 : 1);
        }
        return total;
      }, 0),
    }))
    .sort((a, b) => b.score - a.score)[0];

  if (!bestTopic || bestTopic.score === 0) {
    return chatbotFallback;
  }

  return bestTopic.topic.answer;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const typingTimer = useRef<number | null>(null);

  const visibleSuggestions = useMemo(() => suggestedQuestions.slice(0, 6), []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (typingTimer.current) {
        window.clearTimeout(typingTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    const openAssistant = () => setIsOpen(true);
    window.addEventListener('wasla:open-assistant', openAssistant);

    return () => window.removeEventListener('wasla:open-assistant', openAssistant);
  }, []);

  const queueAssistantReply = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) {
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setInput('');
    setIsTyping(true);

    const response = getAssistantReply(trimmed);

    typingTimer.current = window.setTimeout(() => {
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response,
      };
      setMessages((current) => [...current, assistantMessage]);
      setIsTyping(false);
    }, 850);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="mb-4 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-[28px] border border-purple/10 bg-white/95 shadow-glow backdrop-blur-2xl"
            aria-label="Wasla Assistant chat widget"
          >
            <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-purple to-panel px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold">Wasla Assistant</h2>
                  <p className="text-xs text-white/70">Product-specific guidance for Wasla</p>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4 px-4 py-4">
              <div className="max-h-[22rem] space-y-3 overflow-y-auto pr-1" aria-live="polite">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-soft ${
                        message.role === 'assistant'
                          ? 'bg-purple/5 text-plum'
                          : 'bg-purple text-white'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl bg-purple/5 px-4 py-3 text-sm text-plum shadow-soft">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-purple" />
                        <span>Wasla Assistant is typing</span>
                        <span className="flex gap-1">
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple [animation-delay:-0.3s]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple [animation-delay:-0.15s]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple" />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messageEndRef} />
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-purple">
                  Suggested questions
                </p>
                <div className="flex flex-wrap gap-2">
                  {visibleSuggestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      className="rounded-full border border-purple/10 bg-purple/5 px-3 py-2 text-left text-xs font-medium text-purple transition hover:border-purple/25 hover:bg-purple/10"
                      onClick={() => queueAssistantReply(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              <form
                className="flex items-center gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  queueAssistantReply(input);
                }}
              >
                <label htmlFor="chatbot-input" className="sr-only">
                  Ask Wasla Assistant a question
                </label>
                <input
                  id="chatbot-input"
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about pricing, creators, or approvals..."
                  className="h-12 flex-1 rounded-2xl border border-purple/10 bg-white px-4 text-sm text-plum outline-none transition placeholder:text-plum/40 focus:border-purple/30 focus:ring-2 focus:ring-purple/10"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple text-white transition hover:bg-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                  aria-label="Send message"
                >
                  <SendHorizontal className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex items-center gap-3 rounded-full bg-purple px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close Wasla Assistant' : 'Open Wasla Assistant'}
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
          <MessageSquare className="h-4 w-4" />
        </span>
        Wasla Assistant
      </button>
    </div>
  );
};

export default Chatbot;
