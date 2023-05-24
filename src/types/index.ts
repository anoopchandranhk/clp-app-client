export type PollResult = {
  [key: string]: { [key: string]: number };
};
export type ChoiceData = {
  label: string;
  option: string;
  color: string;
};

export type UpdatePollState = (update: PollResult) => void;

export type StoreState = {
  choicesData: ChoiceData[];
  pollResults: PollResult;
  updatePollState: UpdatePollState;
};
