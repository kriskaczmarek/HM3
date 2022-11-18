const financialData = require("./financial.json")

//######How much money was spent in 2014
// console.log("Financial data: " + getFiancialObject().moneySpend2014(2014)) //=>Financial data: 46794.860000000015
//#####	Earnings per company
// console.log(
// 	"Financial data: " + getFiancialObject().spendingsPerCompany("CODAX")
// ) //=>Financial data: 19036.06
// console.log(
// 	"Financial data: " + getFiancialObject().spendingsPerCompany("MANGELICA")
// ) //=>Financial data: 14855.67
// console.log(
// 	"Financial data: " + getFiancialObject().spendingsPerCompany("ECSTASIA")
// ) //=>Financial data: 15695.640000000001
//#####	Spendings per transaction type
// console.log("Financial data: " + getFiancialObject().spendingsPerTransType(1))//Financial data: 14584.609999999997
// console.log("Financial data: " + getFiancialObject().spendingsPerTransType(2))//Financial data: 8999.51
// console.log("Financial data: " + getFiancialObject().spendingsPerTransType(3))//Financial data: 6657.51
// console.log("Financial data: " + getFiancialObject().spendingsPerTransType(4))//Financial data: 10092.039999999999
// console.log("Financial data: " + getFiancialObject().spendingsPerTransType(5))//Financial data: 9253.699999999999
//#####iv.	Spendings by month
// console.log("Financial data: " + getFiancialObject().spendingByMonth(1)) //Financial data: 5276.99
// console.log("Financial data: " + getFiancialObject().spendingByMonth(2)) //Financial data: 3743.67
// console.log("Financial data: " + getFiancialObject().spendingByMonth(3)) //Financial data: 4231.96
// console.log("Financial data: " + getFiancialObject().spendingByMonth(4)) //Financial data: 6041.17
// console.log("Financial data: " + getFiancialObject().spendingByMonth(5)) //Financial data: 4372.4400000000005
// console.log("Financial data: " + getFiancialObject().spendingByMonth(6)) //Financial data: 2596.6099999999997
// console.log("Financial data: " + getFiancialObject().spendingByMonth(7)) //Financial data: 6995.19
// console.log("Financial data: " + getFiancialObject().spendingByMonth(8)) //Financial data: 2532.49
// console.log("Financial data: " + getFiancialObject().spendingByMonth(9)) //Financial data: 3366.28
// console.log("Financial data: " + getFiancialObject().spendingByMonth(10)) //Financial data: 4671.37
// console.log("Financial data: " + getFiancialObject().spendingByMonth(11)) //Financial data: 1880.7
// console.log("Financial data: " + getFiancialObject().spendingByMonth(12)) //Financial data: 3878.5
//#####Spendings per day of the week

function getFiancialObject() {
	const financialObject = {
		moneySpend2014(string) {
			const totalSpendingsIn2014 = financialData
				.filter(el => {
					return el.detailsOfPayent.date.includes(string)
				})
				.reduce((a, b) => {
					a += parseFloat(b.cost)
					return a
				}, 0)
			return totalSpendingsIn2014
		},
		spendingsPerCompany(string) {
			const spendings = financialData
				.filter(el => {
					return el.detailsOfPayent.company === string
				})
				.reduce((a, c) => {
					a += parseFloat(c.cost)
					return a
				}, 0)
			return spendings
		},
		spendingsPerTransType(transactionType) {
			const transactionSpendings = financialData
				.filter(el => {
					return el.detailsOfPayent.Type === transactionType
				})
				.reduce((acc, curr) => {
					acc += +curr.cost
					return acc
				}, 0)
			return transactionSpendings
		},
		spendingByMonth(month) {
			const spendingInMonth = financialData
				.filter(el => {
					const spendingMonth =
						new Date(
							el.detailsOfPayent.date.split("-").reverse().join(",")
						).getMonth() + 1
					return spendingMonth === month
				})
				.reduce((a, c) => {
					a += +c.cost
					return a
				}, 0)
			return spendingInMonth
		},
		spendingPerDayofTheWeek() {},
	}
	// TODO (create functions for calculations below)
	return financialObject
}

// TODO (util functions)
