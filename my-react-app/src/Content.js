import React from 'react'

export default function Content({
	expenseId,
	amount,
	date,
	expenseType,
	taxCategory,
	description,
	deductionAmount,
	onClick,
}) {
	return (
		<ul onClick={onClick}>
			<li>ExpenseId: {expenseId}</li>
			<li>Amount: {amount}</li>
			<li>Date: {date}</li>
			<li>Expense Type: {expenseType}</li>
			{taxCategory && <li>Tax Category: {taxCategory}</li>}
			<li>Description: {description}</li>
			<li>Deduction Amount: {deductionAmount}</li>
		</ul>
	)
}
