const nameinput = document.querySelector('#input-field');
const button = document.querySelector('button');
const messageBox = document.querySelector('#message-box');


button.addEventListener('click', (e) => {
    const name = nameinput.value;
    const ul = document.createElement('ul');
    const letters = [];
    const li = document.createElement('li');

    console.log(e, name);
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        console.log(element)
        letters[i] = name.charAt(i);
    }

    for (let i = name.length - 1; i > -1; i--) {
        li.textContent += letters[i];
    }
    ul.appendChild(li);
    messageBox.appendChild(ul);

});