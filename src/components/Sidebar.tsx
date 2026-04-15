import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Globe, 
  ShieldCheck, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Cpu,
  Zap
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Globe, label: 'Servers', path: '/servers' },
  { icon: Cpu, label: 'AI Intelligence', path: '/ai' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen glass border-r border-white/5 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-primary to-violet-primary rounded-lg flex items-center justify-center shadow-lg shadow-cyan-primary/20">
          <Zap className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tighter text-white">VOXVPN</h1>
          <p className="text-[10px] text-cyan-primary font-mono tracking-widest uppercase">AI-PROTECTED</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group",
              isActive 
                ? "bg-cyan-primary/10 text-cyan-primary border border-cyan-primary/20" 
                : "text-gray-400 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
              "group-[.active]:text-cyan-primary"
            )} />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-primary/20 to-cyan-primary/20 border border-white/5 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
          <div className="relative z-10">
            <p className="text-xs text-violet-light font-medium mb-1">PRO PLAN</p>
            <p className="text-sm text-white font-bold mb-3">Unlimited Speed</p>
            <NavLink 
              to="/subscription"
              className="block w-full py-2 bg-white text-space rounded-lg text-xs font-bold hover:bg-cyan-primary transition-colors text-center"
            >
              UPGRADE NOW
            </NavLink>
          </div>
        </div>
        
        <div className="mt-6 flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
          <HelpCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Support</span>
        </div>
      </div>
    </aside>
  );
}
