//option:2 add onclick function
function purple() {
    document.body.style.backgroundColor = 'purple';

}
//option:3
const blueButton = document.getElementById('sky-blue');
// console.log(redButton);
blueButton.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'DeepSkyBlue';

}


//option:3 another way
const pinkButton = document.getElementById('hotPink');
pinkButton.onclick = hotPink

function hotPink() {
    document.body.style.backgroundColor = 'HotPink';

}