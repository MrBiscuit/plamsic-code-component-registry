import React from 'react';

export const TableBody = ({ className, children }) => {
  return (
    <tbody className={className}>
      {children}
    </tbody>
  );
};