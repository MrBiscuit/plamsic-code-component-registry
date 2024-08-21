import React from 'react';

export const TableCell = ({ className, children, isHeader = false }) => {
    return isHeader ? (
        <th className={className}>
            {children}
        </th>
    ) : (
        <td className={className}>
            {children}
        </td>
    );
};