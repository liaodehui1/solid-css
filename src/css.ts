import { css as gooberCss } from "goober";
import { useContext } from "solid-js";
import { StyleContext } from "./StyleContext";

type GooberCssParams = Parameters<typeof gooberCss>;

export const css = (...args: GooberCssParams): (() => string) => {
  return () => {
    const { target } = useContext(StyleContext);
    if (!target) {
      throw new Error("Please use StyleProvider before using css");
    }

    const css = gooberCss.bind({ target });

    const styleString = css(...args);

    return styleString;
  };
};
