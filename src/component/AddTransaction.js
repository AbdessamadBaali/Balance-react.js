import React, { useContext, useState } from 'react'
import  { GlobalContext } from '../context/GlobalState';


export default function AddTransaction(){

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  
  const {addTransaction} = useContext(GlobalContext);




  const handelSubmit = e => {
    e.preventDefault();
      if( text.length == 0 || amount == 0)
      {
        alert("please fill the the text and amount !!");
      } else {
        const newTransation = {
          id : Math.floor(Math.random() * 1000),
          text,
          amount : +amount
        }
        addTransaction(newTransation);
      }

    }

  
    return (
      <>
        <h5>Add new transation</h5>
        <hr />
        <form onSubmit={handelSubmit}>
            <div className="mt-2">
                <label htmlFor="text">Text</label>
                <input className="form-control" type="text" placeholder='Enter text...' value={text} 
                 onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="mt-2">
                <label htmlFor="amount">Amount
                  <br /> (negative - expense, positive - income)
                </label>
                <input className="form-control" type="number" placeholder='Enter amount...' value={amount}
                 onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <button className='btn btn-primary my-4'>Add Transaction</button>
        </form>
      </>
    )

}
