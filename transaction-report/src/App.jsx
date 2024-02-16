import { useState } from 'react'
import './App.css'
import "./styles.css"
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from "./components/Header";
import IncomeExpense from './components/IncomeExpense';
import TransactionItem from './components/TransactionItem';
import TransactionList from './components/TransactionList';
import GlobalProvider from './context/GlobalState';

function App() {
    const [count, setCount] = useState(0)

    return (
        <GlobalProvider>
        <div className="App">
            <Header />
            <Balance />
            <AddTransaction />
            <IncomeExpense />
            <TransactionItem />
            <TransactionList />
        </div>
        </GlobalProvider>
    )
}

export default App
