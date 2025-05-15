
// 변수
const bgm = document.getElementById("bgm");
const soundToggleBtn = document.getElementById("sound-toggle-btn");

// 화면 전환 함수
function changeScreen(id) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);
    if (target) {
        target.classList.add("active");
    }
}

// 가챠 방식 버튼 핸들러(1회, 10회)
document.getElementById("gacha-once-btn").addEventListener("click", () => {
    // 나중에 필요한 로직 삽입 가능 (1회 뽑기 설정 등)
    changeScreen("step-two-page");
});
document.getElementById("gacha-ten-btn").addEventListener("click", () => {
    // 나중에 필요한 로직 삽입 가능 (10회 뽑기 설정 등)
    changeScreen("step-two-page");
});

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