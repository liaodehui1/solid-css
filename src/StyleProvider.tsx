import { ParentComponent } from "solid-js";
import { StyleContext } from "./StyleContext";

export const StyleProvider: ParentComponent = (props) => {
  const style = document.createElement("style");

  return (
    <StyleContext.Provider value={{ target: style }}>
      {props.children}
      {style}
    </StyleContext.Provider>
  );
};
