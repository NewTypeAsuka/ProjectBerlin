// 캐릭터 풀
const characterPool = {
    "3": [
        { name: "호시노", image: "hoshino.png" },
        { name: "시로코", image: "shiroko.png" },
    ],
    "2": [
        { name: "세리카", image: "serika.png" },
        { name: "노노미", image: "nonomi.png" },
    ],
    "1": [
        { name: "아야네", image: "ayane.png" },
        { name: "하루카", image: "haruka.png" },
    ]
};

// 가챠 확률
const gachaRates = {
    normal: { "3": 3.0, "2": 18.5, "1": 78.5 },
    fes:    { "3": 6.0, "2": 18.5, "1": 75.5 }
};

// 등급 결정 함수
function getRandomRarity(mode = "normal") {
    const roll = Math.random() * 100;
    const rate = gachaRates[mode];

    if (roll < rate["3"]) return "3";
    else if (roll < rate["3"] + rate["2"]) return "2";
    else return "1";
}

// 캐릭터 한 명 뽑기
function getRandomCharacter(mode = "normal") {
    const rarity = getRandomRarity(mode);
    const pool = characterPool[rarity];
    const index = Math.floor(Math.random() * pool.length);
    return { ...pool[index], rarity };
}

// 10연 뽑기 결과 배열 반환
function getGachaResult(mode = "normal") {
    const results = [];
    for (let i = 0; i < 10; i++) {
        results.push(getRandomCharacter(mode));
    }
    return results;
}