import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import Content from './Content'
import { Expense } from './Expense'

import { FETCH_DATA, FAKE_DATA } from './store'

import './App.css'

function App() {
	const content = useSelector((state) => state)
	const dispatch = useDispatch()
	const API_URL =
		'http://track-interview.s3-website-us-east-1.amazonaws.com/meaningless_data.json'

	function getData() {
		return (dispatch) => {
			axios
				.get(API_URL, {
					headers: { 'Access-Control-Allow-Origin': true },
					contentType: 'application/json',
				})
				.then((res) =>
					dispatch({
						type: FETCH_DATA,
						data: res.data,
					}),
				)
		}
	}

	useEffect(() => {
		dispatch(getData())
	}, [])
	return (
		<>
			{/* replace 'content' with 'FAKE_DATA' */}
			{content.data.map((data) => {
				const classExpense = new Expense(data)
				return (
					<Content
						expenseId={data.expenseId}
						amount={data.amount}
						date={data.date}
						expenseType={data.expenseType}
						taxCategory={data.taxCategory}
						description={data.description}
						deductionAmount={data.deductionAmount}
						onClick={() => classExpense.getMoney()}
					/>
				)
			})}
		</>
	)
}

export default App
