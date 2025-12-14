// lib/metaphor.js
// 恋愛トリセツの「“□□型”」の □□ 部分を決めるユーティリティ

// ==============================
// 1. 96個の比喩ラベル定義（※ユーザ指定そのまま）
// ==============================

/**
 * METAPHOR_TABLE[loveCode][F or T] = string[]
 * loveCode は LCRO / LCRE / ... / FAPE など16種類
 * 各配列は 3 つの候補（合計 16 × 2 × 3 = 96 個）
 */
export const METAPHOR_TABLE = {
  // 1. LCRO（ボス猫）Lead・Cuddly・Realistic・Optimistic
  LCRO: {
    F: [
      "面倒見のいいクラスリーダー型",
      "前向きスタメンキャプテン型",
      "休み時間も頼られる学級委員型",
    ],
    T: [
      "勝ち筋読める航海キャプテン型",
      "状況判断に強いゲームマスター型",
      "盤面を読み切るボードゲーム参謀型",
    ],
  },

  // 2. LCRE（隠れベイビー）Lead・Cuddly・Realistic・Earnest
  LCRE: {
    F: [
      "甘えスイッチ付きサブリーダー型",
      "袖で支えるコンダクター型",
      "守られポジの裏方リーダー型",
    ],
    T: [
      "計算された安心ブランケット型",
      "守備固めのセーフティネット型",
      "リスク最小化クッション型",
    ],
  },

  // 3. LCPO（主役体質）Lead・Cuddly・Passionate・Optimistic
  LCPO: {
    F: [
      "ステージ中央スポットライト型",
      "拍手を集めるセンターステージ型",
      "歓声を浴びるワンマンライブ型",
    ],
    T: [
      "演出もこなす主演俳優型",
      "台本も書ける主演クリエイター型",
      "カメラ意識高めなセルフプロデュース主演型",
    ],
  },

  // 4. LCPE（ツンデレヤンキー）Lead・Cuddly・Passionate・Earnest
  LCPE: {
    F: [
      "不器用あったかストーブ型",
      "見た目ツンでも芯はカイロ型",
      "外側ゴツめ中身ホットチョコ型",
    ],
    T: [
      "ガード固めの火力エンジン型",
      "装甲付きターボエンジン型",
      "急発進注意のスポーツカー型",
    ],
  },

  // 5. LARO（憧れの先輩）Lead・Accept・Realistic・Optimistic
  LARO: {
    F: [
      "余裕のある先導ランナー型",
      "半歩前を歩く道案内リーダー型",
      "後ろを気にかけるペースメーカー型",
    ],
    T: [
      "先回りナビゲーター型",
      "俯瞰で導くルートプランナー型",
      "地図片手のロジカルガイド型",
    ],
  },

  // 6. LARE（Lead・Accept・Realistic・Earnest）
  LARE: {
    F: [
      "みんなを包むリビングホスト型",
      "温度をそろえる晩ごはんテーブル型",
      "緊張をほぐす控えめホスト型",
    ],
    T: [
      "段取りで整える進行ディレクター型",
      "全体最適を考えるスケジュール設計者型",
      "抜け漏れを防ぐチェックリストリーダー型",
    ],
  },

  // 7. LAPO（パーフェクトカメレオン）Lead・Accept・Passionate・Optimistic
  LAPO: {
    F: [
      "フェス会場オールラウンダー型",
      "どのステージも回せるイベントコンダクター型",
      "雰囲気次第で色が変わるカメレオンサブMC型",
    ],
    T: [
      "場を読み切る音響ミキサー型",
      "バランス調整するサウンドディレクター型",
      "周波数合わせるチューニングマスター型",
    ],
  },

  // 8. LAPE（キャプテンライオン）Lead・Accept・Passionate・Earnest
  LAPE: {
    F: [
      "仲間想いの焚き火リーダー型",
      "輪の中心のキャンプファイヤー型",
      "雨でも消えないリーダー焚き火型",
    ],
    T: [
      "ゴールまで引っ張る試合キャプテン型",
      "信念まっすぐキャプテン型",
      "戦略ボード片手のゲームキャプテン型",
    ],
  },

  // 9. FCRO（ロマンスマジシャン）Follow・Cuddly・Realistic・Optimistic
  FCRO: {
    F: [
      "ふんわり魔法のクッション型",
      "着地を柔らかくするセーフマット型",
      "さりげなく効くヒーリングアロマ型",
    ],
    T: [
      "段取り先読みサポーター型",
      "黒子ポジの戦略サポーター型",
      "裏で支えるオペレーションマネージャー型",
    ],
  },

  // 10. FCRE（ちゃっかりうさぎ）Follow・Cuddly・Realistic・Earnest
  FCRE: {
    F: [
      "こじんまり安心こたつ型",
      "世話焼きミニシェルター型",
      "帰りたくなる秘密基地リビング型",
    ],
    T: [
      "居心地設計するサイドプランナー型",
      "生活動線まで考えるホームマネージャー型",
      "細部にうるさいルームコンシェルジュ型",
    ],
  },

  // 11. FCPO（恋愛モンスター）Follow・Cuddly・Passionate・Optimistic
  FCPO: {
    F: [
      "全力ジェットコースター型",
      "高低差激しめ恋愛アトラクション型",
      "待ち時間さえワクワクするテーマパーク型",
    ],
    T: [
      "イベント全振りフェスプランナー型",
      "段取り命のパーティープロデューサー型",
      "盛り上がり曲順まで組むセトリ職人型",
    ],
  },

  // 12. FCPE（忠犬ハチ公）Follow・Cuddly・Passionate・Earnest
  FCPE: {
    F: [
      "一途に待ち続けるホーム待機型",
      "最後まで残る見送りホーム型",
      "玄関灯りつけっぱなしホスト型",
    ],
    T: [
      "ルール付き一途ガーディアン型",
      "境界線は守る番犬キャプテン型",
      "セキュリティ厳しめホームガード型",
    ],
  },

  // 13. FARO（不思議生命体）Follow・Accept・Realistic・Optimistic
  FARO: {
    F: [
      "気ままに寄り添う公園ハンモック型",
      "揺れながら考えるゆるキャンチェア型",
      "雲のように形を変えるスカイウォッチャー型",
    ],
    T: [
      "空気を読む気圧予報士型",
      "場の気圧計るバロメーター型",
      "変化をいち早く察知するセンサー型",
    ],
  },

  // 14. FARE（敏腕マネージャー）Follow・Accept・Realistic・Earnest
  FARE: {
    F: [
      "差し入れ上手な楽屋マネージャー型",
      "影で整えるケアマネ型",
      "体調と気分を管理するコンディションキーパー型",
    ],
    T: [
      "段取り命の舞台監督型",
      "抜かりなく回すプロダクションマネージャー型",
      "トラブル前提で準備するリスクマネージャー型",
    ],
  },

  // 15. FAPO（デビル天使）Follow・Accept・Passionate・Optimistic
  FAPO: {
    F: [
      "悪戯好きな花火職人型",
      "線香花火と打ち上げ両刀型",
      "甘さと刺激を混ぜるカクテルシェイカー型",
    ],
    T: [
      "気分の波を操るDJブース型",
      "テンション調整する裏方DJ型",
      "空気読みつつBPMいじるクラブオペレーター型",
    ],
  },

  // 16. FAPE（最後の恋人）Follow・Accept・Passionate・Earnest
  FAPE: {
    F: [
      "じっくり煮込むシチュー鍋型",
      "弱火で育てるコトコト煮込み型",
      "一晩寝かせて味が出る熟成ポトフ型",
    ],
    T: [
      "一生モノ設計のマイホーム型",
      "長期設計のライフプランビルダー型",
      "老後まで見据える終身設計プランナー型",
    ],
  },
};

