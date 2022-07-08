// План разработки
// 1. Ввод минут в поле импут - готово
// 2. Сделать нажатие кнопки старт - готово
// 3. Скрыть настройки выбора таймера - готово
// 4. Отобразить таймер - готово
// 5. Сделать обратный отсчет - готово
// 6. Уменьшаем минуты, секунды - готово
// 7. Когда таймер равен нулю, то закрываем таймер - готово
// 8. Скрываем таймер- готово 
// 9. Показываем настройки - готово
// 10. По истечению времени должен проигрываться звук и появляться кнопка 
// 11. При нажатии на эту кнопку должен выключаться звук и происходить возврат к настройкам таймера


// Создаю переменную, которая ссылается на кнопку "Start"
var btnStart = document.querySelector('#btnStart');
var screenSettings = document.querySelector('#settings-screen');
var screenTimer = document.querySelector('#timer-screen');
var spanMinutes = document.querySelector('#minutes');
var spanSeconds = document.querySelector('#seconds');
var progressBar = document.querySelector('#loading');

btnStart.onclick = clickStart;

function clickStart() {
    var inputTime = document.querySelector('#inputTime');

    if(inputTime.value != "") {
        startTimer(inputTime.value);
    }
}

function startTimer(minutes) {
    progressBar.style.width = "0%";
    var countSeconds = minutes * 60;
//  nowTime/countSeconds * 100
    screenSettings.style.display = 'none';
    screenTimer.style.display = 'flex';

    var seconds = 59;
    minutes--;

    var timerID = setInterval(
        function() {
            if(seconds < 0) {
                if(minutes == 0) {
                    endTimer(timerID);
                }
                minutes--;
                seconds = 59;
            }
            progressBar.style.width = (countSeconds - (minutes * 60 + seconds))/countSeconds * 100 + "%";
            spanMinutes.innerText = minutes;
            spanSeconds.innerText = seconds;
            seconds--;
        }, 1000
    );
}

function endTimer(timerID) {
    screenSettings.style.display = 'block';
    screenTimer.style.display = 'none';
    clearInterval(timerID);
};