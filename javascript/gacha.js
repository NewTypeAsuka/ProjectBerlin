// 캐릭터 풀
const characterPool = {
    "3": [
        { name: "호시노", name_eng: "hoshino", school: "abydos", image: "hoshino.png", isPickup: true },
        { name: "시로코", name_eng: "shiroko", school: "abydos", image: "shiroko.png", isPickup: false },
        { name: "히나", name_eng: "hina", school: "gehenna", image: "hina.png", isPickup: false },
        { name: "아루", name_eng: "aru", school: "gehenna", image: "aru.png", isPickup: false },
        { name: "유우카", name_eng: "yuuka", school: "millennium", image: "yuuka.png", isPickup: false },
        { name: "아리스", name_eng: "arisu", school: "millennium", image: "arisu.png", isPickup: false },
        { name: "히후미", name_eng: "hifumi", school: "trinity", image: "hifumi.png", isPickup: false },
        { name: "미카", name_eng: "mika", school: "trinity", image: "mika.png", isPickup: true },
        { name: "이즈나", name_eng: "izuna", school: "hyakkiyako", image: "izuna.png", isPickup: false },
        { name: "츠루기", name_eng: "tsurugi", school: "hyakkiyako", image: "tsurugi.png", isPickup: false },
        { name: "츠카사", name_eng: "tsukasa", school: "shanhaijing", image: "tsukasa.png", isPickup: false },
        { name: "체리노", name_eng: "cherino", school: "redwinter", image: "cherino.png", isPickup: false },
        { name: "아즈사", name_eng: "azusa", school: "srt", image: "azusa.png", isPickup: false },
        { name: "사오리", name_eng: "saori", school: "arius", image: "saori.png", isPickup: false }
    ],
    "2": [
        { name: "세리카", name_eng: "serika", school: "abydos", image: "serika.png" },
        { name: "노노미", name_eng: "nonomi", school: "abydos", image: "nonomi.png" },
        { name: "무츠키", name_eng: "mutsuki", school: "gehenna", image: "mutsuki.png" },
        { name: "주리", name_eng: "juri", school: "gehenna", image: "juri.png" },
        { name: "유즈", name_eng: "yuzu", school: "millennium", image: "yuzu.png" },
        { name: "카린", name_eng: "karin", school: "millennium", image: "karin.png" },
        { name: "시즈코", name_eng: "shizuko", school: "hyakkiyako", image: "shizuko.png" },
        { name: "모모이", name_eng: "momoi", school: "millennium", image: "momoi.png" },
        { name: "미도리", name_eng: "midori", school: "millennium", image: "midori.png" },
        { name: "마키", name_eng: "maki", school: "srt", image: "maki.png" },
        { name: "아츠코", name_eng: "atsuko", school: "arius", image: "atsuko.png" }
    ],
    "1": [
        { name: "아야네", name_eng: "ayane", school: "valkyrie", image: "ayane.png" },
        { name: "하루카", name_eng: "haruka", school: "gehenna", image: "haruka.png" },
        { name: "후우카", name_eng: "fuuka", school: "gehenna", image: "fuuka.png" },
        { name: "치세", name_eng: "chise", school: "valkyrie", image: "chise.png" },
        { name: "아카네", name_eng: "akane", school: "valkyrie", image: "akane.png" },
        { name: "하스미", name_eng: "hasumi", school: "trinity", image: "hasumi.png" },
        { name: "세나", name_eng: "sena", school: "gehenna", image: "sena.png" }
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

    return results;
}
