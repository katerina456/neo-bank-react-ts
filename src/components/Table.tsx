import React from "react";

import "../styles/table.scss";

const Table: React.FC = () => {
    return (
        <table className="table">
            <thead>
                <tr className="table__row table__header">
                    <th>NUMBER</th>
                    <th>DATE</th>
                    <th>TOTAL PAYMENT</th>
                    <th>INTEREST PAYMENT</th>
                    <th>DEBT PAYMENT</th>
                    <th>REMAINING DEBT</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table__row">
                    <td>0</td>
                    <td>19-08-2022</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>230500</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;