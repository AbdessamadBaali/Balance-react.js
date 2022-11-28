import React, { useContext } from 'react'
import  { GlobalContext} from '../context/GlobalState';


export default function Balance() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(item => item.amount);
  const totals = amounts.reduce( (total,item) =>  (total += item),0).toFixed(2);

    return (
      <>
        <h3 id='balance'>YOUR BALANCE</h3>
        <h2>${totals}</h2>
      </>
    )
  
}
