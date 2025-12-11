// lib/metaphor.js
// 恋愛トリセツ用の比喩ラベル（“□□型” の □□ 部分）を決めるユーティリティ

/**
 * 96個の比喩ラベル（= “□□型” の □□ 部分）
 * - 32クラスタ × 各クラスタ3候補 = 96
 * - 配列の [clusterIndex * 3 .. clusterIndex * 3 + 2] が同一クラスタ
 * - 交通系ワード / 抽象ラベル（カリスマ〜型 等）は避けてある
 */
export const METAPHOR_LABELS = [
  // cluster 0
  "全力ジェットコースター型",
  "感情ぐるぐる観覧車ライト型",
  "打ち上げ花火スタートダッシュ型",

  // cluster 1
  "夜更けの灯台ガイド型",
  "山頂キャンプファイヤー型",
  "雨上がりアーチ虹型",

  // cluster 2
  "路地裏カフェソファ席型",
  "日向ぼっこベンチ型",
  "ほろ酔いカウンター席型",

  // cluster 3
  "静かな図書館ブックエンド型",
  "ひっそり美術館キュレーター型",
  "寄り添い窓際ランプ型",

  // cluster 4
  "朝一番バリスタ型",
  "勝負前ロッカールーム型",
  "チーム背中押しベンチコーチ型",

  // cluster 5
  "ちょっと不器用な手作りクッキー型",
  "タスク詰め込み予定表型",
  "締め切り直前ブースト型",

  // cluster 6
  "靴ひも結び直しマラソンランナー型",
  "波待ちサーフボード型",
  "ゴール目前ペースメーカー型",

  // cluster 7
  "曇り空すき間の木漏れ日型",
  "放課後の教室残り組型",
  "ふと立ち寄る神社おみくじ型",

  // cluster 8
  "こたつ布団ぬくぬく型",
  "玄関マットおかえり型",
  "小さな観葉植物コツコツ型",

  // cluster 9
  "目が合った瞬間フラッシュ型",
  "SNS既読確認ループ型",
  "一人反省会ノート型",

  // cluster 10
  "雨音BGMおうち時間型",
  "深夜ラジオ相槌型",
  "長風呂バスタイム思考型",

  // cluster 11
  "秘密基地ノートPC型",
  "朝活ジムルーティン型",
  "会議調整ホワイトボード型",

  // cluster 12
  "旅先スーベニア収集型",
  "写真フォルダ思い出キュレーター型",
  "アルバムめくり時間旅行型",

  // cluster 13
  "書きかけ下書きメール型",
  "下書き保存ラブレター型",
  "送信前バックスペース型",

  // cluster 14
  "さりげない差し入れコンビニ袋型",
  "相談受付休憩スペース型",
  "笑い声スピーカー型",

  // cluster 15
  "ひとり打ち上げ焼き鳥カウンター型",
  "星見上げ物思いベンチ型",
  "夜明け前スヌーズボタン型",

  // cluster 16
  "控えめ背中押しうちわ型",
  "迷ったら一回持ち帰り型",
  "じわじわ効く後味おだし型",

  // cluster 17
  "書き足し付箋メモ型",
  "ノートアプリ整理職人型",
  "デスク上ペン立て整列型",

  // cluster 18
  "火加減見守り土鍋型",
  "焦げ目ギリギリトースト型",
  "味見しすぎシチュー型",

  // cluster 19
  "予定変更にも対応する伸縮ゴム型",
  "静かに熱い溶岩ストーブ型",
  "心の温度差サーモグラフ型",

  // cluster 20
  "休憩所付きハイキングコース型",
  "寄り道多め商店街散歩型",
  "行き先より道中重視トリップ型",

  // cluster 21
  "すぐ動きたくなるスタートダッシュスニーカー型",
  "念のためプランB持ち歩き型",
  "ギリギリまで様子見セーフティネット型",

  // cluster 22
  "空気読みすぎルームセンサー型",
  "つい頑張りすぎるマルチタスク机型",
  "じわじわ親密距離ホットカーペット型",

  // cluster 23
  "まとまり役ラウンドテーブル型",
  "静かに支えるブックシェルフ型",
  "みんなの話を映すホワイトスクリーン型",

  // cluster 24
  "思い出上書きできないフォトフレーム型",
  "返信内容じっくり吟味ティーバッグ型",
  "自分だけ反省会ブラックボックス型",

  // cluster 25
  "心配性安全ピン型",
  "相手優先リュックサック型",
  "楽しさ優先フェスTシャツ型",

  // cluster 26
  "気づいたら中心にいるキャンプファイヤー型",
  "笑いを回収するツッコミマイク型",
  "抜け感演出オーバーサイズパーカー型",

  // cluster 27
  "さりげなく距離詰めるソファ席片側型",
  "聞き役に回りがちカウンター端っこ型",
  "甘えたいけど我慢する毛布くるまり型",

  // cluster 28
  "やさしさ詰め込み弁当箱型",
  "約束守りたい腕時計型",
  "相手のペースに合わせるメトロノーム型",

  // cluster 29
  "妄想広がるシミュレーションノート型",
  "未来設計図スケッチブック型",
  "「もしも」を考えすぎる分岐マップ型",

  // cluster 30
  "信頼されたい番犬ポジション型",
  "笑わせたい漫才ツッコミ型",
  "寂しさ誤魔化す忙しがり屋型",

  // cluster 31
  "予定前に一人で緊張する楽屋ミラー型",
  "想像だけで不安が膨らむ風船ハート型",
  "それでも人が好きな人たらし磁石型",
];

