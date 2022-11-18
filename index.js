const homeScore = document.getElementById('home-score'),
guestScore = document.getElementById('guest-score'),
timerH3 = document.getElementById('timer-h3'),
periodH3 = document.getElementById('period-h3'),
homeWrapper = document.getElementById('home-wrapper'),
guestWrapper = document.getElementById('guest-wrapper');
let period = 1, timer = 60 * 12, minutes, seconds, homePoints = 0, guestPoints = 0;

const startTimer = () => {
    setInterval(()=>{
        if(timer >= 0){
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerH3.textContent = minutes + ":" + seconds;
            
            if (--timer < 0) {
                if(period < 4){
                    timer = 60 * 12;
                    period++;
                    periodH3.textContent = '0' + period;
                } else {
                    timer=-1;
                    periodH3.textContent = 'OVER!';
                }
            }
        }
    }, 1000);
};

const addPoint = (point, isHome = true) => {
    if(isHome) {
        homePoints += point;
        homeScore.textContent = homePoints;
    } else {
        guestPoints += point;
        guestScore.textContent = guestPoints;
    }
    if(homePoints > guestPoints) {
        homeWrapper.classList = 'score-wrapper lead-team';
        guestWrapper.classList = 'score-wrapper';
    } else if(homePoints == guestPoints) {
        homeWrapper.classList = 'score-wrapper';
        guestWrapper.classList = 'score-wrapper';
        
    } else {
        homeWrapper.classList = 'score-wrapper';
        guestWrapper.classList = 'score-wrapper lead-team';
    }
};

const newGame = () => {
    homeScore.textContent = '0';
    guestScore.textContent = '0';
    periodH3.textContent = '01';
    period = 1;
    timer = 60 * 12;
    homePoints = guestPoints = 0;
};

window.onload = startTimer();