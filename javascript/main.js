import { startCharacterReveal } from './gachaFlow.js';
import { setupSignCanvas } from './sign.js';
import { changeScreen, detectKakaoBrowser } from './util.js';

// 전역 변수
let gachaMode = "normal";
let lastGachaResult = [];
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
        gachaMode = "normal";
        changeScreen("step-two-page");
    });
    gachaPickBtn.addEventListener("click", () => {
        gachaMode = "pick";
        alert("픽업 가챠는 현재 준비 중입니다.");
        // changeScreen("step-two-page");
    });
    gachaFesBtn.addEventListener("click", () => {
        gachaMode = "fes";
        changeScreen("step-two-page");
    });

    // step-three 클릭 시 step-four 이동
    const stepThree = document.getElementById("step-three-page");
    stepThree.addEventListener("click", () => {
        startCharacterReveal(lastGachaResult);
    });
});
