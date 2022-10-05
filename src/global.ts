import { useContext } from "solid-js";
import { StyleContext } from "./StyleContext";
import { css as gooberCss } from "goober";

type GooberCssParams = Parameters<typeof gooberCss>;

export const createGlobalStyles = (
  ...args: GooberCssParams
): (() => string) => {
  return () => {
    const { target } = useContext(StyleContext);
    if (!target) {
      throw new Error("Please use StyleProvider before using css");
    }

    const css = gooberCss.bind({ target, g: 1 });

    return css(...args);
  };
};
