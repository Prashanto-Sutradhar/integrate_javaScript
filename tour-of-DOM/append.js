// console.log('append js');
// 1.where  to add....
const friendsList = document.getElementById('friend-list')
    // console.log(friendsList);
    //2.what to added......
const li = document.createElement('li');
li.innerText = 'sutradhar';
//3.add  the child
friendsList.appendChild(li);



//where add
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);
//2.what to add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'birani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3)

const li4 = document.createElement('li');
li4.innerText = 'cocaCola'
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);


//set innerHtml directly.........
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `<h1>My dress section</h1>
<ul>
                <li>shirt</li>
                <li> pant</li>
                <li> Shirt</li>
            </ul>
`
mainContainer.appendChild(sectionDress);