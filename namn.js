const nameinput = document.querySelector('#input-field');
const button = document.querySelector('button');
const messageBox = document.querySelector('#message-box');


button.addEventListener('click', (e) => {
    const name = nameinput.value;
    console.log(e, name);
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        console.log(element)
    }
    
    

    let message = document.createElement('p');

    message.textContent = {};
    messageBox.appendChild(message);

});