const linkName = document.querySelector('#linkName');


function newTextInput() {
   const newText = prompt('Введите новый текст ссылки');
   console.log('Текст ссылки изменен на "' + newText + '"');
   linkName.textContent = newText;
};

linkName.addEventListener('click', newTextInput);