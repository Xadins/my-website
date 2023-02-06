---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---



## Markdown heading

Markdown text with [links](./hello)

```py
print('Hello world!')
```

:::tip
Here's a tip!
:::

:::danger
Watch out!
:::

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '5px',
      color: '#000',
      padding: '5px',
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !

Press the **<Highlight color="#d4d2d5">OK</Highlight>** button to save your changes.

Press the <Button>Set Curve</Button> button.