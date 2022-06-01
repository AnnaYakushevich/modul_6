const consoleLog = document.querySelector('#consoleLog');
const alert1 = document.querySelector('#alert1');
const prompt1 = document.querySelector('#prompt1');

consoleLog.addEventListener('click', () => {
    alert('consol.log() служит для вывода сообщения в консоль');
  })

alert1.addEventListener('click', () => { 
    alert('alert() служит для вывода сообщения пользователю');
  })

prompt1.addEventListener('click', () => {
    alert('prompt() служит для вывода диалогового окна с запросом на ввод текста');
  })