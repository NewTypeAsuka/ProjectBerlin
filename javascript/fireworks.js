import { changeScreen } from './util.js';
import { getGachaResult } from './gacha.js';
import { renderGachaResult } from './gachaFlow.js';

// 변수
const fireworksContainer = document.getElementById("fireworks-container");
const gachaSound = document.getElementById("gacha-sound");

// 폭죽 효과
export function triggerSignComplete() {
    if (fireworksContainer.classList.contains("playing")) return;

    // 폭죽 애니메이션 실행
    fireworksContainer.classList.remove("hidden");
    fireworksContainer.classList.add("playing");
    launchFireworks();

    // 가챠 효과음 재생 추가
    if (gachaSound) {
        gachaSound.currentTime = 0;
        gachaSound.play().catch((e) => {
            console.warn("효과음 재생 실패:", e);
        });
    }

    // 1.5초 뒤 다음 화면으로 전환
    setTimeout(() => {
        const gachaMode = "normal";
        const result = getGachaResult(gachaMode);
        renderGachaResult(result); // 가림막 카드 표시
        changeScreen("step-three-page");

        fireworksContainer.innerHTML = "";
        fireworksContainer.classList.remove("playing");
        fireworksContainer.classList.add("hidden");
    }, 1500);
}

// 폭죽 효과 생성 함수
function launchFireworks() {
    const particleCount = 1000; // 폭죽 입자 수

    for (let i = 0; i < particleCount; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");

        // 각도와 거리 무작위
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 300 + 150;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance * -1;

        firework.style.setProperty('--x', `${x}px`);
        firework.style.setProperty('--y', `${y}px`);
        firework.style.backgroundColor = getRandomColor();
        firework.style.left = `${Math.random() * 100}%`;

        fireworksContainer.appendChild(firework);
    }
}

// 랜덤 색상 함수
function getRandomColor() {
    const colors = ["#ff4081", "#ffd740", "#69f0ae", "#40c4ff", "#7c4dff", "#f06292", "#fff176"];
    return colors[Math.floor(Math.random() * colors.length)];
}