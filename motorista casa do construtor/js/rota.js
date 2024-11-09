const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');


function timeNew(){
    const date = new Date();

const hours = date.getHours();
const minutes = date.getMinutes();


hoursElement.textContent = fixtime(hours);
minutesElement.textContent = fixtime(minutes);

}


function fixtime(time){
    return time < 10 ? '0'+time : time
    
}

timeNew()
setInterval(timeNew,1000)