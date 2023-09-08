import React, { useEffect, useMemo } from "react";

import "../styles/table.scss";
import arrow from '../icons/arrow_drop_down.svg'


const Table: React.FC = () => {
    const [tableInfo, setTableInfo] = React.useState<any[]>([]);

    const [sortParam, setSortParam] = React.useState(['number', 'down']);

    function sortTable() {
        setTableInfo(prevTable => {
            if (sortParam[1] === 'down') {
                let obj = prevTable.sort((a, b) => (a[sortParam[0]] < b[sortParam[0]] ? -1 : 1));
                return obj;
            } else {
                let obj = prevTable.sort((a, b) => (a[sortParam[0]] > b[sortParam[0]] ? -1 : 1));
                return obj;
            }
            
        })
        return tableInfo;
    }

    function changeTable(event:any, name: string) {
        event.target.classList.toggle('table__arrow');
        let order = event.target.classList.contains('table__arrow')? 'up' : 'down'
        setSortParam([name, order]);
    }

    const array: any[] = useMemo(() => sortTable(), [sortParam, tableInfo]);

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
                    <th>
                        <div onClick={(event) => changeTable(event, 'number')}>
                            NUMBER <img src={arrow} alt="" />
                        </div>
                    </th>
                    <th>
                        <div onClick={(event) => changeTable(event, 'date')} className="table__arrow">
                            DATE <img src={arrow} alt="" />
                        </div>
                    </th>
                    <th>
                        <div onClick={(event) => changeTable(event, 'totalPayment')} className="table__arrow">
                            TOTAL PAYMENT <img src={arrow} alt="" />
                        </div>
                    </th>
                    <th>
                        <div onClick={(event) => changeTable(event, 'interestPayment')} className="table__arrow">
                            INTEREST PAYMENT <img src={arrow} alt="" />
                        </div>
                    </th>
                    <th>
                        <div onClick={(event) => changeTable(event, 'debtPayment')} className="table__arrow">
                            DEBT PAYMENT <img src={arrow} alt="" />
                        </div>
                    </th>
                    <th>
                        <div onClick={(event) => changeTable(event, 'remainingDebt')} className="table__arrow">
                            REMAINING DEBT <img src={arrow} alt="" />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    tableInfo !== undefined && array.map(item => <tr className="table__row" key={item.date}>
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