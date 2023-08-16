export type CounterState = {
  count: number;
};

export type ActionType = {
  type: "increment" | "decrement" | "reset";
  payload: number;
};
export type ResetType = {
  type: "reset";
};
