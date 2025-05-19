// 변수
export let lastGachaResult = [];

// 캐릭터 풀
const characterPool = {
    "3": [
        /* 아비도스 고등학교 */
        { name: "호시노", name_eng: "hoshino", school: "아비도스 고등학교", school_eng: "abydos", image: "hoshino.png", isPickup: true },
        { name: "호시노(임전)", name_eng: "hoshino_battle", school: "아비도스 고등학교", school_eng: "abydos", image: "hoshino_battle.png", isPickup: false },
        { name: "호시노(수영복)", name_eng: "hoshino_swimsuit", school: "아비도스 고등학교", school_eng: "abydos", image: "hoshino_swimsuit.png", isPickup: false },
        { name: "노노미(수영복)", name_eng: "nonomi_swimsuit", school: "아비도스 고등학교", school_eng: "abydos", image: "nonomi_swimsuit.png", isPickup: false },
        { name: "세리카(새해)", name_eng: "serika_newyear", school: "아비도스 고등학교", school_eng: "abydos", image: "serika_newyear.png", isPickup: false },
        { name: "세리카(수영복)", name_eng: "serika_swimsuit", school: "아비도스 고등학교", school_eng: "abydos", image: "serika_swimsuit.png", isPickup: false },
        { name: "시로코", name_eng: "shiroko", school: "아비도스 고등학교", school_eng: "abydos", image: "shiroko.png", isPickup: false },
        { name: "시로코(라이딩)", name_eng: "shiroko_riding", school: "아비도스 고등학교", school_eng: "abydos", image: "shiroko_riding.png", isPickup: false },
        { name: "시로코(수영복)", name_eng: "shiroko_swimsuit", school: "아비도스 고등학교", school_eng: "abydos", image: "shiroko_swimsuit.png", isPickup: false },
        { name: "시로코(테러)", name_eng: "shiroko_terror", school: "아비도스 고등학교", school_eng: "abydos", image: "shiroko_terror.png", isPickup: false },
        /* 아리우스 분교 */
        { name: "아츠코", name_eng: "atsuko", school: "아리우스 분교", school_eng: "arius", image: "atsuko.png", isPickup: false },
        { name: "히요리", name_eng: "hiyori", school: "아리우스 분교", school_eng: "arius", image: "hiyori.png", isPickup: false },
        { name: "히요리(수영복)", name_eng: "hiyori_swimsuit", school: "아리우스 분교", school_eng: "arius", image: "hiyori_swimsuit.png", isPickup: false },
        { name: "미사키", name_eng: "misaki", school: "아리우스 분교", school_eng: "arius", image: "misaki.png", isPickup: false },
        { name: "사오리", name_eng: "saori", school: "아리우스 분교", school_eng: "arius", image: "saori.png", isPickup: false },
        { name: "사오리(드레스)", name_eng: "saori_dress", school: "아리우스 분교", school_eng: "arius", image: "saori_dress.png", isPickup: false },
        { name: "사오리(수영복)", name_eng: "saori_swimsuit", school: "아리우스 분교", school_eng: "arius", image: "saori_swimsuit.png", isPickup: false },
        /* 게헨나 학원 */
        { name: "아카리(새해)", name_eng: "akari_newyear", school: "게헨나 학원", school_eng: "gehenna", image: "akari_newyear.png", isPickup: false },
        { name: "아코", name_eng: "ako", school: "게헨나 학원", school_eng: "gehenna", image: "ako.png", isPickup: false },
        { name: "아코(드레스)", name_eng: "ako_dress", school: "게헨나 학원", school_eng: "gehenna", image: "ako_dress.png", isPickup: false },
        { name: "아루", name_eng: "aru", school: "게헨나 학원", school_eng: "gehenna", image: "aru.png", isPickup: false },
        { name: "아루(드레스)", name_eng: "aru_dress", school: "게헨나 학원", school_eng: "gehenna", image: "aru_dress.png", isPickup: false },
        { name: "아루(새해)", name_eng: "aru_newyear", school: "게헨나 학원", school_eng: "gehenna", image: "aru_newyear.png", isPickup: false },
        { name: "치아키", name_eng: "chiaki", school: "게헨나 학원", school_eng: "gehenna", image: "chiaki.png", isPickup: false },
        { name: "치나츠(온천)", name_eng: "chinatsu_onsen", school: "게헨나 학원", school_eng: "gehenna", image: "chinatsu_onsen.png", isPickup: false },
        { name: "후우카(새해)", name_eng: "fuuka_newyear", school: "게헨나 학원", school_eng: "gehenna", image: "fuuka_newyear.png", isPickup: false },
        { name: "하루카(새해)", name_eng: "haruka_newyear", school: "게헨나 학원", school_eng: "gehenna", image: "haruka_newyear.png", isPickup: false },
        { name: "하루나", name_eng: "haruna", school: "게헨나 학원", school_eng: "gehenna", image: "haruna.png", isPickup: false },
        { name: "하루나(새해)", name_eng: "haruna_newyear", school: "게헨나 학원", school_eng: "gehenna", image: "haruna_newyear.png", isPickup: false },
        { name: "하루나(체육복)", name_eng: "haruna_sportswear", school: "게헨나 학원", school_eng: "gehenna", image: "haruna_sportswear.png", isPickup: false },
        { name: "히나", name_eng: "hina", school: "게헨나 학원", school_eng: "gehenna", image: "hina.png", isPickup: false },
        { name: "히나(드레스)", name_eng: "hina_dress", school: "게헨나 학원", school_eng: "gehenna", image: "hina_dress.png", isPickup: false },
        { name: "히나(수영복)", name_eng: "hina_swimsuit", school: "게헨나 학원", school_eng: "gehenna", image: "hina_swimsuit.png", isPickup: false },
        { name: "이오리", name_eng: "iori", school: "게헨나 학원", school_eng: "gehenna", image: "iori.png", isPickup: false },
        { name: "이오리(수영복)", name_eng: "iori_swimsuit", school: "게헨나 학원", school_eng: "gehenna", image: "iori_swimsuit.png", isPickup: false },
        { name: "이로하", name_eng: "iroha", school: "게헨나 학원", school_eng: "gehenna", image: "iroha.png", isPickup: false },
        { name: "이즈미", name_eng: "izumi", school: "게헨나 학원", school_eng: "gehenna", image: "izumi.png", isPickup: false },
        { name: "이즈미(새해)", name_eng: "izumi_newyear", school: "게헨나 학원", school_eng: "gehenna", image: "izumi_newyear.png", isPickup: false },
        { name: "쥬리(아르바이트)", name_eng: "juri_parttimer", school: "게헨나 학원", school_eng: "gehenna", image: "juri_parttimer.png", isPickup: false },
        { name: "카스미", name_eng: "kasumi", school: "게헨나 학원", school_eng: "gehenna", image: "kasumi.png", isPickup: false },
        { name: "카요코(드레스)", name_eng: "kayoko_dress", school: "게헨나 학원", school_eng: "gehenna", image: "kayoko_dress.png", isPickup: false },
        { name: "카요코(새해)", name_eng: "kayoko_newyear", school: "게헨나 학원", school_eng: "gehenna", image: "kayoko_newyear.png", isPickup: false },
        { name: "키라라", name_eng: "kirara", school: "게헨나 학원", school_eng: "gehenna", image: "kirara.png", isPickup: false },
        { name: "마코토", name_eng: "makoto", school: "게헨나 학원", school_eng: "gehenna", image: "makoto.png", isPickup: false },
        { name: "메구", name_eng: "megu", school: "게헨나 학원", school_eng: "gehenna", image: "megu.png", isPickup: false },
        { name: "무츠키(새해)", name_eng: "mutsuki_newyear", school: "게헨나 학원", school_eng: "gehenna", image: "mutsuki_newyear.png", isPickup: false },
        { name: "사츠키", name_eng: "satsuki", school: "게헨나 학원", school_eng: "gehenna", image: "satsuki.png", isPickup: false },
        { name: "세나", name_eng: "sena", school: "게헨나 학원", school_eng: "gehenna", image: "sena.png", isPickup: false },
        { name: "세나(사복)", name_eng: "sena_casual", school: "게헨나 학원", school_eng: "gehenna", image: "sena_casual.png", isPickup: false },
        /* 하이랜더 철도학원 */
        { name: "히카리", name_eng: "hikari", school: "하이랜더 철도학원", school_eng: "highlander", image: "hikari.png", isPickup: false },
        { name: "노조미", name_eng: "nozomi", school: "하이랜더 철도학원", school_eng: "highlander", image: "nozomi.png", isPickup: false },
        /* 백귀야행 연합학원 */
        { name: "치세(수영복)", name_eng: "chise_swimsuit", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "chise_swimsuit.png", isPickup: false },
        { name: "이즈나", name_eng: "izuna", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "izuna.png", isPickup: false },
        { name: "이즈나(수영복)", name_eng: "izuna_swimsuit", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "izuna_swimsuit.png", isPickup: false },
        { name: "카에데", name_eng: "kaede", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "kaede.png", isPickup: false },
        { name: "카호", name_eng: "kaho", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "kaho.png", isPickup: false },
        { name: "키쿄우", name_eng: "kikyou", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "kikyou.png", isPickup: false },
        { name: "미모리", name_eng: "mimori", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "mimori.png", isPickup: false },
        { name: "미모리(수영복)", name_eng: "mimori_swimsuit", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "mimori_swimsuit.png", isPickup: false },
        { name: "피나(가이드)", name_eng: "pina_guide", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "pina_guide.png", isPickup: false },
        { name: "렌게", name_eng: "renge", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "renge.png", isPickup: false },
        { name: "츠바키(가이드)", name_eng: "tsubaki_guide", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "tsubaki_guide.png", isPickup: false },
        { name: "츠쿠요", name_eng: "tsukuyo", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "tsukuyo.png", isPickup: false },
        { name: "우미카", name_eng: "umika", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "umika.png", isPickup: false },
        { name: "와카모", name_eng: "wakamo", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "wakamo.png", isPickup: false },
        { name: "와카모(수영복)", name_eng: "wakamo_swimsuit", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "wakamo_swimsuit.png", isPickup: false },
        { name: "유카리", name_eng: "yukari", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "yukari.png", isPickup: false },
        /* 밀레니엄 사이언스 스쿨 */
        { name: "아카네(바니걸)", name_eng: "akane_bunnygirl", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "akane_bunnygirl.png", isPickup: false },
        { name: "아리스", name_eng: "arisu", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "arisu.png", isPickup: false },
        { name: "아리스(메이드)", name_eng: "arisu_maid", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "arisu_maid.png", isPickup: false },
        { name: "아스나(바니걸)", name_eng: "asuna_bunnygirl", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "asuna_bunnygirl.png", isPickup: false },
        { name: "아스나(교복)", name_eng: "asuna_schooluniform", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "asuna_schooluniform.png", isPickup: false },
        { name: "치히로", name_eng: "chihiro", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "chihiro.png", isPickup: false },
        { name: "에이미", name_eng: "eimi", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "eimi.png", isPickup: false },
        { name: "에이미(수영복)", name_eng: "eimi_swimsuit", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "eimi_swimsuit.png", isPickup: false },
        { name: "하레(캠핑)", name_eng: "hare_camping", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "hare_camping.png", isPickup: false },
        { name: "히비키", name_eng: "hibiki", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "hibiki.png", isPickup: false },
        { name: "히마리", name_eng: "himari", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "himari.png", isPickup: false },
        { name: "카린", name_eng: "karin", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "karin.png", isPickup: false },
        { name: "카린(바니걸)", name_eng: "karin_bunnygirl", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "karin_bunnygirl.png", isPickup: false },
        { name: "코타마(캠핑)", name_eng: "kotama_camping", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "kotama_camping.png", isPickup: false },
        { name: "코토리(응원단)", name_eng: "kotori_cheerleader", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "kotori_cheerleader.png", isPickup: false },
        { name: "코유키", name_eng: "koyuki", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "koyuki.png", isPickup: false },
        { name: "마키", name_eng: "maki", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "maki.png", isPickup: false },
        { name: "마키(캠핑)", name_eng: "maki_camping", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "maki_camping.png", isPickup: false },
        { name: "미도리", name_eng: "midori", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "midori.png", isPickup: false },
        { name: "미도리(메이드)", name_eng: "midori_maid", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "midori_maid.png", isPickup: false },
        { name: "모모이(메이드)", name_eng: "momoi_maid", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "momoi_maid.png", isPickup: false },
        { name: "네루", name_eng: "neru", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "neru.png", isPickup: false },
        { name: "네루(바니걸)", name_eng: "neru_bunnygirl", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "neru_bunnygirl.png", isPickup: false },
        { name: "네루(교복)", name_eng: "neru_schooluniform", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "neru_schooluniform.png", isPickup: false },
        { name: "노아", name_eng: "noa", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "noa.png", isPickup: false },
        { name: "노아(파자마)", name_eng: "noa_pajama", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "noa_pajama.png", isPickup: false },
        { name: "레이", name_eng: "rei", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "rei.png", isPickup: false },
        { name: "리오", name_eng: "rio", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "rio.png", isPickup: false },
        { name: "스미레", name_eng: "sumire", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "sumire.png", isPickup: false },
        { name: "스미레(아르바이트)", name_eng: "sumire_parttimer", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "sumire_parttimer.png", isPickup: false },
        { name: "토키", name_eng: "toki", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "toki.png", isPickup: false },
        { name: "토키(바니걸)", name_eng: "toki_bunnygirl", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "toki_bunnygirl.png", isPickup: false },
        { name: "우타하(응원단)", name_eng: "utaha_cheerleader", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "utaha_cheerleader.png", isPickup: false },
        { name: "유우카(파자마)", name_eng: "yuuka_pajama", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "yuuka_pajama.png", isPickup: false },
        { name: "유우카(체육복)", name_eng: "yuuka_sportswear", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "yuuka_sportswear.png", isPickup: false },
        { name: "유즈", name_eng: "yuzu", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "yuzu.png", isPickup: false },
        /* 붉은겨울 연방학원 */
        { name: "체리노(온천)", name_eng: "cherino_onsen", school: "붉은겨울 연방학원", school_eng: "redwinter", image: "cherino_onsen.png", isPickup: false },
        { name: "마리나", name_eng: "marina", school: "붉은겨울 연방학원", school_eng: "redwinter", image: "marina.png", isPickup: false },
        { name: "마리나(치파오)", name_eng: "marina_qipao", school: "붉은겨울 연방학원", school_eng: "redwinter", image: "marina_qipao.png", isPickup: false },
        { name: "메루", name_eng: "meru", school: "붉은겨울 연방학원", school_eng: "redwinter", image: "meru.png", isPickup: false },
        { name: "미노리", name_eng: "minori", school: "붉은겨울 연방학원", school_eng: "redwinter", image: "minori.png", isPickup: false },
        { name: "노도카(온천)", name_eng: "nodoka_onsen", school: "붉은겨울 연방학원", school_eng: "redwinter", image: "nodoka_onsen.png", isPickup: false },
        { name: "시구레", name_eng: "shigure", school: "붉은겨울 연방학원", school_eng: "redwinter", image: "shigure.png", isPickup: false },
        { name: "시구레(온천)", name_eng: "shigure_onsen", school: "붉은겨울 연방학원", school_eng: "redwinter", image: "shigure_onsen.png", isPickup: false },
        { name: "토모에(치파오)", name_eng: "tomoe_qipao", school: "붉은겨울 연방학원", school_eng: "redwinter", image: "tomoe_qipao.png", isPickup: false },
        /* 산해경 고급중학교 */
        { name: "키사키", name_eng: "kisaki", school: "산해경 고급중학교", school_eng: "shanhaijing", image: "kisaki.png", isPickup: false },
        { name: "코코나", name_eng: "kokona", school: "산해경 고급중학교", school_eng: "shanhaijing", image: "kokona.png", isPickup: false },
        { name: "미나", name_eng: "mina", school: "산해경 고급중학교", school_eng: "shanhaijing", image: "mina.png", isPickup: false },
        { name: "레이죠", name_eng: "reijo", school: "산해경 고급중학교", school_eng: "shanhaijing", image: "reijo.png", isPickup: false },
        { name: "루미", name_eng: "rumi", school: "산해경 고급중학교", school_eng: "shanhaijing", image: "rumi.png", isPickup: false },
        { name: "사야", name_eng: "saya", school: "산해경 고급중학교", school_eng: "shanhaijing", image: "saya.png", isPickup: false },
        { name: "사야(사복)", name_eng: "saya_casual", school: "산해경 고급중학교", school_eng: "shanhaijing", image: "saya_casual.png", isPickup: false },
        { name: "슌", name_eng: "shun", school: "산해경 고급중학교", school_eng: "shanhaijing", image: "shun.png", isPickup: false },
        { name: "슌(어린이)", name_eng: "shun_kid", school: "산해경 고급중학교", school_eng: "shanhaijing", image: "shun_kid.png", isPickup: false },
        /* SRT 특수학원 */
        { name: "미야코", name_eng: "miyako", school: "SRT 특수학원", school_eng: "srt", image: "miyako.png", isPickup: false },
        { name: "미야코(수영복)", name_eng: "miyako_swimsuit", school: "SRT 특수학원", school_eng: "srt", image: "miyako_swimsuit.png", isPickup: false },
        { name: "미유", name_eng: "miyu", school: "SRT 특수학원", school_eng: "srt", image: "miyu.png", isPickup: false },
        { name: "모에", name_eng: "moe", school: "SRT 특수학원", school_eng: "srt", image: "moe.png", isPickup: false },
        { name: "모에(수영복)", name_eng: "moe_swimsuit", school: "SRT 특수학원", school_eng: "srt", image: "moe_swimsuit.png", isPickup: false },
        { name: "사키", name_eng: "saki", school: "SRT 특수학원", school_eng: "srt", image: "saki.png", isPickup: false },
        { name: "사키(수영복)", name_eng: "saki_swimsuit", school: "SRT 특수학원", school_eng: "srt", image: "saki_swimsuit.png", isPickup: false },
        /* 트리니티 종합학원 */
        { name: "아즈사", name_eng: "azusa", school: "트리니티 종합학원", school_eng: "trinity", image: "azusa.png", isPickup: false },
        { name: "아즈사(수영복)", name_eng: "azusa_swimsuit", school: "트리니티 종합학원", school_eng: "trinity", image: "azusa_swimsuit.png", isPickup: false },
        { name: "하나에(크리스마스)", name_eng: "hanae_christmas", school: "트리니티 종합학원", school_eng: "trinity", image: "hanae_christmas.png", isPickup: false },
        { name: "하나코(수영복)", name_eng: "hanako_swimsuit", school: "트리니티 종합학원", school_eng: "trinity", image: "hanako_swimsuit.png", isPickup: false },
        { name: "히후미", name_eng: "hifumi", school: "트리니티 종합학원", school_eng: "trinity", image: "hifumi.png", isPickup: false },
        { name: "히후미(수영복)", name_eng: "hifumi_swimsuit", school: "트리니티 종합학원", school_eng: "trinity", image: "hifumi_swimsuit.png", isPickup: false },
        { name: "히나타", name_eng: "hinata", school: "트리니티 종합학원", school_eng: "trinity", image: "hinata.png", isPickup: false },
        { name: "히나타(수영복)", name_eng: "hinata_swimsuit", school: "트리니티 종합학원", school_eng: "trinity", image: "hinata_swimsuit.png", isPickup: false },
        { name: "이치카", name_eng: "ichika", school: "트리니티 종합학원", school_eng: "trinity", image: "ichika.png", isPickup: false },
        { name: "카즈사", name_eng: "kazusa", school: "트리니티 종합학원", school_eng: "trinity", image: "kazusa.png", isPickup: false },
        { name: "카즈사(밴드)", name_eng: "kazusa_band", school: "트리니티 종합학원", school_eng: "trinity", image: "kazusa_band.png", isPickup: false },
        { name: "코하루", name_eng: "koharu", school: "트리니티 종합학원", school_eng: "trinity", image: "koharu.png", isPickup: false },
        { name: "마리(아이돌)", name_eng: "mari_idol", school: "트리니티 종합학원", school_eng: "trinity", image: "mari_idol.png", isPickup: false },
        { name: "마리(체육복)", name_eng: "mari_sportswear", school: "트리니티 종합학원", school_eng: "trinity", image: "mari_sportswear.png", isPickup: false },
        { name: "마시로", name_eng: "mashiro", school: "트리니티 종합학원", school_eng: "trinity", image: "mashiro.png", isPickup: false },
        { name: "마시로(수영복)", name_eng: "mashiro_swimsuit", school: "트리니티 종합학원", school_eng: "trinity", image: "mashiro_swimsuit.png", isPickup: false },
        { name: "미카", name_eng: "mika", school: "트리니티 종합학원", school_eng: "trinity", image: "mika.png", isPickup: false },
        { name: "미네", name_eng: "mine", school: "트리니티 종합학원", school_eng: "trinity", image: "mine.png", isPickup: false },
        { name: "나기사", name_eng: "nagisa", school: "트리니티 종합학원", school_eng: "trinity", image: "nagisa.png", isPickup: false },
        { name: "나츠", name_eng: "natsu", school: "트리니티 종합학원", school_eng: "trinity", image: "natsu.png", isPickup: false },
        { name: "레이사", name_eng: "reisa", school: "트리니티 종합학원", school_eng: "trinity", image: "reisa.png", isPickup: false },
        { name: "사쿠라코", name_eng: "sakurako", school: "트리니티 종합학원", school_eng: "trinity", image: "sakurako.png", isPickup: false },
        { name: "사쿠라코(아이돌)", name_eng: "sakurako_idol", school: "트리니티 종합학원", school_eng: "trinity", image: "sakurako_idol.png", isPickup: false },
        { name: "세이아", name_eng: "seia", school: "트리니티 종합학원", school_eng: "trinity", image: "seia.png", isPickup: false },
        { name: "세리나(크리스마스)", name_eng: "serina_christmas", school: "트리니티 종합학원", school_eng: "trinity", image: "serina_christmas.png", isPickup: false },
        { name: "츠루기", name_eng: "tsurugi", school: "트리니티 종합학원", school_eng: "trinity", image: "tsurugi.png", isPickup: false },
        { name: "우이", name_eng: "ui", school: "트리니티 종합학원", school_eng: "trinity", image: "ui.png", isPickup: false },
        { name: "우이(수영복)", name_eng: "ui_swimsuit", school: "트리니티 종합학원", school_eng: "trinity", image: "ui_swimsuit.png", isPickup: false },
        { name: "요시미(밴드)", name_eng: "yoshimi_band", school: "트리니티 종합학원", school_eng: "trinity", image: "yoshimi_band.png", isPickup: false },
        /* 발키리 경찰학교 */
        { name: "후부키(수영복)", name_eng: "fubuki_swimsuit", school: "발키리 경찰학교", school_eng: "valkyrie", image: "fubuki_swimsuit.png", isPickup: false },
        { name: "칸나", name_eng: "kanna", school: "발키리 경찰학교", school_eng: "valkyrie", image: "kanna.png", isPickup: false },
        { name: "칸나(수영복)", name_eng: "kanna_swimsuit", school: "발키리 경찰학교", school_eng: "valkyrie", image: "kanna_swimsuit.png", isPickup: false }
    ],
    "2": [
        /* 아비도스 고등학교 */
        { name: "세리카", name_eng: "serika", school: "아비도스 고등학교", school_eng: "abydos", image: "serika.png" },
        { name: "노노미", name_eng: "nonomi", school: "아비도스 고등학교", school_eng: "abydos", image: "nonomi.png" },
        { name: "아야네", name_eng: "ayane", school: "아비도스 고등학교", school_eng: "abydos", image: "ayane.png" },
        /* 게헨나 학원 */
        { name: "아카리", name_eng: "akari", school: "게헨나 학원", school_eng: "gehenna", image: "akari.png" },
        { name: "후우카", name_eng: "fuuka", school: "게헨나 학원", school_eng: "gehenna", image: "fuuka.png" },
        { name: "준코", name_eng: "junko", school: "게헨나 학원", school_eng: "gehenna", image: "junko.png" },
        { name: "카요코", name_eng: "kayoko", school: "게헨나 학원", school_eng: "gehenna", image: "kayoko.png" },
        { name: "무츠키", name_eng: "mutsuki", school: "게헨나 학원", school_eng: "gehenna", image: "mutsuki.png" },
        /* 백귀야행 연합학원 */
        { name: "치세", name_eng: "chise", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "chise.png" },
        { name: "시즈코", name_eng: "shizuko", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "shizuko.png" },
        { name: "츠바키", name_eng: "tsubaki", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "tsubaki.png" },
        /* 밀레니엄 사이언스 스쿨 */
        { name: "아카네", name_eng: "akane", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "akane.png" },
        { name: "하레", name_eng: "hare", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "hare.png" },
        { name: "모모이", name_eng: "momoi", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "momoi.png" },
        { name: "우타하", name_eng: "utaha", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "utaha.png" },
        { name: "유우카", name_eng: "yuuka", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "yuuka.png" },
        /* 붉은겨울 연방학원 */
        { name: "모미지", name_eng: "momiji", school: "붉은겨울 연방학원", school_eng: "redwinter", image: "momiji.png" },
        /* 트리니티 종합학원 */
        { name: "아이리", name_eng: "airi", school: "트리니티 종합학원", school_eng: "trinity", image: "airi.png" },
        { name: "하나에", name_eng: "hanae", school: "트리니티 종합학원", school_eng: "trinity", image: "hanae.png" },
        { name: "하나코", name_eng: "hanako", school: "트리니티 종합학원", school_eng: "trinity", image: "hanako.png" },
        { name: "하스미", name_eng: "hasumi", school: "트리니티 종합학원", school_eng: "trinity", image: "hasumi.png" },
        { name: "마리", name_eng: "mari", school: "트리니티 종합학원", school_eng: "trinity", image: "mari.png" },
        /* 발키리 경찰학교 */
        { name: "키리노", name_eng: "kirino", school: "발키리 경찰학교", school_eng: "valkyrie", image: "kirino.png" }
    ],
    "1": [
        /* 아비도스 고등학교 */
        { name: "아야네(수영복)", name_eng: "ayane_swimsuit", school: "아비도스 고등학교", school_eng: "abydos", image: "ayane_swimsuit.png" },
        /* 아리우스 분교 */
        { name: "아츠코(수영복)", name_eng: "atsuko_swimsuit", school: "아리우스 분교", school_eng: "arius", image: "atsuko_swimsuit.png" },
        /* 게헨나 학원 */
        { name: "치나츠", name_eng: "chinatsu", school: "게헨나 학원", school_eng: "gehenna", image: "chinatsu.png" },
        { name: "하루카", name_eng: "haruka", school: "게헨나 학원", school_eng: "gehenna", image: "haruka.png" },
        { name: "이부키", name_eng: "ibuki", school: "게헨나 학원", school_eng: "gehenna", image: "ibuki.png" },
        { name: "이즈미(수영복)", name_eng: "izumi_swimsuit", school: "게헨나 학원", school_eng: "gehenna", image: "izumi_swimsuit.png" },
        { name: "준코(새해)", name_eng: "junko_newyear", school: "게헨나 학원", school_eng: "gehenna", image: "junko_newyear.png" },
        { name: "쥬리", name_eng: "juri", school: "게헨나 학원", school_eng: "gehenna", image: "juri.png" },
        /* 하이랜더 철도학원 */
        { name: "아오바", name_eng: "aoba", school: "하이랜더 철도학원", school_eng: "highlander", image: "aoba.png" },
        /* 백귀야행 연합학원 */
        { name: "미치루", name_eng: "michiru", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "michiru.png" },
        { name: "피나", name_eng: "pina", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "pina.png" },
        { name: "시즈코(수영복)", name_eng: "shizuko_swimsuit", school: "백귀야행 연합학원", school_eng: "hyakkiyako", image: "shizuko_swimsuit.png" },
        /* 밀레니엄 사이언스 스쿨 */
        { name: "아스나", name_eng: "asuna", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "asuna.png" },
        { name: "히비키(응원단)", name_eng: "hibiki_cheerleader", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "hibiki_cheerleader.png" },
        { name: "카린(교복)", name_eng: "karin_schooluniform", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "karin_schooluniform.png" },
        { name: "코타마", name_eng: "kotama", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "kotama.png" },
        { name: "코토리", name_eng: "kotori", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "kotori.png" },
        { name: "유즈(메이드)", name_eng: "yuzu_maid", school: "밀레니엄 사이언스 스쿨", school_eng: "millennium", image: "yuzu_maid.png" },
        /* 붉은겨울 연방학원 */
        { name: "노도카", name_eng: "nodoka", school: "붉은겨울 연방학원", school_eng: "redwinter", image: "nodoka.png" },
        { name: "토모에", name_eng: "tomoe", school: "붉은겨울 연방학원", school_eng: "redwinter", image: "tomoe.png" },
        /* SRT 특수학원 */
        { name: "미유(수영복)", name_eng: "miyu_swimsuit", school: "SRT 특수학원", school_eng: "srt", image: "miyu_swimsuit.png" },
        /* 트리니티 종합학원 */
        { name: "아이리(밴드)", name_eng: "airi_band", school: "트리니티 종합학원", school_eng: "trinity", image: "airi_band.png" },
        { name: "하스미(체육복)", name_eng: "hasumi_sportswear", school: "트리니티 종합학원", school_eng: "trinity", image: "hasumi_sportswear.png" },
        { name: "코하루(수영복)", name_eng: "koharu_swimsuit", school: "트리니티 종합학원", school_eng: "trinity", image: "koharu_swimsuit.png" },
        { name: "미네(아이돌)", name_eng: "mine_idol", school: "트리니티 종합학원", school_eng: "trinity", image: "mine_idol.png" },
        { name: "세리나", name_eng: "serina", school: "트리니티 종합학원", school_eng: "trinity", image: "serina.png" },
        { name: "시미코", name_eng: "shimiko", school: "트리니티 종합학원", school_eng: "trinity", image: "shimiko.png" },
        { name: "스즈미", name_eng: "suzumi", school: "트리니티 종합학원", school_eng: "trinity", image: "suzumi.png" },
        { name: "츠루기(수영복)", name_eng: "tsurugi_swimsuit", school: "트리니티 종합학원", school_eng: "trinity", image: "tsurugi_swimsuit.png" },
        { name: "요시미", name_eng: "yoshimi", school: "트리니티 종합학원", school_eng: "trinity", image: "yoshimi.png" },
        /* 발키리 경찰학교 */
        { name: "후부키", name_eng: "fubuki", school: "발키리 경찰학교", school_eng: "valkyrie", image: "fubuki.png" },
        { name: "키리노(수영복)", name_eng: "kirino_swimsuit", school: "발키리 경찰학교", school_eng: "valkyrie", image: "kirino_swimsuit.png" }
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
