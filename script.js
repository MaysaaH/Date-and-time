

const updateDateClock = () => {
    let now = new Date();  
    const day = ('0' + now.getDate()).slice(-2);
        const month = ('0' + (now.getMonth() + 1)).slice(-2);
        const year = now.getFullYear();
        const date = `${day} / ${month} / ${year}`;
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

        if (hours > 12){
        hours -= 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }
  
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

const dateDisplay = document.getElementById('date');
dateDisplay.textContent = date;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
document.getElementById("AM/PM").innerHTML = ampm;

}




setInterval(updateDateClock, 1000);