const myName = "munna";
const id = 2014751200;
const section = 'c';
const address = 'Dhaka';
const country = 'bangladesh';
const bookList = ['bangla', 'english', 'math'];
const allData = 'amar nam ' + myName + 'amar id ' + id + " section " + section + '  address  ' + address + ' country ' + country;


const allData1 = `amar nam ${myName} 
amar id ${id}
address ${address} 
country ${country}
book list ${bookList.map(book=>book).join('/')}`
console.log(allData)
console.log(allData1)