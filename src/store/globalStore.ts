import { create } from "zustand";

import StoreType from "./types";

export const useGlobalStore = create<StoreType>((set) => ({
    rating: null,
    isRatingSubmitted: false,
    setRating: (value) => set({ rating: value }),
    setIsRatingSubmitted: (value) => set({ isRatingSubmitted: value }),
}));
