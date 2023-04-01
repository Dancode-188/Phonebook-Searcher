const contacts = ['Mom:0703333772', 'Dad:0756920969', 'Siz1:0727253712', 'Bro1:0122773948', 'Siz2:0134232440', 'Bro2:0720052859', 'Bro3:0796956029'];

const paragraph = document.querySelector('p');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click',() =>{
    const searchName = input.value.toLowerCase();

    input.value = '';
    input.focus;
    paragraph.textContent = '';
    contacts.forEach(contact => {
        const splitContact = contact.split(':');
        if (splitContact[0].toLowerCase().includes(searchName)) {
            paragraph.textContent += `${splitContact[0]}'s phone number is ${splitContact[1]}`;
    }
});
       if(paragraph.textContent === ''){
        paragraph.textContent = 'No results found';
       }
});