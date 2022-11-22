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
//1-Monday,2-Tuesday,3-Wednesday,4-Thursday,5-Friday,6-Saturday,7-Sunday

// console.log("Financial data: " + getFiancialObject().spendingPerDayofTheWeek(1)) //Financial data: 5552.29
// console.log("Financial data: " + getFiancialObject().spendingPerDayofTheWeek(2)) //Financial data: 9674.619999999999
// console.log("Financial data: " + getFiancialObject().spendingPerDayofTheWeek(3)) //Financial data: 9211.930000000002
// console.log("Financial data: " + getFiancialObject().spendingPerDayofTheWeek(4)) //Financial data: 12557.249999999998
// console.log("Financial data: " + getFiancialObject().spendingPerDayofTheWeek(5)) //Financial data: 5851.7
// console.log("Financial data: " + getFiancialObject().spendingPerDayofTheWeek(6)) //Financial data: 2228.29
// console.log("Financial data: " + getFiancialObject().spendingPerDayofTheWeek(7)) //Financial data: 4511.29

function getFiancialObject() {
	const financialObject = {
		//string is a year in this case 2014
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
		},//string is name of company
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
		//"day" is in fact a number as argument - 1-Monday,2-Tuesday,3-Wednesday,4-Thursday,5-Friday,6-Saturday,7-Sunday
		spendingPerDayofTheWeek(day) {
			const dayOfWeek = financialData
				.filter(el => {
					const weekDay = new Date(
						el.detailsOfPayent.date.split("-").reverse().join(",")
					).getDay()
					if (day === 7) {
						day = 0
					}
					return weekDay === day
				})
				.reduce((a, b) => {
					a += +b.cost
					return a
				}, 0)
			return dayOfWeek
		},
	}
	// TODO (create functions for calculations below)
	return financialObject
}

// TODO (util functions)
//###############################################################################

const films = require("./sw-films.json")
const planets = require("./sw-planets.json")
const people = require("./sw-people.json")
const starships = require("./sw-starships.json")

//count sum of all starships cost from episodes 4-6

function sumAllStarshipsCostFromEpisodes(startEp, endEp) {
	let sum = 0
	const strashipsFromEpisode46 = films
		.filter(filterepisodes46)
		.map(mapStarShips)
		.flat()
	const filteredStarShips = starships.filter(
		filterShipsByURL(strashipsFromEpisode46)
	)
	return filteredStarShips.reduce(reduceByCost, 0)
}

function filterepisodes46(startEp, endEp) {
	return epi => epi.episode_id >= startEp && epi.episode_id <= endEp
}
function mapStarShips(obj) {
	return obj.starships
}
function filterShipsByURL(urlArray) {
	return ship =>
		urlArray.includes(ship.url) && ship.cost_in_credits !== "unknown"
}
function reduceByCost(sum, starship) {
	sum += +starship.cost_in_credits
	return sum
}

// console.log(
// 	"Sum of all starships cost from episodes 4 - 6 is: " +
// 		sumAllStarshipsCostFromEpisodes(4, 6)
// )
//#################################################################

// find the fastest starship you can afford having 8500000 credits

console.log(
	"Fastest ship I can get for up to 8500000 is: " +
		getFastestShipFor(8500000).name
)

function getFastestShipFor(money) {
	let filteredship = starships
		.filter(
			ship =>
				+ship.cost_in_credits <= money &&
				ship.cost_in_credits !== "unknown" &&
				!isNaN(ship.max_atmosphering_speed.replace("km", ""))
		)
		.sort((a, b) => +b.max_atmosphering_speed - +a.max_atmosphering_speed)

	return filteredship[0]
}

//###################################################################
// // find planet name with the lowest difference between the rotation period and orbital period

// console.log(
//   'Planet name with the lowest difference between the rotation period and orbital period is: ' +
//     getPlanetNameWithLowestDifference('rotation_period', 'orbital_period')
// );

// function getPlanetNameWithLowestDifference(key1, key2) {
//   let planetName;
//   // TODO
//   return planetName;
// }

// // map all starships with crew <= 4 that were created between 10 dec 2014 and 15 dec 2014

// console.log(
//   'Ships with max crew of 4 created between 10.12.2014 - 12.12.2014 number is: ' +
//     getCrewShipFrom(4, new Date(2014, 12, 10), new Date(2014, 12, 12)).length
// );

// function getCrewShipFrom(maxCrew, dateStart, dateEnd) {
//   let ship;
//   // TODO
//   return ship;
// }

// // create an array of people’s names from episodes 1 and 5 sorted by the diameter of origin planet low to high

// console.log(
//   'People from ep 1 - 5 sorted by origin planet diameter low to high: ' +
//     getPeopleSortedByOriginPlanetDiameter(1, 5)
// );

// function getPeopleSortedByOriginPlanetDiameter(startEp, endEp) {
//   let people;

//   return people;
// }
