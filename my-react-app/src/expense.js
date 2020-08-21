export class Expense {
	constructor(data) {
		this.data = data
	}

	getMoney() {
		alert(this.data.expenseId)
	}
}
