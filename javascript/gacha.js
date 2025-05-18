// 변수
export let lastGachaResult = [];

// 캐릭터 풀
const characterPool = {
    "3": [
        { name: "호시노", name_eng: "hoshino", school: "abydos", image: "hoshino.png", isPickup: true },
        { name: "시로코", name_eng: "shiroko", school: "abydos", image: "shiroko.png", isPickup: false }
    ],
    "2": [
        { name: "세리카", name_eng: "serika", school: "abydos", image: "serika.png" },
        { name: "노노미", name_eng: "nonomi", school: "abydos", image: "nonomi.png" }
    ],
    "1": [
        { name: "아야네", name_eng: "ayane", school: "abidos", image: "ayane.png" },
        { name: "아야네(수영복)", name_eng: "ayane_swimsuit", school: "abidos", image: "ayane_swimsuit.png" },
    ]
};

// 가챠 확률
const gachaRates = {
    normal: { "3": 3.0, "2": 18.5, "1": 78.5 },
    pick:   { "3": 3.0, "2": 18.5, "1": 78.5 }, // 총 3%, 내부에서 0.7%: 픽업
    fes:    { "3": 6.0, "2": 18.5, "1": 75.5 }
};

// 현재 가챠 모드 상태
export const gachaState = {
    mode: "normal"
};

function getRandomRarityFromRates(rate) {
    const roll = Math.random() * 100;
    if (roll < rate["3"]) return "3";
    else if (roll < rate["3"] + rate["2"]) return "2";
    else return "1";
}

function getRandomCharacterNormal() {
    const rarity = getRandomRarityFromRates(gachaRates.normal);
    const pool = characterPool[rarity];
    const index = Math.floor(Math.random() * pool.length);
    const result = { ...pool[index], rarity };
    console.log("🎯 [normal] →", result);
    return result;
}

function getRandomCharacterPick() {
    const rarity = getRandomRarityFromRates(gachaRates.pick);
    const pool = characterPool[rarity];

    if (rarity === "3") {
        const pickupChance = 0.7 / 3.0;
        const isPickup = Math.random() < pickupChance;
        const candidates = pool.filter(c => c.isPickup === isPickup);
        const index = Math.floor(Math.random() * candidates.length);
        const result = { ...candidates[index], rarity };
        console.log(`🎯 [pick] 3★ → ${isPickup ? "픽업" : "비픽업"} 캐릭터 →`, result);
        return result;
    } else {
        const index = Math.floor(Math.random() * pool.length);
        const result = { ...pool[index], rarity };
        console.log("🎯 [pick]", result);
        return result;
    }
}

function getRandomCharacterFes() {
    const rarity = getRandomRarityFromRates(gachaRates.fes);
    const pool = characterPool[rarity];
    const index = Math.floor(Math.random() * pool.length);
    const result = { ...pool[index], rarity };
    console.log("🎯 [fes] →", result);
    return result;
}

// 가챠 결과 생성
export function getGachaResult() {
    const mode = gachaState.mode;
    console.log("✅ getGachaResult called with mode:", mode);
    const results = [];

    for (let i = 0; i < 10; i++) {
        if (mode === "pick") {
            results.push(getRandomCharacterPick());
        } else if (mode === "fes") {
            results.push(getRandomCharacterFes());
        } else {
            results.push(getRandomCharacterNormal());
        }
    }

    lastGachaResult = results;  // 여기서 공통 상태에 저장함
    return results;
}
