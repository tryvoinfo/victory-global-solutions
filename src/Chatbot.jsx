import React, { useState } from 'react';
import { MessageSquare, X, Send, ChevronRight, Phone, Mail, Building, Briefcase, HelpCircle } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Welcome to Victory Global Solutions LTD (RDB TIN: 156267824). How can we assist you today?',
      type: 'menu'
    }
  ]);

  const handleSelectOption = (optionKey) => {
    let userQuery = '';
    let botResponse = '';
    let responseType = 'menu';

    switch (optionKey) {
      case 'services':
        userQuery = 'What services do you offer?';
        botResponse = 'We specialize in four core areas:\n1. Manpower Supply (skilled & general)\n2. General Construction & Building Works\n3. Specialized Mechanical & Electrical Installations\n4. Hospitality Staffing';
        break;
      case 'quote':
        userQuery = 'How can I request a quote or contact you?';
        botResponse = 'For immediate project consultations or workforce quotes, reach our team directly:\n📞 Phone: 0786 253 639\n✉️ Email: info@victoryglobalsolutions.net';
        break;
      case 'compliance':
        userQuery = 'Are you a registered company?';
        botResponse = 'Yes, Victory Global Solutions LTD is officially registered with the Rwanda Development Board (RDB) under TIN: 156267824, based in Kigali and managed by Adelphine Mujawimana.';
        break;
      case 'jobs':
        userQuery = 'How can I apply for a job?';
        botResponse = 'For employment and recruitment inquiries, please send your CV and credentials directly to our official email at info@victoryglobalsolutions.net or call 0786 253 639.';
        break;
      default:
        break;
    }

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userQuery },
      { sender: 'bot', text: botResponse, type: responseType }
    ]);
  };

  const resetChat = () => {
    setMessages([
      {
        sender: 'bot',
        text: 'How else can we help you with Victory Global Solutions?',
        type: 'menu'
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-navy text-gold p-4 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-3 border-2 border-gold/40 group"
          aria-label="Open Chat"
        >
          <MessageSquare className="w-6 h-6 text-gold group-hover:rotate-12 transition-transform" />
          <span className="font-display font-bold text-sm pr-1 hidden sm:inline">Client Inquiry Chat</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-navy text-primary-foreground p-4 flex items-center justify-between border-b border-gold/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold text-navy font-bold flex items-center justify-center text-xs">
                VG
              </div>
              <div>
                <h4 className="font-display font-bold text-sm leading-tight">Victory Support</h4>
                <span className="text-[10px] text-gold tracking-widest uppercase">Online | Kigali, Rwanda</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-secondary/20 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%].p-3 rounded-xl whitespace-pre-line leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-navy text-primary-foreground rounded-br-none'
                      : 'bg-card border border-border text-foreground shadow-sm rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Interactive Menu Buttons after bot messages */}
                {msg.sender === 'bot' && (
                  <div className="mt-3 flex flex-col gap-2 w-full">
                    <button
                      onClick={() => handleSelectOption('services')}
                      className="text-left text-xs bg-card hover:bg-gold/10 border border-border hover:border-gold p-2.5 rounded-lg flex items-center justify-between transition-all group font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-gold" /> What services do you offer?
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => handleSelectOption('quote')}
                      className="text-left text-xs bg-card hover:bg-gold/10 border border-border hover:border-gold p-2.5 rounded-lg flex items-center justify-between transition-all group font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gold" /> How to get a quote / contact?
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => handleSelectOption('compliance')}
                      className="text-left text-xs bg-card hover:bg-gold/10 border border-border hover:border-gold p-2.5 rounded-lg flex items-center justify-between transition-all group font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-gold" /> Are you registered in Rwanda (TIN)?
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => handleSelectOption('jobs')}
                      className="text-left text-xs bg-card hover:bg-gold/10 border border-border hover:border-gold p-2.5 rounded-lg flex items-center justify-between transition-all group font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-gold" /> Looking for employment / jobs
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Reset */}
          <div className="p-3 bg-card border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <span>Victory Global Assistant</span>
            <button
              onClick={resetChat}
              className="text-gold hover:underline font-semibold"
            >
              Restart Chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}