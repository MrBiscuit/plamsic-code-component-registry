import React from 'react';

export const Table = ({ className,children }) => {
  return (
    <table className={className}>
      {children}
    </table>
  );
};