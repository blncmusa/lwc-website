import { create } from 'zustand';

interface ScrollStoreState {
  aboutSectionRef: HTMLElement | null;
  setAboutSectionRef: (ref: HTMLElement | null) => void;
  scrollToAbout: () => void;
}

const useScrollStore = create<ScrollStoreState>((set) => ({
  aboutSectionRef: null,
  setAboutSectionRef: (ref) => set({ aboutSectionRef: ref }),
  scrollToAbout: () => {
    set((state) => {
      if (state.aboutSectionRef) {
        state.aboutSectionRef.scrollIntoView({ behavior: 'smooth' });
      }
      return state; // Return the current state to satisfy the type requirement
    });
  },
}));

export { useScrollStore };
