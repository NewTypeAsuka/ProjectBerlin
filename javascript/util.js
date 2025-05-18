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

        // 살짝 늦춰서 스크롤 초기화
        setTimeout(() => {
            window.scrollTo(0, 0);
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