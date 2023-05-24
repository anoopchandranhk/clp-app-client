import { create, SetState } from "zustand";
import merge from "lodash.merge";
import { PollResult, StoreState } from "../types";
import { choices } from "../config/choices";

const useStore = create<StoreState>((set: SetState<StoreState>) => ({
  choicesData: choices,
  pollResults: {},
  updatePollState: (update: PollResult) =>
    set((state: StoreState) => ({
      pollResults: merge(state.pollResults, update),
    })),
}));

export default useStore;
