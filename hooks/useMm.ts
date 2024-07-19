import { create } from "zustand";

interface MmState {
  mm: boolean;
  toggleMm: () => void;
  hideMm: () => void;
  showMm: () => void;
}

export const useMm = create<MmState>((set) => ({
  mm: false,
  toggleMm: () => set((state) => ({ mm: !state.mm })),
  hideMm: () => set({ mm: false }),
  showMm: () => set({ mm: true }),
}));
