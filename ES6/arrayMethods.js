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
//map function return function returns array

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