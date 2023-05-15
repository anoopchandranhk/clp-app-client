import { create, SetState } from "zustand";
import merge from "lodash.merge";
import { PollResult } from "../types/pollResult";

type UpdatePollState = (update: PollResult) => void;

type StoreState = {
  pollResults: PollResult;
  updatePollState: UpdatePollState;
};

const useStore = create<StoreState>((set: SetState<StoreState>) => ({
  pollResults: {},
  updatePollState: (update: PollResult) =>
    set((state: StoreState) => ({
      pollResults: merge(state.pollResults, update),
    })),
}));

export default useStore;
