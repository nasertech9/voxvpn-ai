import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'error';

interface Server {
  id: string;
  name: string;
  load: number;
  latency: number;
  status: string;
  flag: string;
}

interface VPNState {
  status: ConnectionStatus;
  selectedServer: Server | null;
  ipAddress: string;
  bytesSent: number;
  bytesReceived: number;
  connectionTime: number;
  
  setStatus: (status: ConnectionStatus) => void;
  setSelectedServer: (server: Server) => void;
  connect: () => Promise<void>;
  disconnect: () => void;
  updateMetrics: () => void;
}

export const useVPNStore = create<VPNState>()(
  persist(
    (set, get) => ({
      status: 'disconnected',
      selectedServer: null,
      ipAddress: '192.168.1.1',
      bytesSent: 0,
      bytesReceived: 0,
      connectionTime: 0,

      setStatus: (status) => set({ status }),
      setSelectedServer: (server) => set({ selectedServer: server }),
      
      connect: async () => {
        set({ status: 'connecting' });
        // Simulate connection delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        set({ 
          status: 'connected', 
          ipAddress: `104.28.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
          connectionTime: Date.now()
        });
      },

      disconnect: () => {
        set({ status: 'disconnected', connectionTime: 0 });
      },

      updateMetrics: () => {
        if (get().status === 'connected') {
          set((state) => ({
            bytesSent: state.bytesSent + Math.floor(Math.random() * 1024),
            bytesReceived: state.bytesReceived + Math.floor(Math.random() * 5120),
          }));
        }
      },
    }),
    {
      name: 'voxvpn-storage',
    }
  )
);
