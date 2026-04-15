import React, { useState } from 'react';
import { CreditCard, ShieldCheck, Zap, ArrowLeft, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Subscription() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate('/'), 3000);
    }, 2500);
  };

  if (success) {
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-24 h-24 bg-neon-primary/20 rounded-full flex items-center justify-center animate-bounce">
          <ShieldCheck className="text-neon-primary w-12 h-12" />
        </div>
        <h2 className="text-4xl font-bold">UPGRADE SUCCESSFUL</h2>
        <p className="text-gray-400 max-w-md">Your account has been elevated to PRO status. Redirecting to dashboard...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Settings</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CreditCard className="text-cyan-primary" />
              Payment Information
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase font-bold">Card Number *</label>
                    <div className="relative">
                      <input 
                        required
                        type="text" 
                        placeholder="0000 0000 0000 0000"
                        className="w-full bg-space/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-primary/50 font-mono"
                      />
                      <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase font-bold">Expiration *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="MM/YY"
                      className="w-full bg-space/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-primary/50 font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase font-bold">CVV *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="123"
                      className="w-full bg-space/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-primary/50 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase font-bold">First name *</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-space/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase font-bold">Last name *</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-space/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-primary/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase font-bold">Country *</label>
                  <select className="w-full bg-space/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-primary/50 appearance-none">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>Japan</option>
                    <option>Singapore</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase font-bold">Billing address line 1 *</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-space/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase font-bold">Billing address line 2</label>
                  <input 
                    type="text" 
                    className="w-full bg-space/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase font-bold">City *</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-space/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-primary/50"
                  />
                </div>
              </div>

              <button 
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-cyan-primary to-violet-primary text-space font-bold rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-space border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Lock size={18} />
                    <span>SECURE UPGRADE NOW</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="glass rounded-3xl p-8 bg-gradient-to-br from-violet-primary/20 to-transparent border-violet-primary/30">
            <h3 className="text-xl font-bold mb-6">PRO Plan Summary</h3>
            <ul className="space-y-4">
              {[
                'Unlimited Bandwidth',
                '100+ AI-Optimized Nodes',
                'Quantum-Safe Encryption',
                'Priority 24/7 Support',
                'Ad & Malware Blocker',
                'Multi-Device Support (10)'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Zap size={16} className="text-cyan-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Monthly Billing</p>
                  <p className="text-3xl font-bold">$12.99<span className="text-sm font-normal text-gray-500">/mo</span></p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-neon-primary font-bold">SAVE 40%</p>
                  <p className="text-xs text-gray-500 line-through">$19.99</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 flex items-center gap-4">
            <div className="p-3 bg-neon-primary/10 rounded-2xl">
              <ShieldCheck className="text-neon-primary" />
            </div>
            <div>
              <p className="text-sm font-bold">30-Day Money Back</p>
              <p className="text-xs text-gray-500">Risk-free trial guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
