// 변수
let gachaMode = "normal"; // 최상단 고정
let lastGachaResult = []; // 최상단 고정
let currentIndex = 0;     // 최상단 고정
const gachaCommonBtn = document.getElementById("gacha-common-btn");
const gachaFesBtn = document.getElementById("gacha-fes-btn");
const bgm = document.getElementById("bgm");
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const aronaMessage = document.getElementById("arona-message");
const canvas = document.getElementById("signCanvas");
const ctx = canvas.getContext("2d");
const fireworksContainer = document.getElementById("fireworks-container");

// 카카오톡 브라우저 대응
function detectKakaoBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("kakaotalk")) {
        document.body.classList.add("kakao-browser");
    }
}
window.addEventListener("DOMContentLoaded", detectKakaoBrowser);

// 브금 컨트롤 버튼 핸들러
document.addEventListener("DOMContentLoaded", () => {
    bgm.volume = 0.1; // 초기 볼륨 설정
    if (bgm.paused) {
        soundToggleBtn.textContent = "🔇";
    }
    document.getElementById("step-three-page").addEventListener("click", () => {
        startCharacterReveal(lastGachaResult);
    });
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
    "안녕하세요! 아로나입니다!",
    "어서 오세요! 선생님! 준비되셨나요?",
    "3성은 항상 가까이에 있어요!",
    "이번엔 꼭 3성이 나올 거예요!",
    "오늘은 왠지 좋은 예감이 들어요!",
    "3성아~ 나와라~",
    "아로나가 3성을 응원할게요!"
];

function updateAronaMessage() {
    const randomIndex = Math.floor(Math.random() * aronaQuotes.length);
    aronaMessage.textContent = aronaQuotes[randomIndex];
}

setInterval(updateAronaMessage, 5000); // 5초마다 메시지 변경

// 가챠 방식 버튼 핸들러(1회, 10회)
gachaCommonBtn.addEventListener("click", () => {
    // 나중에 필요한 로직 삽입 가능 (1회 뽑기 설정 등)
    changeScreen("step-two-page");
});
gachaFesBtn.addEventListener("click", () => {
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
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!drawing) return;
    const pos = getCanvasPos(e);

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);      // 이전 점에서
    ctx.lineTo(pos.x, pos.y);      // 현재 점까지 선 연결
    ctx.stroke();                  // 선 그리기

    lastX = pos.x;
    lastY = pos.y;
    hasDrawn = true;
}

// 드로잉 위치 조정
function resizeCanvas() {
    const styleWidth = parseInt(getComputedStyle(canvas).width);
    const styleHeight = parseInt(getComputedStyle(canvas).height);

    canvas.width = styleWidth;
    canvas.height = styleHeight;

    // 드로잉 스타일 다시 설정 (필수!)
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#007bff";
}

// 페이지 로딩 및 리사이즈 시 캔버스 좌표계 리셋
window.addEventListener("DOMContentLoaded", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

// 드로잉 시작/종료
canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    const pos = getCanvasPos(e);
    lastX = pos.x;
    lastY = pos.y;
});
canvas.addEventListener("mouseup", () => {
    drawing = false;
    if (hasDrawn) triggerSignComplete();
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchstart", (e) => {
    drawing = true;
    const pos = getCanvasPos(e);
    lastX = pos.x;
    lastY = pos.y;
});
canvas.addEventListener("touchend", () => {
    drawing = false;
    if (hasDrawn) triggerSignComplete();
});
canvas.addEventListener("touchmove", (e) => {
    draw(e);
    e.preventDefault();
});

// 드로잉 선
ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.strokeStyle = "#007bff";

// 폭죽 효과
function triggerSignComplete() {
    if (fireworksContainer.classList.contains("playing")) return;

    // 화면 플래시 효과
    triggerFlash();

    // 폭죽 애니메이션 실행
    fireworksContainer.classList.remove("hidden");
    fireworksContainer.classList.add("playing");
    launchFireworks();

    // 1.5초 뒤 다음 화면으로 전환
    setTimeout(() => {
        lastGachaResult = getGachaResult(gachaMode);
        renderGachaResult(lastGachaResult); // 가림막 카드 표시
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

// 가챠 - 가림막 카드 렌더링
function renderGachaResult(cards) {
    const container = document.getElementById("gacha-result-grid");
    container.innerHTML = "";

    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("gacha-card", `rarity-${card.rarity}`);
        cardElement.textContent = "???"; // 카드 가림막 표시

        container.appendChild(cardElement);
    });
}

let gachaResults = []; // step-three에서 넘겨받은 결과

function startCharacterReveal(results) {
    gachaResults = results;
    currentIndex = 0;

    const fireworksContainer = document.querySelector("#step-four-page .fireworks");
    fireworksContainer.classList.remove("hidden");
    fireworksContainer.classList.add("playing");
    launchFireworks();

    setTimeout(() => {
        fireworksContainer.classList.remove("playing");
        fireworksContainer.classList.add("hidden");

        showNextCharacter(); // 첫 캐릭터 보여줌
        changeScreen("step-four-page");
    }, 1500);
}

function showNextCharacter() {
    const card = gachaResults[currentIndex];
    const img = document.getElementById("character-image");
    const stars = document.getElementById("character-stars");

    img.src = `images/characters/${card.rarity}/${card.image}`;
    img.classList.remove("enter");
    void img.offsetWidth; // 리렌더 트릭
    img.classList.add("enter");

    stars.innerHTML = "★".repeat(Number(card.rarity));
}

// 카드 클릭 → 다음 카드 or 결과 페이지
document.getElementById("step-four-page").addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < gachaResults.length) {
        showNextCharacter();
    } else {
        changeScreen("step-five-page");
    }
});

