import { gachaState } from './gacha.js';

// 공통 좌표 계산 함수
export function getCanvasPos(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    if (e.touches) {
        const touch = e.touches[0];
        return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
    } else {
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
}

// 화면 전환 함수
export function changeScreen(targetId) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(targetId);
    if (target) {
        target.classList.add("active");

        if (targetId === "step-one-page") { // 현재 가챠 모드 로그 남기기
            console.log("📢 현재 가챠 모드:", gachaState.mode);
        }

        if (targetId === "step-two-page") { // 사인 페이지로 이동 시 사인 초기화
        const canvas = document.getElementById("signCanvas");
        if (canvas) {
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }

        setTimeout(() => { // 스크롤 위치 초기화
            requestAnimationFrame(() => {
                window.scrollTo(0, 0);
            });
        }, 50);
    }
}

// 카카오톡 브라우저 감지
export function detectKakaoBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("kakaotalk")) {
        document.body.classList.add("kakao-browser");
    }
}