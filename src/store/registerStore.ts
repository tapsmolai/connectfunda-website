import { create } from 'zustand';

export interface RegisterState {
  values: Record<string, string>;
  submitted: boolean;
  setField: (name: string, value: string) => void;
  submit: () => void;
  reset: () => void;
}

/**
 * Register-interest form store.
 * In production, wire `submit` to POST to the Laravel API
 * (e.g. POST /api/partnership-leads) before flipping `submitted`.
 */
export const useRegisterStore = create<RegisterState>((set) => ({
  values: {},
  submitted: false,
  setField: (name, value) => set((s) => ({ values: { ...s.values, [name]: value } })),
  submit: () => set({ submitted: true }),
  reset: () => set({ values: {}, submitted: false }),
}));
