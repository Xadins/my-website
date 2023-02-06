import React from "react";

export default function Dfield({ children }) {
  const childrenArray = React.Children.toArray(children);
  const newChildren = childrenArray.map((child) => {
    if (typeof child === "string") {
      return (
        <span
          dangerouslySetInnerHTML={{ __html: child.replace(/ /g, "&nbsp;") }}
        />
      );
    }
    return child;
  });

  return (
    <strong>
      <span
        style={{
          border: '1px solid #4d4d4d',
          paddingLeft: '5px',
          paddingTop: '1px',
          paddingBottom: '1px',
        }}
      >
        {newChildren}&nbsp;▾
      </span>
    </strong>
  );
}