/**
 * 安定ハッシュ関数（loveType + F/T を 32クラスタに落とすため）
 * - 実装はシンプルな文字列ハッシュ（31倍 + charCode）
 * - 戻り値は 32bit 符号付き整数
 */
function stableHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0; // 32bit に収める
  }
  return hash;
}

/**
 * loveType と MBTI(F/T) から 0〜31 のクラスタIndexを決める
 * - loveType の文字列と F/T をシードにしてハッシュ
 * - loveType 名の中身に依存せず、「同じ loveType+F/T なら常に同じクラスタ」に落ちる
 */
function getClusterIndexFromProfile(profile) {
  if (!profile) return 0;

  const loveType = String(profile.loveType ?? "");
  const mbtiRaw = String(profile.mbti ?? "").toUpperCase().trim();

  // MBTI の3文字目が F かどうかを優先的に見る（例：ENTJ, ENFP）
  const third = mbtiRaw[2] || "";
  const isFeeling =
    third === "F" ||
    // 念のため、全体に F が含まれていて T が含まれないケースも Feeling 扱い
    (mbtiRaw.includes("F") && !mbtiRaw.includes("T"));

  const seed = `${loveType}|${isFeeling ? "F" : "T"}`;
  const rawHash = stableHash(seed);
  const clusterIndex = ((rawHash % 32) + 32) % 32; // 0〜31 に正規化

  return clusterIndex;
}

/**
 * 比喩ラベルを1つ選ぶユーティリティ
 *
 * @param {Object} params
 * @param {Object} params.profile - { name, gender, age, mbti, loveType } を含む想定
 * @param {string} [params.explicitMetaphorLabel] - フロント等で明示指定したいときの上書き用
 * @returns {string} metaphorLabel - “□□型” の □□ に入るラベル文字列
 */
export function chooseMetaphorLabel({
  profile,
  explicitMetaphorLabel,
} = {}) {
  // フロント側で明示指定があればそれをそのまま優先
  if (explicitMetaphorLabel && typeof explicitMetaphorLabel === "string") {
    return explicitMetaphorLabel;
  }

  // プロファイルが無い or loveType / MBTI が空なら、とりあえず cluster 0 の中からランダム
  if (!profile) {
    const fallback = METAPHOR_LABELS.slice(0, 3);
    const idx = Math.floor(Math.random() * fallback.length);
    return fallback[idx];
  }

  const clusterIndex = getClusterIndexFromProfile(profile);
  const base = clusterIndex * 3;

  // 想定外で配列範囲外になった場合のガード
  const safeBase =
    base >= 0 && base + 2 < METAPHOR_LABELS.length ? base : 0;

  const candidates = METAPHOR_LABELS.slice(safeBase, safeBase + 3);
  const idx = Math.floor(Math.random() * candidates.length);

  return candidates[idx];
}

/**
 * デバッグ・検証用：与えた profile がどのクラスタIndexに落ちるか確認したいとき用
 */
export function debugGetClusterIndex(profile) {
  return getClusterIndexFromProfile(profile);
}
