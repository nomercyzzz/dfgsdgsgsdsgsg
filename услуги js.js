/* плавное появление сайта c timeout для изменения стиля элемента 
которое создает задержку перед выполнением кода */
const body = document.querySelector('body');
body.style.opacity = '0'; 
body.style.transition = 'opacity ease-out 3s'; 
/* изменяем свойство opacity элемента body на 1 через 100 миллисекунд */
setTimeout(() => {
    body.style.opacity = '1';
}, 100);


/* модальное окно заяки */
const modal = document.querySelector('.forma');
const btn = document.querySelector('.btn');
const span = document.querySelector('.close');

btn.onclick = function (){
    modal.style.display = "block";
}
span.onclick = function (){
    modal.style.opacity = "0";
}
window.onclick = function (xxx){
    if(xxx.target === modal){
        modal.style.display = "none"
    }
}