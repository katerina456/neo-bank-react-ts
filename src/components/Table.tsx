import React, { useEffect } from "react";

import "../styles/table.scss";

const Table: React.FC = () => {
    interface St {
        number: string,
        date: string,
        totalPayment: string,
        interestPayment: string,
        debtPayment: string,
        remainingDebt: string
    }
    const [tableInfo, setTableInfo] = React.useState<St[]>([]);

    useEffect(() => {
        fetch(`http://localhost:8080/admin/application/${localStorage.getItem('userId')}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        .then(res => {
            console.log(res.status);
            return res.json();
        })
        .then(data => {
            let arr: any[] = data.credit.paymentSchedule
            setTableInfo(arr);
        })
        .catch(err => {
            console.log(err);
        });
    }, [])
    
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
                {
                    tableInfo !== undefined && tableInfo.map(item => <tr className="table__row" key={item.date}>
                                            <td>{item.number}</td>
                                            <td>{item.date}</td>
                                            <td>{item.totalPayment}</td>
                                            <td>{item.interestPayment}</td>
                                            <td>{item.debtPayment}</td>
                                            <td>{item.remainingDebt}</td>
                                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Table;