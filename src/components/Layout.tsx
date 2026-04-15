import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-space">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 relative">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
        
        {/* Background Decorative Elements */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-cyan-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="fixed bottom-0 left-64 w-[400px] h-[400px] bg-violet-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      </main>
    </div>
  );
}
