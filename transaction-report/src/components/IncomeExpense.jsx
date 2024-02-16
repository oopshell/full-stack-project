import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";


const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    // const [income, setIncome] = useState(0);
    // const [expense, setExpense] = useState(0);
    // useEffect(() => {
    //     const amounts = transactions.map(transaction => transaction.amount);
    //     const incomeAmounts = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
    //     const expenseAmounts = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0);
    //     setIncome(incomeAmounts);
    //     setExpense(expenseAmounts);
    // }, [transactions]);
    const [report, setReport] = useState({income: 0, expense: 0});
    useEffect(() => {
        const amounts = transactions.map(transaction => transaction.amount);
        const incomeAmounts = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
        const expenseAmounts = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
        setReport({income: incomeAmounts, expense: expenseAmounts});
    }, [transactions]);
    return (
        <div className="report-container">
            <div>
                <h4>Income</h4>
                <p className="amount plus">${report.income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="amount minus">${report.expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense;