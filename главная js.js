/* видеоплеер )) */
const videos = document.querySelectorAll('.video_xxx');
const buttons_playandstop = document.querySelectorAll('.button_playandstop');
const buttons_stop = document.querySelectorAll('.button_stop');
const buttons_play = document.querySelectorAll('.button_play');

/* т к мы используем querySelectorAll, нам надо немного дополнить код методом for each, 
потому что создается node list. чтобы не писать код для второго видео*/

buttons_playandstop.forEach((button, index) => {
    button.addEventListener('click', () => {
        const video = videos[index]; 
        const button_stop = buttons_stop[index]; 
        const button_play = buttons_play[index];
        if (button_stop.style.opacity === '0') {
            video.play();
            button_play.style.opacity = '0'; 
            button_stop.style.opacity = '1'; 
            button.style.transition = '0.6s ease';
            button.style.transform = 'scale(1.2)';
        } else {
            video.pause();
            button_play.style.opacity = '1'; 
            button_stop.style.opacity = '0'; 
            button.style.transform = 'scale(1)';
        }
    });

    /* Убедимся, что кнопка остановки изначально скрыта */
    const button_stop = buttons_stop[index];
    button_stop.style.opacity = '0';
     /* Скрываем кнопку остановки при загрузке */
});


/* плавное появление сайта c timeout для изменения стиля элемента 
которое создает задержку перед выполнением кода */
const body = document.querySelector('body');
body.style.opacity = '0'; 
body.style.transition = 'opacity ease-out 3s'; 
/* изменяем свойство opacity элемента body на 1 через 100 миллисекунд */
setTimeout(() => {
    body.style.opacity = '1';
}, 100);
