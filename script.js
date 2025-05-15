
// 변수
const gachaOnceBtn = document.getElementById("gacha-once-btn");
const gachaTenBtn = document.getElementById("gacha-ten-btn");
const bgm = document.getElementById("bgm");
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const aronaMessage = document.getElementById("arona-message");

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