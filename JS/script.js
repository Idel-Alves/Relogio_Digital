const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

const relogio = setInterval  (function time() {
    let todaydate = new Date();
    let hrs = todaydate.getHours();
    let min = todaydate.getMinutes();
    let sec = todaydate.getSeconds();

    horas.textContent = formaTime(hrs);
    minutos.textContent = formaTime(min);
    segundos.textContent = formaTime(sec);
});

function formaTime(time) {
    return time < 10 ? `0${time}` : time; 
}