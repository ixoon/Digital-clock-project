

function updatetime(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let meridiem = hours >= 12 ? "PM" : "AM";
    if(hours < 10){
        hours = "0" + hours;
    } 

    if(minutes < 10){
        minutes = "0" + minutes;
    } 

    if(seconds < 10){
        seconds = "0" + seconds;
    } 
    const timestring = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timestring;

}
updatetime();
setInterval(updatetime, 1000);