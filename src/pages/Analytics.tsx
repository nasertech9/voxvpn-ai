import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { Download, Upload, Activity, Globe, Zap } from 'lucide-react';

const trafficData = [
  { time: '00:00', up: 400, down: 2400 },
  { time: '04:00', up: 1200, down: 1800 },
  { time: '08:00', up: 3000, down: 4500 },
  { time: '12:00', up: 2000, down: 3800 },
  { time: '16:00', up: 2780, down: 3908 },
  { time: '20:00', up: 1890, down: 4800 },
  { time: '23:59', up: 2390, down: 3800 },
];

const serverUsageData = [
  { name: 'USA', usage: 85 },
  { name: 'UK', usage: 45 },
  { name: 'Japan', usage: 92 },
  { name: 'Germany', usage: 30 },
  { name: 'Singapore', usage: 65 },
];

export default function Analytics() {
  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold text-white mb-2">Network Analytics</h2>
        <p className="text-gray-400">Real-time traffic monitoring and server performance metrics.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Traffic Chart */}
        <div className="glass rounded-3xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Activity className="text-cyan-primary" />
              Traffic Flow (24h)
            </h3>
            <div className="flex gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-primary" />
                <span className="text-gray-400">DOWNLOAD</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-violet-primary" />
                <span className="text-gray-400">UPLOAD</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorDown" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00d4ff" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorUp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="time" 
                  stroke="#ffffff20" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                />
                <YAxis 
                  stroke="#ffffff20" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => `${value/1000}GB`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a2236', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ fontSize: '12px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="down" 
                  stroke="#00d4ff" 
                  fillOpacity={1} 
                  fill="url(#colorDown)" 
                  strokeWidth={3}
                />
                <Area 
                  type="monotone" 
                  dataKey="up" 
                  stroke="#7c3aed" 
                  fillOpacity={1} 
                  fill="url(#colorUp)" 
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Server Load Chart */}
        <div className="glass rounded-3xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Globe className="text-violet-primary" />
              Global Server Load
            </h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={serverUsageData}>
                <XAxis 
                  dataKey="name" 
                  stroke="#ffffff20" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                />
                <YAxis 
                  stroke="#ffffff20" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#1a2236', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Bar dataKey="usage" radius={[4, 4, 0, 0]}>
                  {serverUsageData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.usage > 80 ? '#f87171' : entry.usage > 50 ? '#fbbf24' : '#00ff88'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Avg Latency', value: '32ms', icon: Activity, color: 'text-cyan-primary' },
          { label: 'Data Saved', value: '1.2 TB', icon: Download, color: 'text-neon-primary' },
          { label: 'Threats Blocked', value: '142', icon: ShieldAlert, color: 'text-violet-primary' },
          { label: 'Uptime', value: '99.99%', icon: Zap, color: 'text-yellow-400' },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-2xl">
            <stat.icon className={`${stat.color} w-6 h-6 mb-4`} />
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl font-bold font-mono">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShieldAlert(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}
