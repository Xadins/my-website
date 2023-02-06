import React from 'react';

export default function Key({children}) {
  return (
    <span
      style={{
        border: '1px solid #4d4d4d',
        backgroundColor: '#d4d2d5',
        color: '#000',
        borderRadius: '5px',
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingTop: '1px',
        paddingBottom: '1px',
      }}>
      <strong>{children}</strong>
    </span>
  );
}