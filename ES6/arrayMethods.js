//forEach, Map,Find,Filter,Reduce


const arr = [1, 2, 3, 4];
for (let item of arr) {
    console.log(" first loop", item);
}

for (let i = 0; i < arr.length; i++) {
    console.log(' second loop', arr[i]);


}


//forEach
const arr2 = [10, 20, 30, 40];
// const a = (x) => console.log(x)
arr2.forEach(x => console.log(x));


const fruits = ['mango', 'bango', 'tango'];
fruits.forEach(item => {
    console.log(item);
})

//.......sum............
const arr3 = [10, 20, 30, 40];
let sum = 0;
arr3.forEach(item => {
    sum = sum + item;
})
console.log(sum);





//forEach function return nothing;
//map function return function  an  array

const resutl3 = arr3.forEach((item) => console.log(item))
console.log(resutl3);

const resutl4 = arr3.map((item) => {
    return item * 5
})
console.log(resutl4);


const fruits3 = ['mango', 'bango', 'tango'];
fruits.map((item, index, arr) => {
    console.log(item, index, arr);
})



//array.forEach ((element,index,mainArray)=>{})

const fruits1 = ['mango', 'bango', 'tango'];
fruits.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


//find method...............


const friends = ['munna', 'abid', 'jitu', 'himu'];
const find = (parameter) => {
    for (let item of friends) {
        if (item === 'munna') {
            return 'okay'
        } else {
            return 'Null'
        }
    }
}
const x = find(friends);
console.log(x);
//find..........
const y = friends.find((item) => item === 'munna');
console.log(y)


//........filter........
//first of all normal way we can see that...........
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filter = numbers1 => {
    const result = [];
    for (let item of numbers1) {

        if (item % 2 === 0) {
            result.push(item)
        }
        return result;
    }

}
const x1 = filter(numbers1)
console.log(x1);

const y1 = numbers1.filter((item) => item % 2 === 0)
console.log(y1);



//............reduce..............
//previous + current value = result;
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum2 = numbers2.reduce((previous, current) => previous + current)
console.log(sum2);


const mul = numbers2.reduce((previous, current) => previous * current)
console.log(mul);