import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  ShieldAlert, 
  Zap, 
  Mic, 
  MicOff, 
  Volume2, 
  Activity, 
  Brain, 
  Globe, 
  ShieldCheck, 
  Terminal,
  Cpu,
  Waves,
  Scan,
  Lock,
  RefreshCw,
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  type?: 'text' | 'threat' | 'optimization' | 'voice' | 'system';
  data?: any;
}

export default function AI() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      role: 'assistant', 
      content: 'Neural link established. VoxAI Core v4.0 is monitoring your connection. Quantum-safe encryption is active.',
      type: 'system'
    },
    { 
      id: '2', 
      role: 'assistant', 
      content: 'Hello Agent. I have optimized your routing through the Zurich-Alpha node. Latency reduced by 14ms. How can I assist you further?',
      type: 'text'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [neuralLoad, setNeuralLoad] = useState(72);
  const [threatLevel, setThreatLevel] = useState('Low');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Simulate neural load fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralLoad(prev => Math.min(100, Math.max(40, prev + (Math.random() * 10 - 5))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    const userMsg: Message = { 
      id: Date.now().toString(), 
      role: 'user', 
      content: textToSend,
      type: isVoiceActive ? 'voice' : 'text'
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: textToSend,
        config: {
          systemInstruction: "You are VoxAI, the world's most advanced VPN AI Intelligence (2026). You manage security, encryption, and network optimization. Your tone is futuristic, elite, and highly technical. Use terms like 'Neural Tunneling', 'Quantum-Safe Handshake', 'DPI Obfuscation', and 'Lattice Cryptography'. If the user asks for optimization, provide a 'System' type response with specific technical metrics. You are proactive about security."
        }
      });

      const assistantMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: response.text || "Neural link timeout. Re-establishing secure tunnel...",
        type: 'text'
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-cyan-primary/10 rounded-2xl border border-cyan-primary/20">
            <Brain className="text-cyan-primary animate-pulse" size={28} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              VoxAI Intelligence
              <span className="text-[10px] bg-neon-primary/20 text-neon-primary px-2 py-0.5 rounded-full border border-neon-primary/30">v4.0 LIVE</span>
            </h2>
            <p className="text-gray-400 text-sm">Autonomous Neural Security & Optimization Engine</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 border border-white/5">
            <Activity size={14} className="text-neon-primary" />
            <div className="flex flex-col">
              <span className="text-[8px] text-gray-500 font-bold uppercase">Neural Load</span>
              <span className="text-xs font-mono font-bold text-white">{Math.round(neuralLoad)}%</span>
            </div>
          </div>
          <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 border border-white/5">
            <ShieldAlert size={14} className={threatLevel === 'Low' ? 'text-neon-primary' : 'text-red-400'} />
            <div className="flex flex-col">
              <span className="text-[8px] text-gray-500 font-bold uppercase">Threat Level</span>
              <span className={`text-xs font-mono font-bold ${threatLevel === 'Low' ? 'text-neon-primary' : 'text-red-400'}`}>{threatLevel}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 overflow-hidden">
        {/* Left Sidebar: Real-time Intelligence */}
        <div className="hidden lg:flex flex-col gap-6">
          <div className="glass p-6 rounded-3xl border border-white/5 flex-1 flex flex-col gap-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Scan size={14} className="text-cyan-primary" />
              Packet Inspector
            </h3>
            <div className="flex-1 font-mono text-[9px] space-y-2 overflow-hidden opacity-60">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="flex gap-2 text-cyan-primary/80">
                  <span className="text-gray-600">[{new Date().toLocaleTimeString()}]</span>
                  <span>INBOUND: {Math.floor(Math.random() * 255)}.{Math.floor(Math.random() * 255)}.x.x</span>
                  <span className="text-neon-primary">SECURE</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold text-gray-400">ENCRYPTION STRENGTH</span>
                <span className="text-[10px] font-bold text-cyan-primary">512-BIT</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-primary w-[95%]" />
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-3xl border border-white/5 h-48 flex flex-col gap-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Globe size={14} className="text-violet-primary" />
              Node Health
            </h3>
            <div className="space-y-3">
              {['London-Alpha', 'Zurich-Beta', 'Tokyo-Prime'].map((node, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-xs text-gray-300">{node}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full bg-neon-primary w-[${90 - i * 10}%]`} />
                    </div>
                    <span className="text-[10px] font-mono text-neon-primary">OK</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Enhanced Chat Experience */}
        <div className="lg:col-span-2 flex flex-col glass rounded-3xl border border-white/5 overflow-hidden">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-br from-violet-primary to-violet-dark text-white' 
                        : msg.type === 'system' ? 'bg-white/10 text-gray-400' : 'bg-gradient-to-br from-cyan-primary to-cyan-dark text-space'
                    }`}>
                      {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                    </div>
                    <div className={`p-4 rounded-2xl relative group ${
                      msg.role === 'user' 
                        ? 'bg-violet-primary/20 border border-violet-primary/30 text-white' 
                        : msg.type === 'system' 
                          ? 'bg-white/5 border border-dashed border-white/10 text-gray-400 italic text-xs'
                          : 'bg-white/5 border border-white/10 text-gray-200'
                    }`}>
                      {msg.type === 'voice' && (
                        <div className="flex items-center gap-2 mb-2 text-[10px] font-bold text-cyan-primary/70 uppercase tracking-tighter">
                          <Volume2 size={10} />
                          Voice Command
                        </div>
                      )}
                      <p className="leading-relaxed">{msg.content}</p>
                      {msg.type === 'optimization' && (
                        <div className="mt-4 p-3 bg-cyan-primary/10 rounded-xl border border-cyan-primary/20 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Zap size={16} className="text-cyan-primary" />
                            <span className="text-xs font-bold text-white">Apply Optimization?</span>
                          </div>
                          <button className="px-3 py-1 bg-cyan-primary text-space text-[10px] font-bold rounded-lg">EXECUTE</button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-primary text-space flex items-center justify-center">
                    <Bot size={20} />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex gap-1.5 items-center">
                    <div className="w-1.5 h-1.5 bg-cyan-primary rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-cyan-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-cyan-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Voice Waveform Overlay (Non-intrusive) */}
          <AnimatePresence>
            {isVoiceActive && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 60, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-cyan-primary/10 border-t border-cyan-primary/20 flex items-center justify-center gap-1 overflow-hidden"
              >
                {Array.from({ length: 40 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, Math.random() * 30 + 10, 4] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.02 }}
                    className="w-1 bg-cyan-primary rounded-full"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-6 border-t border-white/5 bg-white/5">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Command VoxAI..."
                  className="w-full bg-space/50 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-cyan-primary/50 transition-colors pr-12"
                />
                <button 
                  onClick={() => setIsVoiceActive(!isVoiceActive)}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${isVoiceActive ? 'text-cyan-primary' : 'text-gray-500 hover:text-cyan-primary'}`}
                >
                  {isVoiceActive ? <Mic size={20} /> : <MicOff size={20} />}
                </button>
              </div>
              <button 
                onClick={() => handleSend()}
                className="px-8 bg-cyan-primary text-space rounded-2xl font-bold hover:bg-cyan-dark transition-all flex items-center gap-2 shadow-lg shadow-cyan-primary/20 active:scale-95"
              >
                <Send size={20} />
                <span className="hidden sm:inline">SEND</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar: AI Intelligence Modules */}
        <div className="hidden lg:flex flex-col gap-6">
          <div className="glass p-6 rounded-3xl border border-white/5 space-y-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Cpu size={14} className="text-cyan-primary" />
              Neural Core
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-gray-400">THREAT ANALYSIS</span>
                  <span className="text-[10px] font-bold text-neon-primary">ACTIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: ['20%', '80%', '40%', '90%'] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="h-full bg-neon-primary" 
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-gray-400">LATENCY PREDICTION</span>
                  <span className="text-[10px] font-bold text-cyan-primary">OPTIMAL</span>
                </div>
                <div className="h-12 flex items-end gap-1">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: [5, Math.random() * 30 + 10, 5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                      className="flex-1 bg-cyan-primary/20 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-3xl border border-white/5 flex-1 flex flex-col gap-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Terminal size={14} className="text-violet-primary" />
              Intelligence Logs
            </h3>
            <div className="flex-1 font-mono text-[9px] space-y-3 overflow-hidden opacity-80">
              {[
                { type: 'info', msg: 'Quantum-Safe handshake initiated' },
                { type: 'success', msg: 'DPI Shield v4.2 active' },
                { type: 'warning', msg: 'Suspicious packet from 104.x.x.x' },
                { type: 'info', msg: 'Rerouting via Neural Tunnel' },
                { type: 'success', msg: 'Lattice encryption verified' },
              ].map((log, i) => (
                <div key={i} className="flex gap-2">
                  <span className={log.type === 'warning' ? 'text-red-400' : log.type === 'success' ? 'text-neon-primary' : 'text-cyan-primary'}>
                    {log.type === 'warning' ? '!' : '>'}
                  </span>
                  <span className="text-gray-400">{log.msg}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-bold text-gray-500 transition-colors uppercase tracking-widest">
              View Full Audit Log
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-4 rounded-2xl flex items-center gap-4 border-l-4 border-l-cyan-primary group hover:bg-white/5 transition-all cursor-pointer">
          <div className="p-2 bg-cyan-primary/10 rounded-lg group-hover:scale-110 transition-transform">
            <RefreshCw size={18} className="text-cyan-primary" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Neural Optimization</p>
            <p className="text-sm font-bold">Recalculate optimal path</p>
          </div>
          <ChevronRight size={16} className="text-gray-600 group-hover:text-cyan-primary transition-colors" />
        </div>
        
        <div className="glass p-4 rounded-2xl flex items-center gap-4 border-l-4 border-l-violet-primary group hover:bg-white/5 transition-all cursor-pointer">
          <div className="p-2 bg-violet-primary/10 rounded-lg group-hover:scale-110 transition-transform">
            <Lock size={18} className="text-violet-primary" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Quantum Guard</p>
            <p className="text-sm font-bold">Verify encryption integrity</p>
          </div>
          <ChevronRight size={16} className="text-gray-600 group-hover:text-violet-primary transition-colors" />
        </div>

        <div className="glass p-4 rounded-2xl flex items-center gap-4 border-l-4 border-l-neon-primary group hover:bg-white/5 transition-all cursor-pointer">
          <div className="p-2 bg-neon-primary/10 rounded-lg group-hover:scale-110 transition-transform">
            <AlertTriangle size={18} className="text-neon-primary" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Threat Simulator</p>
            <p className="text-sm font-bold">Run stress test analysis</p>
          </div>
          <ChevronRight size={16} className="text-gray-600 group-hover:text-neon-primary transition-colors" />
        </div>
      </div>
    </div>
  );
}


