import { HomeAnimationStore } from '@/type/store/homeAnimationStore.type';
import { create } from 'zustand';

export const useHomeAnimationStore = create<HomeAnimationStore>(set => {
  return {
    // state
    isHomeAnimation: false,
    animationDuration: 0.3,

    // action
    setIsHomeAnimation: (isHomeAnimation: boolean) => set({ isHomeAnimation }),
  };
});
