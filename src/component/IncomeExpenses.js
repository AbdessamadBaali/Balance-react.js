import React, { useContext } from 'react'
import  { GlobalContext} from '../context/GlobalState';


export default function IncomeExpenses() {
 
    const {transactions} = useContext(GlobalContext);

    const income = transactions
      .filter(item => item.amount > 0)
      .reduce( (total,item) =>  (total += item.amount),0);

    const expense= transactions
      .filter(item => item.amount < 0)
      .reduce( (total,item) =>  (total += item.amount),0);
    
    return (
      <div id='encomeExpenses'>
        <div>
            <h5>INCOME</h5>
            <h5 id='income' className='text-center'>{income}</h5>
        </div>
        <div>
            <h5>EXPENSE</h5>
            <h5 id='expense' className='text-center'>{Math.abs(expense)}</h5>
        </div>
      </div>
    )
  
}
