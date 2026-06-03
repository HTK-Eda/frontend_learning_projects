const examDate = new Date('November 22, 2026 10:15:00').getTime();

function updateCountdown(){
    const now = new Date().getTime();
    const difference = examDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour *24;

    const d = Math.floor(difference/day);
    const h = Math.floor((difference%day)/hour);
    const m = Math.floor((difference%hour)/minute);
    const s = Math.floor((difference%minute)/second);

    document.getElementById('days').innerText = d<10 ? '0' + d :d;
    document.getElementById('hours').innerText= h<10 ? '0' + h :h;
    document.getElementById('minutes').innerText=m <10 ? '0' + m:m;
    document.getElementById('seconds').innerText= s < 10? '0' + s :s;

    if(difference<0){
        clearInterval(countdownInterval);
        document.querySelector('.container').innerHTML= "<h1>Başarılar! Sınav Vakti Geldi.</h1>";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme ==='dark'){
        themeToggleBtn.innerText = "Aydınlık Mod";
    }
}

themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');

    if(theme === 'light' || !theme){
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerText = "Aydınlık Mod";
        localStorage.setItem('theme', 'dark')
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerText = "Karanlık Mod";
        localStorage.setItem('theme', 'light');
    }
});