// ==============================
// 2. 日本語ラベル → コード対応表
// ==============================

const LOVE_NAME_TO_CODE = {
  ボス猫: "LCRO",
  隠れベイビー: "LCRE",
  主役体質: "LCPO",
  ツンデレヤンキー: "LCPE",
  憧れの先輩: "LARO",
  カリスマバランサー: "LARE",
  パーフェクトカメレオン: "LAPO",
  キャプテンライオン: "LAPE",
  ロマンスマジシャン: "FCRO",
  ちゃっかりうさぎ: "FCRE",
  恋愛モンスター: "FCPO",
  忠犬ハチ公: "FCPE",
  不思議生命体: "FARO",
  敏腕マネージャー: "FARE",
  デビル天使: "FAPO",
  最後の恋人: "FAPE",
};

// ==============================
// 3. ユーティリティ関数群
// ==============================

/**
 * loveType 文字列から LCRO / FCPO などのコードを抜き出す
 * - "LCRO（ボス猫）" / "ボス猫(LCRO)" / "LCRO" / "ボス猫" みたいなパターンを全部許容
 */
function detectLoveCode(rawLoveType) {
  if (!rawLoveType) return null;

  const s = String(rawLoveType);
  const sUpper = s.toUpperCase();
  const codes = Object.keys(METAPHOR_TABLE); // ["LCRO","LCRE",...,"FAPE"]

  // ① まず LCRO / FCPO などコード表記が含まれていないかを見る
  for (const code of codes) {
    if (sUpper.includes(code)) return code;
  }

  // ② 含まれていない場合、日本語ラベルから判定
  //   - カッコや空白をざっくり削除しておく
  const plain = s.replace(/[()（）\s]/g, "").trim();

  for (const [jpName, code] of Object.entries(LOVE_NAME_TO_CODE)) {
    if (plain.includes(jpName)) {
      return code;
    }
  }

  // ③ それでもダメなら null
  return null;
}

