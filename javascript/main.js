import { setupSignCanvas } from './sign.js';
import { changeScreen, detectKakaoBrowser } from './util.js';
import { gachaState, getGachaResult, lastGachaResult } from './gacha.js';
import { startCharacterReveal } from './gachaFlow.js';  

// 변수
const ponSound = document.getElementById("pon-sound");
const aronaQuotes = [
    "안녕하세요! 아로나입니다!",
    "어서 오세요! 선생님! 준비되셨나요?",
    "3성은 항상 가까이에 있어요!",
    "이번엔 꼭 3성이 나올 거예요!",
    "오늘은 왠지 좋은 예감이 들어요!",
    "3성아~ 나와라~",
    "아로나가 3성을 응원할게요!"
];

// DOMContentLoaded 이벤트 리스너
window.addEventListener("DOMContentLoaded", () => {
    detectKakaoBrowser();
    setupSignCanvas();

    // DOM 요소들 이 시점에서 선언해야 null 방지 가능
    const gachaCommonBtn = document.getElementById("gacha-common-btn");
    const gachaPickBtn = document.getElementById("gacha-pick-btn");
    const gachaFesBtn = document.getElementById("gacha-fes-btn");
    const bgm = document.getElementById("bgm");
    const soundToggleBtn = document.getElementById("sound-toggle-btn");
    const aronaMessage = document.getElementById("arona-message");
    const stepThreePage = document.getElementById("step-three-page");
    const gachaSound = document.getElementById("gacha-sound");

    // 브금 설정
    bgm.volume = 0.5;
    soundToggleBtn.textContent = (bgm.paused || bgm.muted) ? "🔇" : "🔊";

    soundToggleBtn.addEventListener("click", () => {
        if (bgm.paused || bgm.muted) {
            bgm.muted = false;
            bgm.play();
            soundToggleBtn.textContent = "🔊";
        } else {
            bgm.pause();
            soundToggleBtn.textContent = "🔇";
        }
    });

    // 아로나 메시지 갱신
    function updateAronaMessage() {
        const randomIndex = Math.floor(Math.random() * aronaQuotes.length);
        aronaMessage.textContent = aronaQuotes[randomIndex];
    }
    setInterval(updateAronaMessage, 5000);

    // 버튼 클릭 이벤트
    gachaCommonBtn.addEventListener("click", () => {
        gachaState.mode = "normal";
        ponSound.currentTime = 0;
        ponSound.play();
        changeScreen("step-two-page");
    });
    gachaPickBtn.addEventListener("click", () => {
        gachaState.mode = "pick";
        ponSound.currentTime = 0;
        ponSound.play();
        changeScreen("step-two-page");
    });
    gachaFesBtn.addEventListener("click", () => {
        gachaState.mode = "fes";
        ponSound.currentTime = 0;
        ponSound.play();
        changeScreen("step-two-page");
    });

    // 카드 사라지면서 4페이지 전환
    stepThreePage.addEventListener("click", () => {
        const allCards = document.querySelectorAll("#gacha-result-grid .gacha-card");

        gachaSound.currentTime = 0;
        gachaSound.play();

        const isWide = window.innerWidth >= 768;  // 화면 판별

        allCards.forEach((card, index) => {
            card.classList.remove("animate-in");

            let direction;
            if (isWide) {
                direction = index < 5 ? "disappear-up" : "disappear-down";
            } else {
                direction = index % 2 === 0 ? "disappear-left" : "disappear-right";
            }

            card.classList.add(direction);
        });

        setTimeout(() => {
            changeScreen("step-four-page");
            startCharacterReveal(lastGachaResult); // 10장의 결과 전달
        }, 500);
    });
});
