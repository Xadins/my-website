import React from "react";

export default function Value({ children }) {
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
      <span
        style={{
          border: '1px solid #d4d2d5',
          paddingLeft: '5px',
          paddingRight: '5px',
          paddingTop: '1px',
          paddingBottom: '1px',
        }}
      >
        {newChildren}
      </span>
  );
}