/**
 * MBTI文字列から F/T を判定
 * - 原則3文字目を優先
 */
function detectFT(rawMbti) {
  if (!rawMbti) return "F";
  const s = String(rawMbti).toUpperCase().trim();
  const third = s[2] || "";
  if (third === "F" || third === "T") return third;

  // 保険：F含んでT含まないならF、逆ならT
  if (s.includes("F") && !s.includes("T")) return "F";
  if (s.includes("T") && !s.includes("F")) return "T";

  // それでも決められなければFに倒す
  return "F";
}

/**
 * 比喩ラベル（“□□型”の□□部分）を1つ選ぶ
 *
 * @param {Object} params
 * @param {Object} params.profile { name, gender, age, mbti, loveType } を想定
 * @param {string} [params.explicitMetaphorLabel] フロントで完全指定したいとき用
 * @returns {string} metaphorLabel
 */
export function chooseMetaphorLabel({ profile, explicitMetaphorLabel } = {}) {
  // もしフロントで明示指定してきたら、それを最優先
  if (explicitMetaphorLabel && typeof explicitMetaphorLabel === "string") {
    return explicitMetaphorLabel;
  }

  if (!profile) {
    // 何も分からないときは FCPO × F の1個目をデフォルトにしておく
    return "全力ジェットコースター型";
  }

  const code = detectLoveCode(profile.loveType);
  const ft = detectFT(profile.mbti);

  const cluster =
    (code && METAPHOR_TABLE[code] && METAPHOR_TABLE[code][ft]) || null;

  const candidates =
    cluster ||
    METAPHOR_TABLE.FCPO.F || // 最悪ここ
    ["全力ジェットコースター型"];

  const idx = Math.floor(Math.random() * candidates.length);
  return candidates[idx];
}

/**
 * デバッグ用：どのコード & F/T が選ばれているか確認したいときに使う
 */
export function debugResolveMetaphor(profile) {
  const code = detectLoveCode(profile?.loveType);
  const ft = detectFT(profile?.mbti);
  return {
    code,
    ft,
    candidates:
      (code && METAPHOR_TABLE[code] && METAPHOR_TABLE[code][ft]) || null,
  };
}
