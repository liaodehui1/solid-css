# solid-css

A styling tool when using solidjs to custom components

## usage

### css

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

### createGlobalStyles

```ts
import { Component } from "solid-js";
import { createGlobalStyles, StyleProvider } from "solid-css";

const getGlobalStyles = createGlobalStyles`
  span {
    color: green;
  }
`;

const Child: Component<{ name: string }> = ({ name }) => {
  getGlobalStyles();

  return (
    <div>
      My name is <span>{name}</span>
    </div>
  );
};

export const Global: Component<{ name: string }> = ({ name }) => {
  return (
    <StyleProvider>
      <Child name={name} />
    </StyleProvider>
  );
};
```
