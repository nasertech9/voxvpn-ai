import React, { useEffect, useState } from 'react';
import { Search, Globe, Zap, Shield, Filter, RefreshCw } from 'lucide-react';
import { useVPNStore } from '../store/vpnStore';
import axios from 'axios';
import { motion } from 'motion/react';

interface Server {
  id: string;
  name: string;
  load: number;
  latency: number;
  status: string;
  flag: string;
}

export default function Servers() {
  const [servers, setServers] = useState<Server[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const { selectedServer, setSelectedServer, status } = useVPNStore();

  const fetchServers = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/servers');
      setServers(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServers();
  }, []);

  const filteredServers = servers.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Global Network</h2>
          <p className="text-gray-400">Select from our high-speed, AI-optimized server nodes.</p>
        </div>
        <button 
          onClick={fetchServers}
          className="p-3 glass rounded-xl hover:bg-white/10 transition-colors"
        >
          <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </header>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search by city or country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-cyan-primary/50 transition-colors"
          />
        </div>
        <button className="px-6 glass rounded-2xl flex items-center gap-2 hover:bg-white/10 transition-colors">
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-32 glass rounded-3xl animate-pulse" />
          ))
        ) : (
          filteredServers.map((server) => (
            <motion.div
              layout
              key={server.id}
              onClick={() => setSelectedServer(server)}
              className={`p-6 glass rounded-3xl cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                selectedServer?.id === server.id ? 'border-cyan-primary/50 bg-cyan-primary/5 shadow-lg shadow-cyan-primary/10' : 'hover:border-white/20'
              }`}
            >
              {selectedServer?.id === server.id && (
                <div className="absolute top-0 right-0 p-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-primary shadow-[0_0_10px_rgba(0,212,255,1)]" />
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{server.flag}</span>
                  <div>
                    <h3 className="font-bold text-lg">{server.name}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{server.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-neon-primary">
                    <Zap className="w-4 h-4" />
                    <span className="font-mono font-bold">{server.latency}ms</span>
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase">Latency</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Server Load</span>
                  <span className={server.load > 80 ? 'text-red-400' : 'text-gray-300'}>{server.load}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      server.load > 80 ? 'bg-red-400' : server.load > 50 ? 'bg-yellow-400' : 'bg-neon-primary'
                    }`}
                    style={{ width: `${server.load}%` }}
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <div className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-gray-400">P2P SUPPORTED</div>
                <div className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-gray-400">OBFUSCATION</div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
