// 변수
export let lastGachaResult = [];

// 캐릭터 풀
const characterPool = {
    "3": [
        /* 아비도스 */
        { name: "호시노", name_eng: "hoshino", school: "아비도스", school_eng: "abydos", image: "hoshino.png", isPickup: true },
        { name: "호시노(임전)", name_eng: "hoshino_battle", school: "아비도스", school_eng: "abydos", image: "hoshino_battle.png", isPickup: false },
        { name: "호시노(수영복)", name_eng: "hoshino_swimsuit", school: "아비도스", school_eng: "abydos", image: "hoshino_swimsuit.png", isPickup: false },
        { name: "노노미(수영복)", name_eng: "nonomi_swimsuit", school: "아비도스", school_eng: "abydos", image: "nonomi_swimsuit.png", isPickup: false },
        { name: "세리카(새해)", name_eng: "serika_newyear", school: "아비도스", school_eng: "abydos", image: "serika_newyear.png", isPickup: false },
        { name: "세리카(수영복)", name_eng: "serika_swimsuit", school: "아비도스", school_eng: "abydos", image: "serika_swimsuit.png", isPickup: false },
        { name: "시로코", name_eng: "shiroko", school: "아비도스", school_eng: "abydos", image: "shiroko.png", isPickup: false },
        { name: "시로코(라이딩)", name_eng: "shiroko_riding", school: "아비도스", school_eng: "abydos", image: "shiroko_riding.png", isPickup: false },
        { name: "시로코(수영복)", name_eng: "shiroko_swimsuit", school: "아비도스", school_eng: "abydos", image: "shiroko_swimsuit.png", isPickup: false },
        { name: "시로코(테러)", name_eng: "shiroko_terror", school: "아비도스", school_eng: "abydos", image: "shiroko_terror.png", isPickup: false },
        /* 아리우스 */
        { name: "아츠코", name_eng: "atsuko", school: "아리우스", school_eng: "arius", image: "atsuko.png", isPickup: false },
        { name: "히요리", name_eng: "hiyori", school: "아리우스", school_eng: "arius", image: "hiyori.png", isPickup: false },
        { name: "히요리(수영복)", name_eng: "hiyori_swimsuit", school: "아리우스", school_eng: "arius", image: "hiyori_swimsuit.png", isPickup: false },
        { name: "미사키", name_eng: "misaki", school: "아리우스", school_eng: "arius", image: "misaki.png", isPickup: false },
        { name: "사오리", name_eng: "saori", school: "아리우스", school_eng: "arius", image: "saori.png", isPickup: false },
        { name: "사오리(드레스)", name_eng: "saori_dress", school: "아리우스", school_eng: "arius", image: "saori_dress.png", isPickup: false },
        { name: "사오리(수영복)", name_eng: "saori_swimsuit", school: "아리우스", school_eng: "arius", image: "saori_swimsuit.png", isPickup: false },
        /* 게헨나 */
        { name: "아카리(새해)", name_eng: "akari_newyear", school: "게헨나", school_eng: "gehenna", image: "akari_newyear.png", isPickup: false },
        { name: "아코", name_eng: "ako", school: "게헨나", school_eng: "gehenna", image: "ako.png", isPickup: false },
        { name: "아코(드레스)", name_eng: "ako_dress", school: "게헨나", school_eng: "gehenna", image: "ako_dress.png", isPickup: false },
        { name: "아루", name_eng: "aru", school: "게헨나", school_eng: "gehenna", image: "aru.png", isPickup: false },
        { name: "아루(드레스)", name_eng: "aru_dress", school: "게헨나", school_eng: "gehenna", image: "aru_dress.png", isPickup: false },
        { name: "아루(새해)", name_eng: "aru_newyear", school: "게헨나", school_eng: "gehenna", image: "aru_newyear.png", isPickup: false },
        { name: "치아키", name_eng: "chiaki", school: "게헨나", school_eng: "gehenna", image: "chiaki.png", isPickup: false },
        { name: "치나츠(온천)", name_eng: "chinatsu_hotspring", school: "게헨나", school_eng: "gehenna", image: "chinatsu_hotspring.png", isPickup: false },
        { name: "후우카(새해)", name_eng: "fuuka_newyear", school: "게헨나", school_eng: "gehenna", image: "fuuka_newyear.png", isPickup: false },
        { name: "하루카(새해)", name_eng: "haruka_newyear", school: "게헨나", school_eng: "gehenna", image: "haruka_newyear.png", isPickup: false },
        { name: "하루나", name_eng: "haruna", school: "게헨나", school_eng: "gehenna", image: "haruna.png", isPickup: false },
        { name: "하루나(새해)", name_eng: "haruna_newyear", school: "게헨나", school_eng: "gehenna", image: "haruna_newyear.png", isPickup: false },
        { name: "하루나(체육복)", name_eng: "haruna_sportswear", school: "게헨나", school_eng: "gehenna", image: "haruna_sportswear.png", isPickup: false },
        { name: "히나", name_eng: "hina", school: "게헨나", school_eng: "gehenna", image: "hina.png", isPickup: false },
        { name: "히나(드레스)", name_eng: "hina_dress", school: "게헨나", school_eng: "gehenna", image: "hina_dress.png", isPickup: false },
        { name: "히나(수영복)", name_eng: "hina_swimsuit", school: "게헨나", school_eng: "gehenna", image: "hina_swimsuit.png", isPickup: false },
        { name: "이오리", name_eng: "iori", school: "게헨나", school_eng: "gehenna", image: "iori.png", isPickup: false },
        { name: "이오리(수영복)", name_eng: "iori_swimsuit", school: "게헨나", school_eng: "gehenna", image: "iori_swimsuit.png", isPickup: false },
        { name: "이로하", name_eng: "iroha", school: "게헨나", school_eng: "gehenna", image: "iroha.png", isPickup: false },
        { name: "이즈미", name_eng: "izumi", school: "게헨나", school_eng: "gehenna", image: "izumi.png", isPickup: false },
        { name: "이즈미(새해)", name_eng: "izumi_newyear", school: "게헨나", school_eng: "gehenna", image: "izumi_newyear.png", isPickup: false },
        { name: "쥬리(아르바이트)", name_eng: "juri_parttimer", school: "게헨나", school_eng: "gehenna", image: "juri_parttimer.png", isPickup: false },
        { name: "카스미", name_eng: "kasumi", school: "게헨나", school_eng: "gehenna", image: "kasumi.png", isPickup: false },
        { name: "카요코(드레스)", name_eng: "kayoko_dress", school: "게헨나", school_eng: "gehenna", image: "kayoko_dress.png", isPickup: false },
        { name: "카요코(새해)", name_eng: "kayoko_newyear", school: "게헨나", school_eng: "gehenna", image: "kayoko_newyear.png", isPickup: false },
        { name: "키라라", name_eng: "kirara", school: "게헨나", school_eng: "gehenna", image: "kirara.png", isPickup: false },
        { name: "마코토", name_eng: "makoto", school: "게헨나", school_eng: "gehenna", image: "makoto.png", isPickup: false },
        { name: "메구", name_eng: "megu", school: "게헨나", school_eng: "gehenna", image: "megu.png", isPickup: false },
        { name: "무츠키(새해)", name_eng: "mutsuki_newyear", school: "게헨나", school_eng: "gehenna", image: "mutsuki_newyear.png", isPickup: false },
        { name: "사츠키", name_eng: "satsuki", school: "게헨나", school_eng: "gehenna", image: "satsuki.png", isPickup: false },
        { name: "세나", name_eng: "sena", school: "게헨나", school_eng: "gehenna", image: "sena.png", isPickup: false },
        { name: "세나(캐주얼)", name_eng: "sena_casual", school: "게헨나", school_eng: "gehenna", image: "sena_casual.png", isPickup: false },
        /* 하이랜더 */
        { name: "히카리", name_eng: "hikari", school: "하이랜더", school_eng: "highlander", image: "hikari.png", isPickup: false },
        { name: "노조미", name_eng: "nozomi", school: "하이랜더", school_eng: "highlander", image: "nozomi.png", isPickup: false }
    ],
    "2": [
        /* 아비도스 */
        { name: "세리카", name_eng: "serika", school: "아비도스", school_eng: "abydos", image: "serika.png" },
        { name: "노노미", name_eng: "nonomi", school: "아비도스", school_eng: "abydos", image: "nonomi.png" },
        { name: "아야네", name_eng: "ayane", school: "아비도스", school_eng: "abydos", image: "ayane.png" },
        /* 게헨나 */
        { name: "아카리", name_eng: "akari", school: "게헨나", school_eng: "gehenna", image: "akari.png" },
        { name: "후우카", name_eng: "fuuka", school: "게헨나", school_eng: "gehenna", image: "fuuka.png" },
        { name: "준코", name_eng: "junko", school: "게헨나", school_eng: "gehenna", image: "junko.png" },
        { name: "카요코", name_eng: "kayoko", school: "게헨나", school_eng: "gehenna", image: "kayoko.png" },
        { name: "무츠키", name_eng: "mutsuki", school: "게헨나", school_eng: "gehenna", image: "mutsuki.png" }
    ],
    "1": [
        /* 아비도스 */
        { name: "아야네(수영복)", name_eng: "ayane_swimsuit", school: "아비도스", school_eng: "abydos", image: "ayane_swimsuit.png" },
        /* 아리우스 */
        { name: "아츠코(수영복)", name_eng: "atsuko_swimsuit", school: "아리우스", school_eng: "arius", image: "atsuko_swimsuit.png" },
        /* 게헨나 */
        { name: "치나츠", name_eng: "chinatsu", school: "게헨나", school_eng: "gehenna", image: "chinatsu.png" },
        { name: "하루카", name_eng: "haruka", school: "게헨나", school_eng: "gehenna", image: "haruka.png" },
        { name: "이부키", name_eng: "ibuki", school: "게헨나", school_eng: "gehenna", image: "ibuki.png" },
        { name: "이즈미(수영복)", name_eng: "izumi_swimsuit", school: "게헨나", school_eng: "gehenna", image: "izumi_swimsuit.png" },
        { name: "준코(새해)", name_eng: "junko_newyear", school: "게헨나", school_eng: "gehenna", image: "junko_newyear.png" },
        { name: "쥬리", name_eng: "juri", school: "게헨나", school_eng: "gehenna", image: "juri.png" },
        /* 하이랜더 */
        { name: "아오바", name_eng: "aoba", school: "하이랜더", school_eng: "highlander", image: "aoba.png" }
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
