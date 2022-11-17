const numbers = [12, 23, 54, 123, 22, 90, 53, 80]
const num = numbers.reduce((a, b) => {
	if (b % 2 === 0) {
		return a + b
	} else {
		return a - b
	}
}, 0)
//console.log(num)
const people = [{ name: "Feliks" }, { name: "Borys" }, { name: "Wacek" }]
const names = people.reduce((a, b) => {
	a.push(b.name)
	return a
}, [])
//console.log(names);

//muliply every el by2, find only less than 40, sort desc.
const numbers1 = [4, 1, 3, 2, 12, 3, 29, 4, 6, 34, 16, 28]
const nums1 = numbers1
	.map(a => a * 2)
	.filter(a => {
		if (a < 40) {
			return a
		}
	})
	.sort((a, b) => b - a)
//console.log(nums1);

const characters = require("./characters.json")
const episodes = require("./episodes.json")
const locations = require("./locations.json")

const dead = characters.filter(a => {
	let b = 0
	if (a.status === "Dead") {
		b++
	}
	return b
})
//console.log(dead)

function findStatus(live) {
	const counter = characters.reduce((a, c) => {
		if (c.status === live) {
			return a + 1
		}
		return a
	}, 0)
	return counter
}
//console.log(findStatus("Dead"))
//console.log(findStatus("Alive"))
// const charOnEarth = characters
// 	.reduce((a, c) => {
// 		if (c.location.name.includes("Earth (Replacement Dimension)")) {
// 			a.push(c.name)
// 		}
// 		return a
// 	}, [])
// 	.sort()
// console.log(charOnEarth)

function charLivinOn(place) {
	const char = characters
		.filter(el => {
			return el.location.name.includes(place)
		})
		.sort((a, b) => {
			if (a.name > b.name) {
				return 1
			}
			if (a.name < b.name) {
				return -1
			}
			return 0
		})
	return char
}
//console.log(charLivinOn("Earth (Replacement Dimension)").slice(0, 10))

function charCreatedBefore(date) {
	const time = date.getTime()
	const result = characters.filter(el => {
		const characterTime = new Date(el.created).getTime()
		return characterTime < time
	})
	return result
}
const day = new Date(2018, 3, 15)
//console.log(charCreatedBefore(day))

//Count average in given array
const arr = [56.56,33.45,12,45,78,90,5,9]
const arrAverage = arr.reduce((a,c,i,ar)=>{
	a+=c
	if(i===ar.length-1){
		return a/ar.length
	}
	return a
})
console.log(arrAverage);//will be 41.12625