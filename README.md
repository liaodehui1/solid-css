# solid-css

A styling tool when using solidjs to custom components

## usage

```ts
import { Component, createSignal } from "solid-js";
import { css, StyleProvider } from "solid-css";

const className = css`
  color: red;
`;

const Child: Component<{ name: string }> = ({ name }) => {
  return (
    <div>
      My name is <span class={className()}>{name}</span>
    </div>
  );
};

export const App: Component<{ name: string }> = ({ name }) => {
  return (
    <StyleProvider>
      <Child name="Tom" />
    </StyleProvider>
  );
};
```
