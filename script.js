let timerElement = document.getElementById('timer');
let bgInput = document.getElementById('bg-input');
let fontSelect = document.getElementById('font-select');

let time = 1 * 10; // 5分のタイマー（秒単位）

function startTimer() {
    let countdown = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        timerElement.textContent = `${minutes}:${seconds}`;
        time--;

        if (time < 0) {
            clearInterval(countdown);
            timerElement.textContent = 'YOU DIED';
            timerElement.classList.add('you-died');

            // タイムアップ時にフォントを変更
            timerElement.style.fontFamily = "Tapestry";
            timerElement.style.color = '#ff0000';  // 色も赤に変更（オプション）
            
            // タイマーが終了したときに背景を変更
            document.body.style.backgroundColor = '#000000'; // 例: 黒色の背景に変更
            // または背景画像を設定
            document.body.style.backgroundImage = 'url(background.jpg)';
        }
    }, 1000);
}

// script.js
document.addEventListener('DOMContentLoaded', () => {
    let bgInput = document.getElementById('bg-input');

    bgInput.addEventListener('change', function() {
        let file = bgInput.files[0];
        if (file) {
            let reader = new FileReader();

            reader.onload = function(e) {
                // 選択した画像を背景画像として設定
                document.body.style.backgroundImage = `url(background.jpg)`;
                document.body.style.backgroundSize = 'cover'; // 背景画像がページ全体を覆うように設定
                document.body.style.backgroundPosition = 'center'; // 背景画像を中央に配置
                document.body.style.backgroundRepeat = 'no-repeat'; // 背景画像が繰り返されないように設定
            }

            // ファイルをData URLとして読み込む
            reader.readAsDataURL(file);
        }
    });
});


// タイマー開始
startTimer();
