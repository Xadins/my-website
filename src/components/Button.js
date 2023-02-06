import React from 'react';

export default function Button({children}) {
  return (
    <span
      style={{
        border: '1px solid #767676',
        backgroundColor: '#efefef',
        color: '#000',
        borderRadius: '2px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '1px',
        paddingBottom: '1px',
      }}>
      {children}
    </span>
  );
}