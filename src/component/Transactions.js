import React, { useContext } from 'react'
import  { GlobalContext } from '../context/GlobalState';


export default function Transactions(props) 
{
    const  {deleteTransaction}  = useContext(GlobalContext);
    const sign = props.amount < 0 ? '-' : '+';

    return (
    <li  className={props.color} >
        {props.text}
        <span>{sign}${Math.abs(props.amount)}</span>
        <button className='delete-btn'
        onClick={() => deleteTransaction(props.id)}>
            <i className="fa-solid fa-trash"></i>
        </button>
    </li>
    )
             
}
