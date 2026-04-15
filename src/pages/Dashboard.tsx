import React, { useEffect, useState } from 'react';
import { 
  Shield, 
  Activity, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  MapPin,
  Lock,
  Zap
} from 'lucide-react';
import { useVPNStore } from '../store/vpnStore';
import { formatBytes, formatDuration } from '../lib/utils';
import { motion } from 'motion/react';

import Globe from '../components/Globe';

export default function Dashboard() {
  const { status, selectedServer, ipAddress, bytesSent, bytesReceived, connectionTime, connect, disconnect, updateMetrics } = useVPNStore();
  const [timer, setTimer] = useState('00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      updateMetrics();
      if (status === 'connected') {
        setTimer(formatDuration(connectionTime));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [status, connectionTime, updateMetrics]);

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">System Overview</h2>
          <p className="text-gray-400">Welcome back, Agent. Your connection is <span className={status === 'connected' ? 'text-neon-primary' : 'text-red-400'}>{status}</span>.</p>
        </div>
        <div className="flex gap-4">
          <div className="glass px-4 py-2 rounded-xl flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-neon-primary animate-pulse" />
            <span className="text-sm font-mono text-gray-300">AI THREAT DETECTION ACTIVE</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Connection Control */}
        <div className="lg:col-span-2 glass rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <Globe />
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Current IP Address</p>
                <h3 className="text-2xl font-mono font-bold text-cyan-primary">{ipAddress}</h3>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Location</p>
                <h3 className="text-xl font-bold text-white flex items-center gap-2 justify-end">
                  <MapPin className="w-5 h-5 text-violet-primary" />
                  {selectedServer ? selectedServer.name : 'Not Selected'}
                </h3>
              </div>
            </div>

            <div className="flex flex-col items-center py-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={status === 'connected' ? disconnect : connect}
                className={`w-48 h-48 rounded-full flex flex-col items-center justify-center transition-all duration-500 relative ${
                  status === 'connected' 
                    ? 'bg-neon-primary/10 border-4 border-neon-primary shadow-[0_0_50px_rgba(0,255,136,0.3)]' 
                    : status === 'connecting'
                    ? 'bg-cyan-primary/10 border-4 border-cyan-primary animate-pulse'
                    : 'bg-white/5 border-4 border-white/10 hover:border-white/20'
                }`}
              >
                <Zap className={`w-12 h-12 mb-2 ${status === 'connected' ? 'text-neon-primary' : 'text-white'}`} />
                <span className="font-bold text-lg tracking-widest">
                  {status === 'connected' ? 'DISCONNECT' : status === 'connecting' ? 'CONNECTING' : 'CONNECT'}
                </span>
                {status === 'connected' && (
                  <div className="absolute -bottom-12 text-neon-primary font-mono text-xl font-bold">
                    {timer}
                  </div>
                )}
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-primary/10 text-cyan-primary">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Upload</p>
                  <p className="text-sm font-bold font-mono">{formatBytes(bytesSent)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-violet-primary/10 text-violet-primary">
                  <ArrowDownLeft className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Download</p>
                  <p className="text-sm font-bold font-mono">{formatBytes(bytesReceived)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neon-primary/10 text-neon-primary">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Latency</p>
                  <p className="text-sm font-bold font-mono">{selectedServer ? selectedServer.latency : 0} ms</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Status */}
        <div className="space-y-6">
          <div className="glass rounded-3xl p-6 flex flex-col justify-between h-[280px]">
            <div className="flex justify-between items-start">
              <h3 className="font-bold">Security Score</h3>
              <div className="px-2 py-1 bg-neon-primary/20 text-neon-primary text-[10px] font-bold rounded uppercase">Excellent</div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364" strokeDashoffset="36" className="text-neon-primary transition-all duration-1000" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold">94</span>
                  <span className="text-[10px] text-gray-500 uppercase">Points</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center">AI detected 0 threats in the last 24 hours.</p>
          </div>

          <div className="glass rounded-3xl p-6 bg-gradient-to-br from-cyan-primary/10 to-transparent">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-cyan-primary text-space">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Quantum Guard</h3>
                <p className="text-xs text-gray-400">Post-quantum encryption active</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-primary w-3/4" />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-gray-500">
                <span>AES-256-GCM</span>
                <span>ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
