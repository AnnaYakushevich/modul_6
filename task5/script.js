const inputField = document.querySelector('#inputField');
const pressButton = document.querySelector('#mainButton');
const duplicateField = document.querySelector('#duplicateField');

function outputTextToConsole(event) {      
        console.log(inputField.value);
        inputField.value = null;
        duplicateField.textContent = null;
        event.preventDefault();
    }

function duplicateText() {        
        duplicateField.textContent = inputField.value;
    }

inputField.addEventListener('keyup', duplicateText);
pressButton.addEventListener('click', outputTextToConsole);
