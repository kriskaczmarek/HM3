const numbers = [12, 23, 54, 123, 22, 90, 53, 80]
const num = numbers.reduce((a, b) => {
	if(b%2===0){
        return a+b
    }else {
        return a-b
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
const numbers1 = [4,1,3,2,12,3,29,4,6,34,16,28];
const nums1 = numbers1.map(a=>a*2).filter(a=>{if (a<40){return a}}).sort((a,b)=>b-a)
console.log(nums1);