const inputEl = document.querySelector('.name');
const buttonEl = document.querySelector('#button');
const resultEl = document.querySelector('.result');
const inputE2 = document.querySelector('.mail');
const inputE3 = document.querySelector('.tel');
const inputE4 = document.querySelector('#gender');


let items = [];

buttonEl.addEventListener('click', () => {
    const info={name:inputEl.value,mail:inputE2.value,phone:inputE3.value,gender:inputE4.value}
    const itemsFromStorage = localStorage.getItem('items');
    let users=[];
    if(itemsFromStorage){
    users = JSON.parse(itemsFromStorage);
       }
    users.push(info);
    localStorage.setItem('items', JSON.stringify(users));
    
    
    inputEl.value = '';
    inputE2.value = '';
    inputE3.value = '';
    inputE4.value = '';
    renderItems(users);
    
    inputEl.focus();
});

const renderItems = (list) => {
    const liItems = list.map(item => `<tr>
    <td> ${item.name}</td>
    <td> ${item.mail}</td>
    <td> ${item.gender}</td>
    <td> ${item.phone}</td>
    <td><input type="button" value="edit" ><input type="button" value="delete"></td>
   </tr>`).join('');
    
    resultEl.innerHTML = `
    <table border=1>
    <tr><th>name</th><th>mail</th><th>phone</th><th>gender</th><th>actions</th></tr>   
    ${liItems}
    `;
};

const checkStorage = () => {
    const itemsFromStorage = localStorage.getItem('items');
    if(itemsFromStorage){
        const parsedItemList = JSON.parse(itemsFromStorage);
        
        renderItems(parsedItemList);
        
}
}

checkStorage();