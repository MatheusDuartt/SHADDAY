

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const diaElement = document.getElementById('dia');
const mesElement = document.getElementById('mês');
const anoElement = document.getElementById('ano');




function timeNew(){
const date = new Date();

const dia = String(date.getDate()).padStart(2,'0');
const mes = String(date.getMonth()+1);
const ano = String(date.getFullYear())


const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

hoursElement.textContent = fixtime(hours);
minutesElement.textContent = fixtime(minutes);
secondsElement.textContent = fixtime(seconds);

diaElement.textContent = dia;
mesElement.textContent = mes;
anoElement.textContent = ano;
}


function fixtime(time){
    return time < 10 ? '0'+time : time
    
}

timeNew()
setInterval(timeNew,1000)


    
const rotaElement  = document.getElementById('forms1')

