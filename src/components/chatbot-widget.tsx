"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatbotWidgetProps {
  className?: string;
}

export default function ChatbotWidget({ className }: ChatbotWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi! I\'m your Vital AI health assistant. How can I help you today?',
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Fade in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // Increased delay for smoother entrance

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date()
    };

    const currentInput = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          messages: [...messages, userMessage].map(m => ({ 
            role: m.role, 
            content: m.content 
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.text || data.response || 'Sorry, I couldn\'t process your request.',
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I\'m having trouble connecting. Please try again.',
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div 
      className={cn(
        "absolute right-8 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-1500 ease-out",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
        className
      )}
    >
      {/* Chat Widget - Always Open */}
      <div className="bg-gray-500/30 backdrop-blur-md border border-gray-400/30 rounded-2xl shadow-lg w-[580px] h-[500px] flex flex-col floating-header">
        {/* Header */}
        <div className="flex items-center gap-3 p-5 border-b border-gray-400/30">
          <div className="bg-gray-500/40 backdrop-blur-sm p-2 rounded-lg">
            <Bot className="h-5 w-5 text-gray-700" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-800">Vital AI</h3>
            <p className="text-sm text-gray-600">Health Assistant</p>
          </div>
        </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start gap-2",
                  message.role === 'user' ? "justify-end" : "justify-start"
                )}
              >
                {message.role === 'assistant' && (
                  <div className="bg-gray-500/40 backdrop-blur-sm p-1 rounded-full">
                    <Bot className="h-3 w-3 text-gray-700" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[400px] px-3 py-2 rounded-lg text-xs",
                    message.role === 'user'
                      ? "bg-gray-600/40 text-white ml-auto"
                      : "bg-gray-500/20 text-gray-800"
                  )}
                >
                  {message.content}
                </div>
                {message.role === 'user' && (
                  <div className="bg-gray-500/40 backdrop-blur-sm p-1 rounded-full">
                    <User className="h-3 w-3 text-gray-700" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="bg-gray-500/40 backdrop-blur-sm p-1 rounded-full">
                  <Bot className="h-3 w-3 text-gray-700" />
                </div>
                <div className="bg-gray-500/20 px-3 py-2 rounded-lg text-xs text-gray-700">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-400/30">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about your health..."
                className="flex-1 bg-gray-500/20 border-gray-400/30 text-gray-800 placeholder:text-gray-600 text-xs focus:ring-gray-400/50"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-gray-500/40 hover:bg-gray-500/50 text-gray-200 hover:text-gray-100 border border-gray-400/30 p-2"
                size="sm"
              >
                <Send className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}