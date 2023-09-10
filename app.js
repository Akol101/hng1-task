function updateDateTime(){
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.getTime();


    document.querySelector('[data-testid="currentDayOfWeek"]').textContent = currentDayOfWeek;

    document.querySelector('[data-testid="currentTime"]').textContent = currentUTCTime;
    document.querySelector('[data-testid="currentDate"]').textContent = currentDate;
}

updateDateTime();
setInterval(updateDateTime, 1000);