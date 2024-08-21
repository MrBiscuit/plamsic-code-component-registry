import React from 'react';

export const TableRow = ({ className,children }) => {
  return (
    <tr className = {className}>
      {children}
    </tr>
  );
};