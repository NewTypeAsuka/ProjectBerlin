import { getCanvasPos } from './util.js';
import { triggerSignComplete } from './fireworks.js';

// 변수
let drawing = false;
let hasDrawn = false;
const canvas = document.getElementById("signCanvas");
const ctx = canvas.getContext("2d");

// 드로잉 선
let lastX = 0;
let lastY = 0;

// 드로잉 위치 동기화
function resizeCanvas() {
    const styleWidth = parseInt(getComputedStyle(canvas).width);
    const styleHeight = parseInt(getComputedStyle(canvas).height);

    canvas.width = styleWidth;
    canvas.height = styleHeight;

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#007bff";
}

// 드로잉 함수
function draw(e) {
    if (!drawing) return;
    const pos = getCanvasPos(e, canvas);

    const hue = (Date.now() / 10) % 360; // 선 그라데이션
    ctx.strokeStyle = `hsl(${hue}, 100%, 60%)`;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    lastX = pos.x;
    lastY = pos.y;
    hasDrawn = true;
}

// 드로잉 시작/종료
export function setupSignCanvas() {
    const canvas = document.getElementById("signCanvas");

    // 페이지 로딩 및 리사이즈 시 캔버스 좌표계 리셋
    window.addEventListener("DOMContentLoaded", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);

    // 마우스 이벤트
    canvas.addEventListener("mousedown", (e) => {
        drawing = true;
        canvas.classList.add("signing");
        const pos = getCanvasPos(e, canvas);
        lastX = pos.x;
        lastY = pos.y;
    });
    canvas.addEventListener("mouseup", () => {
        drawing = false;
        canvas.classList.remove("signing");
        if (hasDrawn) triggerSignComplete();
    });
    canvas.addEventListener("mousemove", draw);

    // 터치 이벤트
    canvas.addEventListener("touchstart", (e) => {
        drawing = true;
        canvas.classList.add("signing");
        const pos = getCanvasPos(e, canvas);
        lastX = pos.x;
        lastY = pos.y;
    });
    canvas.addEventListener("touchend", () => {
        drawing = false;
        canvas.classList.remove("signing");
        if (hasDrawn) triggerSignComplete();
    });
    canvas.addEventListener("touchmove", (e) => {
        draw(e);
        e.preventDefault();
    });
}

// 페이지 로딩 및 리사이즈 시 캔버스 좌표계 리셋
window.addEventListener("DOMContentLoaded", resizeCanvas);
window.addEventListener("resize", resizeCanvas);