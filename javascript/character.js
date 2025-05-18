import { changeScreen } from './util.js';

let gachaResults = [];
let currentIndex = 0;

// 캐릭터 정보를 한 장씩 보여주는 함수
export function showNextCharacter() {
    if (currentIndex >= gachaResults.length) {
        changeScreen("step-five-page");
        return;
    }

    const result = gachaResults[currentIndex];
    const image = document.getElementById("character-image");
    const info = document.getElementById("character-info");
    const name = info.querySelector(".character-name");
    const school = info.querySelector(".character-school");
    const stars = info.querySelector(".character-stars");

    image.classList.remove("enter");
    info.classList.remove("enter");

    image.src = result.image;
    image.alt = result.name;
    name.textContent = result.name;
    school.textContent = convertSchoolName(result.school);
    stars.textContent = "★".repeat(parseInt(result.rarity));

    setTimeout(() => {
        image.classList.add("enter");
    }, 100);

    setTimeout(() => {
        info.classList.add("enter");
    }, 300);

    currentIndex++;
}

export function startCharacterReveal(results) {
    gachaResults = results;
    currentIndex = 0;

    const stepFourPage = document.getElementById("step-four-page");

    // 클릭 이벤트 등록 (매번 등록되지 않도록 한 번만)
    stepFourPage.onclick = () => {
        showNextCharacter();
    };

    showNextCharacter();
}

function convertSchoolName(schoolKey) {
    const map = {
        abydos: "아비도스",
        gehenna: "게헨나",
        millennium: "밀레니엄",
        trinity: "트리니티",
        hyakkiyako: "백귀야행",
        shanhaijing: "산해경",
        redwinter: "붉은 겨울",
        srt: "SRT",
        arius: "아리우스",
        valkyrie: "발키리"
    };
    return map[schoolKey] || schoolKey;
}

// step-four 페이지에서 클릭 시 다음 캐릭터 표시
window.addEventListener("DOMContentLoaded", () => {
    const stepFourPage = document.getElementById("step-four-page");
    stepFourPage.addEventListener("click", () => {
        showNextCharacter();
    });
});

