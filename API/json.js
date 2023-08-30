const complexObject = {
    id: 1,
    name: 'proshanto',
    info: {
        address: 'dhaka',
        author: {
            frtName: 'jone',
            lastName: 'doe'
        }
    },
    date: {
        value: [10, 20, 30],
        setting: {
            isEnable: true,
            maxItem: 5
        }
    }
}
const stringifiled = JSON.stringify(complexObject)
const complexObjectChange = JSON.parse(stringifiled)

console.log(complexObject);
console.log(stringifiled);
console.log(complexObjectChange);