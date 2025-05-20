import { changeScreen } from './util.js';
import { lastGachaResult } from './gacha.js';
import { gachaState } from './gacha.js';

// 변수
let gachaResults = []; // step-three에서 넘겨받은 결과
let currentIndex = 0;

// 가챠 - 가림막 카드 렌더링
export function renderGachaResult(cards) {
    const container = document.getElementById("gacha-result-grid");
    container.innerHTML = "";

    cards.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("gacha-card", `rarity-${card.rarity}`);

        // 등급별로 별 크기 다르게
        const star = document.createElement("div");
        star.textContent = "⭐".repeat(Number(card.rarity));
        star.style.fontSize = card.rarity === "3" ? "2.1rem" : "1.7rem"; // 별 크기 차이
        star.style.textAlign = "center";
        cardElement.appendChild(star);

        // 카드 등장 애니메이션
        setTimeout(() => {
            cardElement.classList.add("animate-in");

            // 짝수 카드가 등장할 때마다 효과음 재생
            if (index % 2 === 0) {
                const sound = new Audio("sounds/pon.mp3");
                sound.volume = 1.0;
                sound.play().catch((e) => {
                    console.warn("pon 효과음 재생 실패:", e);
                });
            }

            // 이하 기존 코드 유지
            if (card.rarity === "3") {
                setTimeout(() => {
                    cardElement.classList.add("glow");
                }, 500);
            }

            // 마지막 카드 등장 후 랜덤 회전
            if (index === cards.length - 1) {
                setTimeout(() => {
                    const allCards = container.querySelectorAll(".gacha-card");
                    allCards.forEach((card, i) => {
                        card.classList.remove("animate-in");
                        void card.offsetWidth;

                        const leftAngles = [5, -5, -10, -15];
                        const rightAngles = [-5, 5, 10, 15];
                        const isLeft = i % 2 === 0;
                        const angle = isLeft
                            ? leftAngles[Math.floor(Math.random() * leftAngles.length)]
                            : rightAngles[Math.floor(Math.random() * rightAngles.length)];

                        const isGlowing = card.classList.contains("glow");
                        const transformBase = isGlowing ? "scale(1.05)" : "scale(1)";
                        card.style.transform = `${transformBase} rotateZ(${angle}deg)`;
                        card.style.transition = 'transform 0.5s ease-in-out';
                    });
                
                // 화면 터치 가이드 표시
                const touchGuide = document.getElementById('touch-guide');
                if (touchGuide) touchGuide.style.display = 'block';
                
                }, 800);
            }
        }, index * 100); // 카드 나오는 속도

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

// 학원 배경 설정
function getSchoolMarkImagePath(school_eng) {
    return `images/school/mark/${school_eng}_mark.png`;
}

// 개별 캐릭터 카드 등장 처리
function showNextCharacter() {
    const card = gachaResults[currentIndex];
    console.log(`캐릭터 ${currentIndex + 1} / ${gachaResults.length}`, card);

    const img = document.getElementById("character-image");
    const name = document.getElementById("character-name");
    const school = document.getElementById("character-school");
    const stars = document.getElementById("character-stars");
    const infoContainer = document.getElementById("character-info");
    const schoolMark = document.getElementById("school-mark-background");
    const starDrop = document.getElementById("star-drop");

    // 초기화
    img.style.display = "none";
    img.style.opacity = 0;
    infoContainer.style.opacity = 0;
    name.textContent = "";
    school.textContent = "";
    stars.innerHTML = "";

    // 캐릭터 이미지 로드 후 처리
    img.onload = () => {
        // 학원 마크 설정
        if (schoolMark && card.school_eng) {
            schoolMark.style.backgroundImage = `url('${getSchoolMarkImagePath(card.school_eng)}')`;
        }

        // 정보 설정
        name.textContent = card.name;
        school.textContent = card.school;
        stars.innerHTML = "⭐".repeat(Number(card.rarity));

        // 애니메이션 초기화
        img.style.display = "block";
        img.classList.remove("enter");
        infoContainer.classList.remove("enter");
        name.classList.remove("enter");
        school.classList.remove("enter");
        stars.classList.remove("enter");

        void img.offsetWidth;

        // 표시 + 애니메이션 적용
        img.style.opacity = 1;
        infoContainer.style.opacity = 1;
        img.classList.add("enter");
        infoContainer.classList.add("enter");
        name.classList.add("enter");
        school.classList.add("enter");
        stars.classList.add("enter");
    };

    // 이미지 경로 미리 준비
    const imageSrc = `images/characters/${card.rarity}/${card.image}`;

    // 3성이라면 별 떨어진 뒤 이미지 로드 시작
    if (card.rarity === "3") {
        starDrop.style.display = "flex";
        const audio = new Audio("sounds/pon.mp3");
        audio.play();

        setTimeout(() => {
            starDrop.style.display = "none";
            img.src = imageSrc;
        }, 1500);
    } else {
        img.src = imageSrc;
    }  
}

// 카드 클릭 → 다음 카드 or 결과 페이지
document.getElementById("step-four-page").addEventListener("click", () => {
    currentIndex++;

    if (currentIndex < gachaResults.length) {
        showNextCharacter();
    }
    else if (currentIndex === gachaResults.length) {
        buildResultSummaryTable(); // 결과 테이블 생성
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

// 결과 정리
function buildResultSummaryTable() {
    const container = document.getElementById("result-table-container");
    if (!container) return;

    const grouped = {
        "3": new Set(),
        "2": new Set(),
        "1": new Set()
    };

    lastGachaResult.forEach(char => {
        grouped[char.rarity].add(char.name);
    });

    // 이미지 경로는 캐릭터 이름 기준으로 추정
    const charInfoMap = {};
    lastGachaResult.forEach(char => {
        charInfoMap[char.name] = char;
    });

    let html = `<table class="result-table">
        <thead><tr><th>등급</th><th>캐릭터</th></tr></thead>
        <tbody>`;

    ["3", "2", "1"].forEach(rarity => {
        const names = Array.from(grouped[rarity]);
        names.forEach(name => {
            const char = charInfoMap[name];
            const imageSrc = `images/characters/${char.rarity}/${char.image}`;
            const rowClass = char.rarity === "3" ? "highlight-row" : "";

            html += `<tr class="${rowClass}">
                <td>${"⭐".repeat(Number(rarity))}</td>
                <td>
                    <img src="${imageSrc}" alt="${name}" class="char-icon">
                    ${name}
                </td>
            </tr>`;
        });
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

// 처음으로 버튼
document.getElementById("home-button").addEventListener("click", () => {
    gachaState.mode = "normal";
    changeScreen("step-one-page");
});

// 한 번 더 뽑기 버튼
document.getElementById("retry-button").addEventListener("click", () => {
    changeScreen("step-two-page");
});