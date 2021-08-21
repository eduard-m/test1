$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        items:1,
        center: true,
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500
    });
});

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let thirtyMinutes = 60 * 30,
        display = document.querySelector('#time');
    startTimer(thirtyMinutes, display);
};

const inputName = document.querySelector('#name'),
      spanName = document.querySelector('.exm-name'),
      inputPhone = document.querySelector('#phone'),
      spanPhone = document.querySelector('.exm-phone');

inputName.addEventListener('click', () => {
    if (!spanName.classList.contains('show')) {
        spanName.classList.add('show');
        spanName.classList.remove('hide');
    }
});

inputPhone.addEventListener('click', () => {
    if (!spanPhone.classList.contains('show')) {
        spanPhone.classList.add('show');
        spanPhone.classList.remove('hide');
    }
});

inputPhone.addEventListener('input', 
    function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
);
