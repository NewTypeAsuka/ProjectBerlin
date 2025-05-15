
// 변수
const gachaOnceBtn = document.getElementById("gacha-once-btn");
const gachaTenBtn = document.getElementById("gacha-ten-btn");
const bgm = document.getElementById("bgm");
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const aronaMessage = document.getElementById("arona-message");
const canvas = document.getElementById("signCanvas");
const ctx = canvas.getContext("2d");
const fireworksContainer = document.getElementById("fireworks-container");

// 브금 컨트롤 버튼 핸들러
document.addEventListener("DOMContentLoaded", () => {
    bgm.volume = 0.5; // 초기 볼륨 설정
    if (bgm.paused) {
        soundToggleBtn.textContent = "🔇";
    }
});
soundToggleBtn.addEventListener("click", () => {
    if (bgm.paused) {
        bgm.play();
        soundToggleBtn.textContent = "🔊";
    } else {
        bgm.pause();
        soundToggleBtn.textContent = "🔇";
    }
});

// 화면 전환 함수
function changeScreen(targetId) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(targetId);
    if (target) {
        target.classList.add("active");
    }
}

// 아로나 랜덤 메시지
const aronaQuotes = [
    "안녕하세요! 오늘도 가챠 운이 좋길 바랄게요!",
    "어서 오세요! 준비되셨나요?",
    "희망은 항상 가까이에 있어요!",
    "이번엔 꼭 3성이 나올 거예요!",
    "오늘은 왠지 좋은 예감이 들어요!",
    "아로나가 당신의 3성을 응원하고 있어요!"
];

function updateAronaMessage() {
    const randomIndex = Math.floor(Math.random() * aronaQuotes.length);
    aronaMessage.textContent = aronaQuotes[randomIndex];
}

setInterval(updateAronaMessage, 5000); // 5초마다 메시지 변경

// 가챠 방식 버튼 핸들러(1회, 10회)
gachaOnceBtn.addEventListener("click", () => {
    // 나중에 필요한 로직 삽입 가능 (1회 뽑기 설정 등)
    changeScreen("step-two-page");
});
gachaTenBtn.addEventListener("click", () => {
    // 나중에 필요한 로직 삽입 가능 (10회 뽑기 설정 등)
    changeScreen("step-two-page");
});

let drawing = false;
let hasDrawn = false;

// 공통 좌표 계산 함수
function getCanvasPos(e) {
    const rect = canvas.getBoundingClientRect();
    if (e.touches) {
        const touch = e.touches[0];
        return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
    } else {
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
}

// 드로잉 함수
function draw(e) {
    if (!drawing) return;
    const pos = getCanvasPos(e);
    ctx.fillStyle = "#007bff";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2);
    ctx.fill();
    hasDrawn = true;
}

// 드로잉 시작/종료
canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => {
    drawing = false;
    if (hasDrawn) triggerSignComplete();
});
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("touchstart", () => drawing = true);
canvas.addEventListener("touchend", () => {
    drawing = false;
    if (hasDrawn) triggerSignComplete();
});
canvas.addEventListener("touchmove", (e) => {
    draw(e);
    e.preventDefault();
});

// 폭죽 효과
function triggerSignComplete() {
    if (fireworksContainer.classList.contains("playing")) return;

    // 화면 플래시 효과
    triggerFlash();

    // 모바일 진동 효과
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }

    // 폭죽 애니메이션 실행
    fireworksContainer.classList.remove("hidden");
    fireworksContainer.classList.add("playing");
    launchFireworks();

    // 1.5초 뒤 다음 화면으로 전환
    setTimeout(() => {
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

// 화면 플래시 효과
function triggerFlash() {
    const flash = document.createElement("div");
    flash.classList.add("flash-screen");
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 300);
}