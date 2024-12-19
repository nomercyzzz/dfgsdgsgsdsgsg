const body = document.querySelector('body');
body.style.opacity = '0'; 
body.style.transition = 'opacity ease-out 3s'; 
/* изменяем свойство opacity элемента body на 1 через 100 миллисекунд */
setTimeout(() => {
    body.style.opacity = '1';
}, 100);