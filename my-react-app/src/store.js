export const FETCH_DATA = 'FETCH_DATA'

function reducer(state = { data: '' }, action) {
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				data: action.data,
			}
		default:
			return state
	}
}

export default reducer

export const FAKE_DATA = {
	data: [
		{
			expenseId: 'expenseId_12F7B1FBA298F0154D1906F18AF8C8D97FDCBD28',
			amount: 123.54,
			date: '2019-05-12',
			expenseType: 'business',
			taxCategory: 'Supplies',
			description: 'Pen and paper',
			deductionAmount: 123.54,
		},
		{
			expenseId: 'expenseId_357A495DB2C7F905E5DDDFD03B12029D8FB99084',
			amount: 222.34,
			date: '2019-05-13',
			expenseType: 'personal',
			description: 'Daycare',
			deductionAmount: 0,
		},
		{
			expenseId: 'expenseId_FBA298F0154D19012F7B16F18AF8C8D97FDCBD28',
			amount: 99.89,
			date: '2019-7-12',
			expenseType: 'business',
			taxCategory: 'Supplies',
			description: 'Printer Ink',
			deductionAmount: 99.89,
		},
		{
			expenseId: 'expenseId_C7F905E5DDDFD03B12029D357A495DB28FB99084',
			amount: 1222.34,
			date: '2019-08-13',
			expenseType: 'personal',
			description: 'Burrito',
			deductionAmount: 0,
		},
	],
}
