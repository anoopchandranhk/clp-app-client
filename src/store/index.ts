import { create } from "zustand";
import merge from "lodash.merge";

const useStore = create((set) => ({
  pollResults: {},
  updatePollState: (update: any) =>
    set((state: any) => merge(state.pollResults, update)),
}));

export default useStore;
