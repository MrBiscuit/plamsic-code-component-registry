import React from 'react';

export const TableCell = ({ children, isHeader = false }) => {
  return isHeader ? (
    <th>
      {children}
    </th>
  ) : (
    <td>
      {children}
    </td>
  );
};