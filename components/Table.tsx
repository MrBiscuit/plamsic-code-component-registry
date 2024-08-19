import React from 'react';

export const Table = ({ children }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      {children}
    </table>
  );
};