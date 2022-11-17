const numbers = [12, 23, 54, 123, 22, 90, 53, 80]
const num = numbers.reduce((a, b) => {
	if (b % 2 === 0) {
		a.push(b)
		return a
	}
	return a
}, [])
console.log(num)
