import { createContext } from "solid-js";

export const StyleContext = createContext<{
  target: HTMLElement | null;
}>({
  target: null,
});
