import React from "react";

export default function DMCommand({ children }) {
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
          border: "1px solid #e10000",
          backgroundColor: "#ffe9e9",
          color: "#000",
          paddingLeft: "5px",
          paddingRight: "5px",
          paddingTop: "1px",
          paddingBottom: "1px",
        }}
      >
        {newChildren}
      </span>
    </strong>
  );
}