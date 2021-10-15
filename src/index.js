import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

import { useState } from 'react';

function MainScreen() {
    const [totalExpense, setTotalExpense] = useState();
    const [totalAmount, setTotalAmount] = useState(0.00);
    const [purchaseName, setPurchaseName] = useState('');
    const [listExpense, setListExpense] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (totalExpense) {
            const expense = {id: new Date().getTime().toString(), totalExpense, purchaseName };
            setListExpense((payment) =>{
                return [...payment, expense];
            });
            setTotalAmount(totalAmount - totalExpense);
            setTotalExpense(0);
            setPurchaseName('');
        } else {
            console.log('empty expense.')
        }
    }

    return (  
        <>
            <article className='backgroundImg'>
                
                <nav className='navTopBar'>
                    <button className='mainSearchBtn'>Search</button>
                    <input type="text" className='mainSearch'/>
                </nav>
                <header className='homeBar'>
                    <nav>
                        <div className='titleBar'>
                            <h2>Eye Expense Logger</h2>
                        </div>
                        <ul>
                            <p><a href="#">Dashboard</a></p>
                            <p><a href="#">Receipt Inbox</a></p>
                            <p><a href="#">Expenses</a></p>
                            <p><a href="#">Reports</a></p>
                            <p><a href="#">Cards</a></p>
                            <p><a href="#">Advance Payments</a></p>
                            <p><a href="#">Reports Approval</a></p>
                            <p><a href="#">Analytics</a></p>
                            <p><a href="#">Admin</a></p>
                            <p><a href="#">Contact Support</a></p>
                        </ul>
                    </nav>  
                </header>

                <form className='form' onSubmit={handleSubmit}>
                    <h2>Eye Expense</h2>
                    <section className='form-control'>
                        <label htmlFor="totalExpense">Expense : </label>
                        <input 
                        type='text' 
                        id='totalExpense'
                        name='totalExpense'
                        value={totalExpense}
                        onChange={(e) => setTotalExpense(e.target.value)}
                        />
                    </section>
                    <section className='form-control'>
                        <label htmlFor="purchaseName">Purchase Title : </label>
                        <input 
                        type='text' 
                        id='purchaseName'
                        name='purchaseName'
                        value={purchaseName}
                        onChange={(e) => setPurchaseName(e.target.value)}
                        />
                    </section>
                    <button className='btn' type='submit'>Submit</button>
                    <h3 style={{textAlign: 'right'}}>Total Expense: ${totalAmount}</h3>
                </form>
                {
                    listExpense.map((paying) => {
                        const {id, totalExpense, purchaseName} = paying;
                        return (
                            <div className='results' key={id}>
                                <h3 className='resultText'>{purchaseName}</h3>
                                <h3 className='resultText'>Purchase: ${totalExpense}</h3>
                            </div>
                        );
                    })
                }

                <footer>
                    <p>Hello world</p>
                </footer>
            </article>
        </>
    );
}

ReactDom.render(<MainScreen />, document.getElementById('root'));
