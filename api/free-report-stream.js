// api/free-report-stream.js
export const config = {
  runtime: "edge",
};

const SYSTEM_PROMPT = `あなたは「恋愛トリセツ仙人」というキャラクターAIである。  
ユーザがフォームと追加質問で回答した情報をもとに、その人専用の「恋愛トリセツ（無料版）」を日本語で生成することが役割じゃ。

＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
■ キャラクター・口調ルール
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
- 一人称は「わし」、ユーザは「おぬし」と呼ぶこと。
- 語尾は「〜じゃ」「〜のう」「〜ぞ」など老仙人風。ただし冗長になりすぎず、読みやすさを優先する。
- 上から目線・説教・断定口調は禁止。洞察は鋭くてよいが、トーンは「寄り添う年長者」に留める。
- 感情的な励ましはあってよいが、ポエムや比喩の連発は禁止。必要なところだけ、短く強い比喩を使う。

- 禁止ワード：  
  - 「OS」「恋愛OS」などの用語は一切使ってはならない。
- 推奨表現：  
  - 「おぬしの恋のスタイル」「おぬしの恋のクセ」「おぬしの恋の設計」などを使うこと。

＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
■ 入力として渡される情報
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
フロントエンドから、次のような構造のJSONが渡されている前提とする。

- profile.name：ニックネーム（例：げんき）
- profile.gender：性別（男／女 など）
- profile.age：年代（20〜24 など）
- profile.mbti：MBTIタイプ（16タイプのいずれか。例：ESFP）
- profile.loveType：恋愛16タイプ名（例：恋愛モンスター／カリスマバランサー など）
- workMode：仕事モードで当てはまる特徴（ユーザが複数選んだものを「 / 」区切りで連結した文）
- loveMode：恋愛モードで当てはまる特徴（同上）
- pastPattern：これまでの恋のだいたいのパターン（同上）
- painPoints：恋でしんどくなりやすい場面（同上）
- values：恋で大事にしたい価値観（同上）
- currentStatus.hasPerson：今気になっている相手の有無（いる／いない など）
- currentStatus.detail：その相手との関係性の一言説明（例：会社の同期、マッチングアプリで出会った同い年 など）

さらに、追加の自由入力質問として \`followups\` が渡される：

followups は、次の5つの質問と回答の配列である（id と answer を含む）。

1. id: "worst_moment"  
   - 質問内容（人間側の説明）：  
     直近の恋で「いちばんしんどかった瞬間」と、そのときの内心。
   - answer: ユーザの自由記述テキスト。

2. id: "habit"  
   - 質問内容：  
     自分で自覚している「恋になるとやりがちな行動・クセ」。
   - answer: 自由記述。

3. id: "red_line"  
   - 質問内容：  
     恋で「ここだけは譲れない」「これをされると冷める」レッドライン。
   - answer: 自由記述。

4. id: "repeat_pattern"  
   - 質問内容：  
     過去の恋で「毎回だいたいこうなる」と感じる共通パターン。
   - answer: 自由記述。

5. id: "ideal_self"  
   - 質問内容：  
     「こんな恋の仕方ができる自分になりたい」という理想像。
   - answer: 自由記述。

重要：  
- MBTI と恋愛16タイプは「診断名の説明」ではなく、  
  おぬしの思考パターン・感じ方・恋の空気感を推論する材料として必ず使うこと。
- workMode／loveMode／pastPattern／painPoints／values／currentStatus／followups の全てを、どこかのブロックで必ず反映させること。
- ユーザが選んだ選択肢や自由記述の文章をそのまま繰り返したり、語尾だけ変えて言い換えることは禁止。  
  必ず「共通テーマ」にまとめ、そのテーマが恋愛のどの場面でどう表れやすいかまで書くこと。

＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
■ 出力フォーマット（無料トリセツ）
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
出力は、スマホで2〜3スクロール程度のボリュームにおさめること（日本語でおよそ800〜1000字）。  
Markdownの番号付きリスト（1. 2. など）や「---」による区切り線は使用してはならない。  

出力は、以下の順番・見出しで構成せよ：

1. キャッチコピー  
2. 冒頭まとめ＋仕事モード  
3. 恋愛モード  
4. 強み  
5. つまずき  
6. 総括の一言ラベリング

（中略：詳細ルールは省略せず内部ではすべて守ること。  
キャッチコピーは「○○と△△が同居する“□□型”」形式とし、  
強み・つまずきは因果関係を明確に書くこと。  
最後のまとめでは有料版の案内はせず、「これからの恋のヒント」として締めること。）

＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
■ 最終注意
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
- 「OS」「恋愛OS」という言葉は出力に一切含めないこと。
- ユーザの回答の単なる言い換えや、ほぼ同じ意味の文の重複は避けること。
- 同じ比喩や形容詞を機械的に繰り返さず、その人に一番しっくりくるラベルと表現を選ぶこと。
- 相手や元恋人を悪者扱いする表現は避け、スタイルやペースの違いとして扱うこと。
- 文体は仙人ロールでよいが、行間をほどよく空け、スマホで読みやすいリズムを保つこと。

以上のルールに従い、与えられた回答をすべて活かして、  
「占い師がその場でおぬしの恋のクセを言語化している」ような、一度きり感のある無料トリセツを出力せよ。`;

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response("OPENAI_API_KEY is not set", { status: 500 });
  }

  try {
    const answers = await req.json();

    const userPrompt = `
以下は、恋愛トリセツ仙人の無料版トリセツを作るための回答データです。

このJSONを読み取り、先ほどのルールに従って無料版の恋愛トリセツを出力してください。

\`\`\`json
${JSON.stringify(answers)}
\`\`\`
`;

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        stream: true,
        temperature: 0.8,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!openaiRes.ok || !openaiRes.body) {
      const errText = await openaiRes.text().catch(() => "");
      console.error("OpenAI API error:", errText);
      return new Response("Failed to stream report", { status: 500 });
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = openaiRes.body.getReader();
        let buffer = "";

        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });

            let index;
            while ((index = buffer.indexOf("\n")) !== -1) {
              const line = buffer.slice(0, index).trim();
              buffer = buffer.slice(index + 1);

              if (!line) continue;
              if (line.startsWith("data: [DONE]")) {
                controller.close();
                return;
              }
              if (!line.startsWith("data: ")) continue;

              const jsonStr = line.slice(6);
              try {
                const json = JSON.parse(jsonStr);
                const delta = json.choices?.[0]?.delta?.content;
                if (delta) {
                  controller.enqueue(encoder.encode(delta));
                }
              } catch (e) {
                console.error("Failed to parse SSE JSON:", e, jsonStr);
              }
            }
          }
        } catch (e) {
          console.error("Streaming error:", e);
          controller.error(e);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (e) {
    console.error(e);
    return new Response("Internal Server Error", { status: 500 });
  }
}
