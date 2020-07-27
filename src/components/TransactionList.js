import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import Transaction from './Transaction';

export const TransactionList = () => {
    const { transactions} = useContext(GlobalContext);
    return (
        <React.Fragment>
            <ul className="list">
                {transactions.map(t => <Transaction key={t.id} transaction={t}/>)}
            </ul>
        </React.Fragment>
    )
}
