import React, { useContext } from 'react'
import  { GlobalContext} from '../context/GlobalState';
import Transactions from './Transactions'

function TransactionList() {

    const {transactions} = useContext(GlobalContext);
    
    return (
      <>
        <h3 className='history'>History</h3>
        <hr />
        <ul className='list'>
          {
             transactions.map( function(item) {
              
              return (<Transactions key={item.id} text={item.text} amount={item.amount} color={(item.amount < 0) ? 'border-danger' : 'border-success'} />
              )

            })
          }
        </ul>
      </>
    );
  
}
export default TransactionList;
