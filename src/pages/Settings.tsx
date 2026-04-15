import React, { useState } from 'react';
import { 
  User, 
  Shield, 
  Bell, 
  Globe, 
  CreditCard, 
  Lock, 
  Cpu, 
  Zap, 
  Eye, 
  EyeOff, 
  Server, 
  Wifi, 
  Database, 
  Smartphone, 
  Key, 
  ShieldCheck, 
  History,
  QrCode,
  LogOut,
  Monitor,
  CheckCircle2
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Protocols');
  const [subView, setSubView] = useState<string | null>(null);
  const [showKey, setShowKey] = useState(false);
  const [twoStep, setTwoStep] = useState(1); // 1: Info, 2: QR, 3: Verify

  const tabs = [
    { icon: User, label: 'Profile' },
    { icon: Lock, label: 'Protocols' },
    { icon: Key, label: 'Authentication' },
    { icon: Smartphone, label: 'Devices' },
    { icon: Globe, label: 'Network' },
    { icon: Cpu, label: 'AI Engine' },
    { icon: Bell, label: 'Notifications' },
    { icon: CreditCard, label: 'Billing' },
  ];

  const renderProtocols = () => {
    if (subView === 'Neural Tunneling') {
      return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => setSubView(null)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
              <History size={20} className="rotate-180" />
            </button>
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Cpu className="text-cyan-primary" />
              Neural Tunneling Configuration
            </h3>
            <span className="text-[10px] bg-violet-primary/20 text-violet-light px-2 py-1 rounded font-bold uppercase">PRO ACCESS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-3xl space-y-6">
              <div>
                <p className="text-sm font-bold mb-4">Port Hopping Frequency</p>
                <div className="relative h-2 bg-white/5 rounded-full mb-2">
                  <div className="absolute h-full bg-cyan-primary rounded-full w-[75%]" />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-bold">
                  <span>STABLE (30s)</span>
                  <span className="text-cyan-primary">AGGRESSIVE (5s)</span>
                  <span>INSTANT (1s)</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold mb-4">Packet Fragmentation Size</p>
                <div className="grid grid-cols-3 gap-2">
                  {['64B', '128B', '256B'].map(size => (
                    <button key={size} className={`py-2 rounded-xl text-xs font-bold border transition-all ${size === '128B' ? 'bg-cyan-primary text-space border-cyan-primary' : 'bg-white/5 border-white/10 text-gray-400'}`}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-3xl space-y-4">
              <p className="text-sm font-bold">AI Obfuscation Model</p>
              {['Vox-Core v4 (Standard)', 'Stealth-X (Ghost Mode)', 'Quantum-Resistant'].map((model, i) => (
                <label key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-neon-primary shadow-[0_0_8px_rgba(0,255,136,0.5)]' : 'bg-gray-600'}`} />
                    <span className="text-sm font-medium">{model}</span>
                  </div>
                  <input type="radio" name="ai-model" defaultChecked={i === 1} className="accent-cyan-primary" />
                </label>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-space/50 border border-cyan-primary/20 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold text-cyan-primary uppercase tracking-widest">Live Tunnel Visualization</p>
              <span className="text-[10px] font-mono text-neon-primary">ACTIVE HOPPING...</span>
            </div>
            <div className="h-24 flex items-end gap-1">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [20, Math.random() * 80 + 10, 20] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
                  className="flex-1 bg-cyan-primary/20 rounded-t-sm"
                />
              ))}
            </div>
          </div>
        </motion.div>
      );
    }

    if (subView === 'Double VPN') {
      return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => setSubView(null)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
              <History size={20} className="rotate-180" />
            </button>
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Shield className="text-violet-primary" />
              Double VPN (Multi-Hop)
            </h3>
            <span className="text-[10px] bg-violet-primary/20 text-violet-light px-2 py-1 rounded font-bold uppercase">PRO ACCESS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="glass p-6 rounded-3xl space-y-4 text-center">
              <p className="text-[10px] font-bold text-gray-500 uppercase">Entry Node</p>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="font-bold">London, UK</p>
                <p className="text-[10px] text-cyan-primary font-mono">IP: 185.210.x.x</p>
              </div>
              <button className="text-[10px] font-bold text-violet-light hover:underline">CHANGE ENTRY</button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="h-px w-full bg-gradient-to-r from-cyan-primary via-violet-primary to-neon-primary relative">
                <motion.div 
                  animate={{ left: ['0%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"
                />
              </div>
              <span className="text-[10px] font-bold text-gray-600">ENCRYPTED TUNNEL</span>
            </div>

            <div className="glass p-6 rounded-3xl space-y-4 text-center">
              <p className="text-[10px] font-bold text-gray-500 uppercase">Exit Node</p>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="font-bold">Tokyo, JP</p>
                <p className="text-[10px] text-neon-primary font-mono">IP: 103.201.x.x</p>
              </div>
              <button className="text-[10px] font-bold text-violet-light hover:underline">CHANGE EXIT</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-3xl space-y-4">
              <p className="text-sm font-bold">Cascading Encryption</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-xs">Layer 1 (Entry)</span>
                  <span className="text-[10px] font-mono text-cyan-primary">AES-256-GCM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-xs">Layer 2 (Exit)</span>
                  <span className="text-[10px] font-mono text-violet-primary">ChaCha20-Poly1305</span>
                </div>
              </div>
            </div>
            <div className="glass p-6 rounded-3xl flex flex-col justify-center items-center gap-2">
              <p className="text-[10px] font-bold text-gray-500 uppercase">Total Latency Overhead</p>
              <p className="text-4xl font-bold text-white">+142<span className="text-xl text-gray-500 ml-1">ms</span></p>
              <p className="text-[10px] text-yellow-400 font-bold">HIGH SECURITY MODE ACTIVE</p>
            </div>
          </div>
        </motion.div>
      );
    }

    if (subView === 'Auto-Switching') {
      return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => setSubView(null)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
              <History size={20} className="rotate-180" />
            </button>
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Zap className="text-yellow-400" />
              Protocol Auto-Switching
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-3xl space-y-6">
              <p className="text-sm font-bold">Optimization Priority</p>
              <div className="space-y-3">
                {[
                  { label: 'Maximum Speed', desc: 'Prioritizes WireGuard and low-latency nodes.', icon: Zap, color: 'text-yellow-400' },
                  { label: 'Ultimate Privacy', desc: 'Prioritizes OpenVPN with Stealth and Multi-Hop.', icon: Shield, color: 'text-violet-primary' },
                  { label: 'Balanced AI', desc: 'Dynamic adjustment based on current activity.', icon: Cpu, color: 'text-cyan-primary' },
                ].map((opt, i) => (
                  <button key={i} className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${i === 2 ? 'bg-cyan-primary/10 border-cyan-primary/30' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
                    <div className={`p-2 rounded-lg bg-white/5 ${opt.color}`}>
                      <opt.icon size={18} />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold">{opt.label}</p>
                      <p className="text-[10px] text-gray-500">{opt.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-3xl space-y-6">
              <p className="text-sm font-bold">Switching Triggers</p>
              <div className="space-y-4">
                {[
                  { name: 'Public Wi-Fi Detected', active: true },
                  { name: 'Cellular Network (5G/6G)', active: false },
                  { name: 'Streaming Detected', active: true },
                  { name: 'Gaming Mode (Low Latency)', active: true },
                ].map((t, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">{t.name}</span>
                    <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${t.active ? 'bg-neon-primary' : 'bg-white/10'}`}>
                      <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${t.active ? 'right-0.5' : 'left-0.5'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Recent AI Decisions</p>
            <div className="space-y-2">
              {[
                { time: '2m ago', action: 'Switched to WireGuard', reason: 'High-bandwidth streaming detected' },
                { time: '15m ago', action: 'Enabled Stealth Mode', reason: 'Deep Packet Inspection detected by ISP' },
                { time: '1h ago', action: 'Rerouted via Frankfurt', reason: 'London node latency spike (+15ms)' },
              ].map((log, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 text-xs">
                  <span className="text-gray-500 font-mono">{log.time}</span>
                  <span className="text-cyan-primary font-bold">{log.action}</span>
                  <span className="text-gray-400">— {log.reason}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      );
    }

    return (
      <section className="space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Lock className="text-cyan-primary" />
            Security Protocols
          </h3>
          <div className="px-3 py-1 bg-neon-primary/10 text-neon-primary text-[10px] font-bold rounded-full border border-neon-primary/20">
            ALL SYSTEMS OPTIMAL
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            { 
              name: 'Quantum Guard v4.2', 
              desc: 'Lattice-based cryptography resistant to quantum computer attacks.', 
              active: true, 
              stats: 'AES-512-XTS',
              latency: '+2ms'
            },
            { 
              name: 'WireGuard Stealth', 
              desc: 'UDP-based protocol with advanced obfuscation to bypass DPI.', 
              active: true, 
              stats: 'ChaCha20-Poly1305',
              latency: '+0.5ms'
            },
            { 
              name: 'Neural Tunneling', 
              desc: 'AI-driven dynamic port hopping and packet fragmentation.', 
              active: false, 
              pro: true,
              stats: 'Dynamic',
              latency: '+5ms'
            },
            { 
              name: 'Double VPN (Multi-Hop)', 
              desc: 'Chains your connection through two separate high-security nodes.', 
              active: false, 
              pro: true,
              stats: 'Dual-Layer',
              latency: '+45ms'
            },
          ].map((p, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-lg">{p.name}</p>
                    {p.pro && <span className="text-[9px] bg-violet-primary/20 text-violet-light px-2 py-0.5 rounded font-bold uppercase tracking-tighter">PRO FEATURE</span>}
                  </div>
                  <p className="text-sm text-gray-400 max-w-md leading-relaxed">{p.desc}</p>
                </div>
                <div className={`w-14 h-7 rounded-full relative cursor-pointer transition-colors ${p.active ? 'bg-neon-primary' : 'bg-white/10'}`}>
                  <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-lg transition-all ${p.active ? 'right-1' : 'left-1'}`} />
                </div>
              </div>
              <div className="flex gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-cyan-primary" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">{p.stats}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-yellow-400" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Latency: {p.latency}</span>
                </div>
                <button 
                  onClick={() => setSubView(p.name)}
                  className="ml-auto text-[10px] font-bold text-cyan-primary hover:underline uppercase tracking-widest"
                >
                  Configure
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-primary/10 to-transparent border border-violet-primary/20">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-violet-primary/20 rounded-xl">
              <History className="text-violet-light" />
            </div>
            <div>
              <p className="font-bold">Protocol Auto-Switching</p>
              <p className="text-xs text-gray-400">Let VoxAI choose the best protocol based on your current network environment.</p>
            </div>
            <button 
              onClick={() => setSubView('Auto-Switching')}
              className="ml-auto px-4 py-2 glass rounded-lg text-xs font-bold hover:bg-white/10 transition-colors"
            >
              ENABLE
            </button>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Settings</h2>
          <p className="text-gray-400">Precision control over your digital fortress.</p>
        </div>
        <NavLink 
          to="/subscription"
          className="px-6 py-2 bg-gradient-to-r from-violet-primary to-cyan-primary text-space font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-violet-primary/20"
        >
          UPGRADE TO PRO
        </NavLink>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1 space-y-2">
          {tabs.map((item, i) => (
            <button 
              key={i}
              onClick={() => {
                setActiveTab(item.label);
                setSubView(null);
              }}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                activeTab === item.label 
                  ? 'bg-cyan-primary text-space font-bold shadow-lg shadow-cyan-primary/20 scale-[1.02]' 
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <item.icon size={20} className={activeTab === item.label ? '' : 'group-hover:text-cyan-primary transition-colors'} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="glass rounded-3xl p-8 min-h-[600px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + (subView || '')}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'Protocols' && renderProtocols()}

                {activeTab === 'Authentication' && (
                  <section className="space-y-8">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <Key className="text-cyan-primary" />
                      Authentication & Access
                    </h3>

                    <div className="grid grid-cols-1 gap-6">
                      {/* 2FA Section */}
                      <div className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-lg font-bold mb-1">Two-Factor Authentication (2FA)</h4>
                            <p className="text-sm text-gray-400">Secure your account with an additional verification layer.</p>
                          </div>
                          <div className="px-3 py-1 bg-red-400/10 text-red-400 text-[10px] font-bold rounded-full border border-red-400/20">
                            NOT ENABLED
                          </div>
                        </div>

                        {twoStep === 1 && (
                          <div className="flex items-center gap-6 p-6 bg-space/50 rounded-2xl border border-white/5">
                            <div className="p-4 bg-cyan-primary/10 rounded-2xl">
                              <Smartphone size={32} className="text-cyan-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium mb-2">Authenticator App</p>
                              <p className="text-xs text-gray-500">Use apps like Google Authenticator or Authy to generate secure codes.</p>
                            </div>
                            <button 
                              onClick={() => setTwoStep(2)}
                              className="px-6 py-2 bg-white text-space font-bold rounded-xl hover:bg-cyan-primary transition-colors"
                            >
                              SETUP
                            </button>
                          </div>
                        )}

                        {twoStep === 2 && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-6"
                          >
                            <div className="flex gap-8 items-center">
                              <div className="p-4 bg-white rounded-2xl">
                                <QrCode size={120} className="text-space" />
                              </div>
                              <div className="space-y-4 flex-1">
                                <p className="text-sm font-bold">1. Scan this QR Code</p>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                  Open your authenticator app and scan the code. If you can't scan it, use the manual key:
                                </p>
                                <div className="p-3 bg-space rounded-xl font-mono text-xs text-cyan-primary border border-white/5 flex justify-between items-center">
                                  <span>VOX-7K2L-9P4M-X1Z0</span>
                                  <button className="text-[10px] font-bold hover:text-white">COPY</button>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-4 pt-4">
                              <button onClick={() => setTwoStep(1)} className="flex-1 py-3 glass rounded-xl font-bold text-sm">CANCEL</button>
                              <button onClick={() => setTwoStep(3)} className="flex-1 py-3 bg-cyan-primary text-space rounded-xl font-bold text-sm">NEXT STEP</button>
                            </div>
                          </motion.div>
                        )}

                        {twoStep === 3 && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6 text-center py-4"
                          >
                            <p className="text-sm font-bold">2. Enter Verification Code</p>
                            <p className="text-xs text-gray-400">Enter the 6-digit code from your app to confirm setup.</p>
                            <div className="flex justify-center gap-3">
                              {[1,2,3,4,5,6].map(i => (
                                <input key={i} type="text" maxLength={1} className="w-12 h-14 bg-space border border-white/10 rounded-xl text-center text-xl font-bold focus:border-cyan-primary focus:outline-none" />
                              ))}
                            </div>
                            <button 
                              onClick={() => {
                                alert('2FA Enabled Successfully!');
                                setTwoStep(1);
                              }}
                              className="w-full py-4 bg-neon-primary text-space font-bold rounded-xl hover:opacity-90 transition-opacity"
                            >
                              VERIFY & ENABLE
                            </button>
                          </motion.div>
                        )}
                      </div>

                      {/* Password Section */}
                      <div className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-6">
                        <h4 className="text-lg font-bold">Change Password</h4>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 uppercase font-bold">Current Password</label>
                            <input type="password" placeholder="••••••••" className="w-full bg-space/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-primary/50" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-[10px] text-gray-500 uppercase font-bold">New Password</label>
                              <input type="password" placeholder="••••••••" className="w-full bg-space/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-primary/50" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] text-gray-500 uppercase font-bold">Confirm New Password</label>
                              <input type="password" placeholder="••••••••" className="w-full bg-space/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-primary/50" />
                            </div>
                          </div>
                        </div>
                        <button className="px-8 py-3 glass rounded-xl font-bold text-sm hover:bg-white/10 transition-colors">UPDATE PASSWORD</button>
                      </div>
                    </div>
                  </section>
                )}

                {activeTab === 'Devices' && (
                  <section className="space-y-8">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <Smartphone className="text-cyan-primary" />
                      Connected Devices
                    </h3>
                    <p className="text-gray-400 text-sm">Manage your active sessions and devices currently using VoxVPN.</p>

                    <div className="space-y-4">
                      {[
                        { name: 'MacBook Pro 16"', os: 'macOS 15.4', location: 'London, UK', current: true, icon: Monitor },
                        { name: 'iPhone 15 Pro', os: 'iOS 18.1', location: 'London, UK', current: false, icon: Smartphone },
                        { name: 'Work Station', os: 'Windows 11', location: 'Frankfurt, DE', current: false, icon: Monitor },
                      ].map((device, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-6 group hover:border-white/10 transition-colors">
                          <div className={`p-4 rounded-2xl ${device.current ? 'bg-cyan-primary/10 text-cyan-primary' : 'bg-white/5 text-gray-400'}`}>
                            <device.icon size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-bold">{device.name}</p>
                              {device.current && <span className="text-[8px] bg-neon-primary/20 text-neon-primary px-1.5 py-0.5 rounded font-bold uppercase">CURRENT</span>}
                            </div>
                            <p className="text-xs text-gray-500">{device.os} • {device.location}</p>
                          </div>
                          <button className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${device.current ? 'text-gray-600 cursor-not-allowed' : 'text-red-400 hover:bg-red-400/10'}`}>
                            {device.current ? 'SECURED' : 'REVOKE'}
                          </button>
                        </div>
                      ))}
                    </div>

                    <button className="w-full py-4 border border-dashed border-white/10 rounded-2xl text-gray-500 hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2 group">
                      <LogOut size={18} className="group-hover:text-red-400 transition-colors" />
                      <span className="text-sm font-bold">LOGOUT FROM ALL OTHER DEVICES</span>
                    </button>
                  </section>
                )}

                {activeTab === 'AI Engine' && (
                  <section className="space-y-8">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <Cpu className="text-cyan-primary" />
                      Neural Engine Configuration
                    </h3>
                    
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-primary/10 via-space to-violet-primary/10 border border-white/10 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Database size={200} />
                      </div>
                      
                      <div className="relative z-10 space-y-10">
                        <div className="space-y-6">
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-sm font-bold mb-1">Threat Detection Sensitivity</p>
                              <p className="text-xs text-gray-500">Higher sensitivity increases security but may cause false positives.</p>
                            </div>
                            <span className="text-cyan-primary font-mono font-bold">BALANCED</span>
                          </div>
                          <div className="relative h-2 bg-white/5 rounded-full">
                            <div className="absolute h-full bg-gradient-to-r from-cyan-primary to-violet-primary rounded-full w-[65%]" />
                            <div className="absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg cursor-pointer" />
                          </div>
                          <div className="flex justify-between text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                            <span>Minimal</span>
                            <span>Standard</span>
                            <span>Paranoid</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {[
                            { name: 'Predictive Switching', desc: 'AI switches servers before congestion happens.', active: true },
                            { name: 'Protocol Optimization', desc: 'Neural engine selects best protocol for network.', active: true },
                            { name: 'Smart Ad-Blocking', desc: 'ML-based filtering of malicious domains.', active: true },
                            { name: 'Latency Prediction', desc: 'Forecasts network spikes and reroutes.', active: false, pro: true },
                          ].map((item, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 flex justify-between items-center">
                              <div className="flex-1 pr-4">
                                <div className="flex items-center gap-2">
                                  <p className="text-sm font-bold">{item.name}</p>
                                  {item.pro && <span className="text-[7px] bg-violet-primary/20 text-violet-light px-1.5 py-0.5 rounded font-bold uppercase">PRO</span>}
                                </div>
                                <p className="text-[10px] text-gray-500 leading-tight mt-1">{item.desc}</p>
                              </div>
                              <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${item.active ? 'bg-neon-primary' : 'bg-white/10'}`}>
                                <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${item.active ? 'right-0.5' : 'left-0.5'}`} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="glass p-6 rounded-2xl border-l-4 border-l-cyan-primary">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-cyan-primary/10 rounded-xl">
                          <CheckCircle2 className="text-cyan-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-bold">AI Model Version: Vox-Core v2.5.4</p>
                          <p className="text-xs text-gray-500">Last updated: Today at 04:12 AM. Training data includes 4.2M threat signatures.</p>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {activeTab === 'Profile' && (
                  <section className="space-y-8">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <User className="text-cyan-primary" />
                      Account Profile
                    </h3>
                    
                    <div className="flex items-center gap-8 p-8 glass rounded-3xl border-white/5">
                      <div className="relative group">
                        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-primary to-violet-primary p-1 transition-transform group-hover:scale-105">
                          <div className="w-full h-full rounded-[22px] bg-space flex items-center justify-center overflow-hidden">
                            <img src="https://picsum.photos/seed/voxvpn/400" alt="Avatar" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                          </div>
                        </div>
                        <button className="absolute -bottom-2 -right-2 p-2 bg-white text-space rounded-xl shadow-xl hover:bg-cyan-primary transition-colors">
                          <Monitor size={16} />
                        </button>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-3xl font-bold mb-1">Agent 0x866</h4>
                        <p className="text-gray-400 mb-4">technaser866@gmail.com</p>
                        <div className="flex gap-3">
                          <div className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-gray-400 border border-white/5 uppercase tracking-widest">FREE TIER</div>
                          <div className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-gray-400 border border-white/5 uppercase tracking-widest">MEMBER SINCE 2026</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Display Name</label>
                        <input type="text" defaultValue="Agent 0x866" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-cyan-primary/50 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Email Address</label>
                        <input type="email" defaultValue="technaser866@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-cyan-primary/50 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Timezone</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-cyan-primary/50 appearance-none">
                          <option>UTC+00:00 (London)</option>
                          <option>UTC+01:00 (Berlin)</option>
                          <option>UTC-05:00 (New York)</option>
                          <option>UTC+09:00 (Tokyo)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Language</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-cyan-primary/50 appearance-none">
                          <option>English (US)</option>
                          <option>Deutsch</option>
                          <option>日本語</option>
                          <option>العربية (RTL)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <button className="px-10 py-4 bg-white text-space font-bold rounded-2xl hover:bg-cyan-primary transition-all shadow-lg hover:shadow-cyan-primary/20">SAVE CHANGES</button>
                      <button className="px-10 py-4 glass text-white font-bold rounded-2xl hover:bg-white/5 transition-all">CANCEL</button>
                    </div>
                  </section>
                )}

                {activeTab === 'Network' && (
                  <section className="space-y-8">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <Globe className="text-cyan-primary" />
                      Advanced Network
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="glass p-6 rounded-3xl space-y-4">
                        <div className="flex items-center gap-3 text-cyan-primary">
                          <Wifi size={20} />
                          <h4 className="font-bold">DNS Configuration</h4>
                        </div>
                        <p className="text-xs text-gray-500">Choose your preferred DNS resolver for better privacy and speed.</p>
                        <div className="space-y-2">
                          {['Cloudflare (1.1.1.1)', 'Google (8.8.8.8)', 'Quad9 (9.9.9.9)', 'NextDNS (Custom)'].map((dns, i) => (
                            <label key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                              <input type="radio" name="dns" defaultChecked={i === 0} className="accent-cyan-primary" />
                              <span className="text-sm">{dns}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="glass p-6 rounded-3xl space-y-4">
                        <div className="flex items-center gap-3 text-violet-primary">
                          <Server size={20} />
                          <h4 className="font-bold">VPN Protocol</h4>
                        </div>
                        <p className="text-xs text-gray-500">Select the underlying tunnel technology.</p>
                        <div className="space-y-2">
                          {['WireGuard (Fastest)', 'OpenVPN UDP', 'OpenVPN TCP', 'IKEv2/IPSec'].map((proto, i) => (
                            <label key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                              <input type="radio" name="proto" defaultChecked={i === 0} className="accent-violet-primary" />
                              <span className="text-sm">{proto}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-lg font-bold">Split Tunneling</h4>
                          <p className="text-sm text-gray-400">Route specific application traffic outside the VPN tunnel.</p>
                        </div>
                        <button className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold transition-colors">MANAGE APPS</button>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">IPv6 Support</span>
                            <div className="w-10 h-5 bg-neon-primary rounded-full relative"><div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" /></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">LAN Visibility</span>
                            <div className="w-10 h-5 bg-white/10 rounded-full relative"><div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full" /></div>
                          </div>
                        </div>
                        <div className="space-y-4 text-gray-500">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Dedicated IP</span>
                            <span className="text-[9px] font-bold text-violet-light border border-violet-primary/30 px-2 py-0.5 rounded">PRO ONLY</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Port Forwarding</span>
                            <span className="text-[9px] font-bold text-violet-light border border-violet-primary/30 px-2 py-0.5 rounded">PRO ONLY</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {activeTab === 'Notifications' && (
                  <section className="space-y-8">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <Bell className="text-cyan-primary" />
                      Notification Preferences
                    </h3>
                    
                    <div className="space-y-4">
                      {[
                        { name: 'Security Alerts', desc: 'Get notified when AI detects a potential threat or suspicious packet.', active: true, critical: true },
                        { name: 'Connection Status', desc: 'Notify when VPN connects, disconnects, or switches nodes.', active: false },
                        { name: 'Weekly Privacy Report', desc: 'Receive a summary of your data usage and blocked threats.', active: true },
                        { name: 'System Updates', desc: 'Stay informed about new server locations and app features.', active: true },
                        { name: 'Marketing & Offers', desc: 'Get notified about pro discounts and referral bonuses.', active: false },
                      ].map((n, i) => (
                        <div key={i} className="flex justify-between items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                          <div className="flex-1 pr-8">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-bold">{n.name}</p>
                              {n.critical && <span className="text-[8px] bg-red-400/20 text-red-400 px-1.5 py-0.5 rounded font-bold uppercase">CRITICAL</span>}
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">{n.desc}</p>
                          </div>
                          <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${n.active ? 'bg-neon-primary' : 'bg-white/10'}`}>
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${n.active ? 'right-1' : 'left-1'}`} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <h4 className="text-sm font-bold mb-4">Notification Channels</h4>
                      <div className="flex gap-4">
                        <button className="flex-1 py-3 bg-cyan-primary/10 text-cyan-primary border border-cyan-primary/20 rounded-xl text-xs font-bold">EMAIL</button>
                        <button className="flex-1 py-3 glass rounded-xl text-xs font-bold opacity-50">PUSH (BROWSER)</button>
                        <button className="flex-1 py-3 glass rounded-xl text-xs font-bold opacity-50">DESKTOP APP</button>
                      </div>
                    </div>
                  </section>
                )}

                {activeTab === 'Billing' && (
                  <section className="space-y-8">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <CreditCard className="text-cyan-primary" />
                      Billing & Subscription
                    </h3>
                    
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-violet-primary/20 to-cyan-primary/10 border border-violet-primary/30 flex justify-between items-center">
                      <div>
                        <p className="text-[10px] text-violet-light font-bold uppercase tracking-widest mb-1">Current Plan</p>
                        <p className="text-3xl font-bold mb-2">VoxVPN Free Tier</p>
                        <p className="text-sm text-gray-400 max-w-xs leading-relaxed">Basic protection with 500MB/day limit and standard encryption.</p>
                      </div>
                      <NavLink 
                        to="/subscription"
                        className="px-8 py-4 bg-white text-space font-bold rounded-2xl hover:bg-cyan-primary transition-all shadow-xl hover:shadow-cyan-primary/20"
                      >
                        UPGRADE TO PRO
                      </NavLink>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Transaction History</h4>
                        <button className="text-xs font-bold text-cyan-primary hover:underline">DOWNLOAD ALL (PDF)</button>
                      </div>
                      <div className="glass rounded-3xl overflow-hidden border-white/5">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-white/5 text-gray-400 uppercase text-[10px] font-bold tracking-widest">
                            <tr>
                              <th className="px-8 py-5">Date</th>
                              <th className="px-8 py-5">Description</th>
                              <th className="px-8 py-5">Amount</th>
                              <th className="px-8 py-5">Status</th>
                              <th className="px-8 py-5">Invoice</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-8 py-5 font-mono text-gray-400 text-xs">2026-04-01</td>
                              <td className="px-8 py-5 font-medium">Free Tier Activation</td>
                              <td className="px-8 py-5 font-bold">$0.00</td>
                              <td className="px-8 py-5"><span className="px-2 py-1 bg-neon-primary/10 text-neon-primary text-[10px] font-bold rounded">COMPLETED</span></td>
                              <td className="px-8 py-5"><button className="text-cyan-primary hover:text-white transition-colors"><History size={16} /></button></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                      <div className="p-3 bg-violet-primary/10 rounded-xl">
                        <ShieldCheck className="text-violet-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold">Secure Billing</p>
                        <p className="text-xs text-gray-500">All transactions are encrypted and processed by Stripe. We never store your full card details.</p>
                      </div>
                    </div>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}


