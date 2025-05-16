import { changeScreen } from './util.js';

// 변수
let gachaResults = []; // step-three에서 넘겨받은 결과
let currentIndex = 0;

// 가챠 - 가림막 카드 렌더링
export function renderGachaResult(cards) {
    const container = document.getElementById("gacha-result-grid");
    container.innerHTML = "";

    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("gacha-card", `rarity-${card.rarity}`);
        cardElement.textContent = "???"; // 카드 가림막 표시

        container.appendChild(cardElement);
    });
}

// 가챠 결과 공개 시작
export function startCharacterReveal(results) {
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

// 개별 캐릭터 카드 등장 처리
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

// 폭죽 효과 생성 함수 (중복 제거 위해 여기에 있음)
function launchFireworks() {
    const container = document.querySelector("#step-four-page .fireworks");
    const particleCount = 300;

    for (let i = 0; i < particleCount; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 300 + 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance * -1;

        firework.style.setProperty('--x', `${x}px`);
        firework.style.setProperty('--y', `${y}px`);
        firework.style.backgroundColor = getRandomColor();
        firework.style.left = `${Math.random() * 100}%`;

        container.appendChild(firework);
    }
}

// 랜덤 색상 함수
function getRandomColor() {
    const colors = ["#ff4081", "#ffd740", "#69f0ae", "#40c4ff", "#7c4dff", "#f06292", "#fff176"];
    return colors[Math.floor(Math.random() * colors.length)];
}
