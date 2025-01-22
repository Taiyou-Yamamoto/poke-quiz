# Poke-Quiz! - ポケモン好きによる、ポケモン好きのためのクイズアプリ 🎮⚡️

## 概要

Poke-Quiz は、ポケモンの名前を当てるクイズアプリです。 エンジョイ勢からポケモン廃人まで楽しめるよう、3 つの異なる難易度のクイズを用意しました。 あなたのポケモン知識が試されるシンプルかつ挑戦的なゲームで、高スコアを目指しましょう！目指せポケモンマスター！

## 特徴

- 🎯 **3 つのレベルのクイズ**:

  モンスター、スーパー、ハイパー。どのレベルでも挑戦可能！

- 🏆 **ランキング機能**:

  他のトレーナーとスコアを競って自分の実力を証明しよう。目指せポケモンマスター!

- 🌟 **直感的で楽しいデザイン**:

  動く背景や効果音、懐かしのドット絵で、ポケモンの世界観を感じられます。

## なぜ Poke-Quiz を作ったのか？

私自身がポケモン好きであることはもちろんですが、このアプリには以下のような目的があります：

### 1. ポケモンという親しみやすいコンテンツを活用

ポケモンの世界観を楽しみながら、誰でも気軽に挑戦できるアプリを作りたいと考えました。

### 2. クイズという娯楽性・競技性を通じた楽しさを提供

プレイヤーが知識を試しながらスコアを競えることで、楽しみと達成感を同時に味わえる仕組みを実現しました。

### 3. ユーザーの獲得とフィードバック収集

上記の二点を活用することにより、多くの年齢層のユーザーに対してアプリを使用する際のハードルを下げることが狙いです。それによって多くのリアルなフィードバックを収集できると考えました。得られた実際の声を自分の技術や設計の改善に役立てたいと考えています。

## 使用した技術スタック

このプロジェクトでは、以下の技術を使用しました

### フロントエンド

- Next.js: モダンなフロントエンドフレームワーク。
- TypeScript: 型安全な開発を実現。
- Tailwind CSS: ユーティリティベースのスタイリング。
- FontAwesome: アイコンの使用に活用。
- MUI (Material-UI): 高度な UI コンポーネントを使用して、洗練されたデザインを実現。
- Axios: バックエンドとの通信を簡単に実装。
-

### バックエンド

- Laravel: 高機能な PHP フレームワーク。RESTful API を提供。
- Postgres: データベースとして利用。スケーラブルで信頼性の高い構成\*\*

### デプロイ方法

このプロジェクトは以下の環境にデプロイされています：

- フロントエンド: Vercel
- バックエンド: Heroku

# 画面遷移図

![MacBook Air - 1](https://github.com/user-attachments/assets/337d1630-795d-4974-af99-0c07bd212de5)

[Figma でデザインを見る]"https://embed.figma.com/design/1eN0OLjIgtudjqbNjhQlMF/portfolio-%E6%BC%94%E7%BF%92?node-id=0-1&embed-host=share"

# BGM について

このアプリケーションでは、ユーザー体験を重視し,Header.tsx での BGM 管理を行っています。以下に設計の意図と具体的な仕組みを説明します。

### 背景と課題

- **ブラウザの再生制限**

多くのブラウザでは、ユーザーが明示的に再生を許可しない場合、音声や動画の自動再生が制限されます。 ページ遷移によって `{children}` が変更されると、再生制限が再び適用され、ユーザー体験を損ないます。

- **ユーザー体験の一貫性**

一度 BGM を ON にしたユーザーが、画面遷移後に再び BGM を操作する必要があるのはストレスとなります。

**実装例:**

```react:qiita.rb
<body className={${geistSans.variable} ${geistMono.variable} antialiased}>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <SpeedInsights />
</body>
```

`{children}`がページ遷移されても`<Header />` コンポーネントは再レンダリングされず、ブラウザ制限の影響を受けません。

# SSG, ISR によるデータ取得と表示

このアプリケーションのホーム画面では一度に数十匹分のイメージを表示しており、ユーザー体験の向上を図っています

## **SSG: Static Site Generation**

アプリケーションのビルド時に 1302 匹分のポケモンデータを API から取得し、静的ファイルとして生成します。これにより、初回アクセス時でも高速なレスポンスを実現しています。

**実装例: ポケモンの名前と URL の取得**

```react:qiita.rb
export const getAllPokemonNameAndUrl = async (
url: string
): Promise<Pokemon[]> => {
if (url == '') {
throw new Error('URL が提供されていません');
}

try {
const res = await fetch(url, { cache: 'force-cache' }); //ビルド時のキャッシュの利用を明示

    if (!res.ok) {
      throw new Error('response is not ok');
    }
    const data = await res.json();
    return data.results;

} catch (error) {
console.error('Error in getAllPokemonNameAndUrl:', error);
}
return [];
};
```

## ISR: Incremental Static Regeneration

背景として使われる画像データは ISR を利用して一定間隔で再生成されるようになっています。

**実装例:**

ランダム化されたポケモンデータの取得 以下の関数では、3 分ごとにデータを更新し、新しいデータを取得します

```react:qiita.rb
export const getShuffledFiftyData = async (
url: string,
array: Pokemon[]
): Promise<any[]> => {
const res = await fetch(url, {
method: 'POST',
headers: {
'Content-type': 'application/json',
},
body: JSON.stringify(array),
next: { revalidate: 180 },
});

if (!res.ok) {
throw new Error(
Fetch failed with status ${res.status}: ${res.statusText}
);
}

const data = await res.json();

return data;
};
```

# リーダブルコードの取り組み

プロジェクトでは、再利用性や保守性を重視した設計を行っています。特に、PokemonAPI を通じて取得したデータを処理する関数群を集約した dataHandle.ts ファイルでは、次のような工夫を取り入れています。

### 1. 各関数は 1 つの責務（単一責任）を持つように設計

各関数は明確な目的を持たせることで、役割を理解しやすくしています。 これにより、コードが簡潔かつ直感的になり、保守性が向上しています

### 2. 誰が見ても分かりやすい関数名を採用

関数名は、その役割を簡潔かつ正確に表現しています

**実装例:**

```react:qiita.rb
//画像を取得
export const getImage = (data: any): string => {
return data.sprites.front_default;
};

//日本語名を取得
export const getJPName = async (speciesData: any): Promise<string> => {
const PokemonJPName = speciesData.names.find(
(pokemonData: any) => pokemonData.language.name === 'ja-Hrkt'
);
return PokemonJPName.name;
};

//日本語名と画像を取得
export const getImage_JPName = async (
data: any
): Promise<{
image: string;
name: string;
}> => {
const pokemonImage = getImage(data);
const pokemonNames = await getSpeciesData(data);
const pokemonJPName = await getJPName(pokemonNames);

return {
image: pokemonImage,
name: pokemonJPName,
};
};
```

このような取り組みにより、コードを他の開発者が簡単に読み解き、**保守性**や**再利用性**の確保に加え、**機能拡張**をスムーズに進められるようにしています。

# スコアの算出方について

Poke-Quiz では、プレイヤーのスコアを次のような計算式に基づいて算出しています。これにより、ゲームの達成感や戦略性を高めています。

**1.時間切れの場合**

```react:qiita.rb
calculatedData = score _ 1.1 _ Math.pow(score, 0.7) _ 10 _ 0.95;
```

**2.〇〇秒でクリアした場合**

```react:qiita.rb
//second = 残り秒数
calculatedData = score _ 1.1 _ (second _ Math.pow(score, 0.7)) _ 10;
```

# 採用を見送った技術と学習内容

今回の開発では分け合って採用されなかった技術についても、今後の採用を見越し、qiite で記事として記述してスキルの定着を図りました

### 1. useContext

- **理由:** BGM の変更が URL（pathname）に基づいている点
  useContext を使用して状態を管理することも可能ですが、URL ごとの動的な BGM 切り替えは Header コンポーネント内で完結する方が設計上の一貫性が高いと判断しました

Qiite: https://qiita.com/Taiyou-Yamamoto/items/3fd3561f579ec756a303

公式ドキュメント: https://github.com/joshwcomeau/use-sound

### 2. useSound

- **理由:** 動的な src 変更への非対応
  useSound は音声ファイルの src を動的に変更する用途には向いておらず、ライブラリの設計思想とも異なるため、採用を見送りました

Qiite: https://qiita.com/Taiyou-Yamamoto/private/715cb702d3835cf471e7

※ この記事は学習目的で作成したもので、現時点では限定公開としています。

## テーブル構造

- **id:** 主キーとして自動インクリメントされる整数型カラム。

- **quiz_id:** クイズの種類を識別するための整数型カラム。

- **score:** プレイヤーのスコアを記録する整数型カラム。

- **created_at / updated_at:** デフォルトで作成日時と更新日時を追跡するタイムスタンプ型カラム。

```laravel:qiita.rb
      public function up(): void
    {
        Schema::create('scores', function (Blueprint $table) {
            $table->id();
            $table->integer('quiz_id');
            $table->integer('score');
            $table->timestamps();
        });
    }

```

# データ取得について

このアプリケーションでは、ポケモンのデータを取得するために **PokemonAPI** を活用しています。API 連携においては、**Next.js**が提供するサーバーサイド環境ではネイティブの`fetch`を、バックエンドの Laravel との通信には **axios**を採用しています。

## PokemonAPI と fetch

- Next.js では、SSR（サーバーサイドレンダリング）や SSG（静的サイト生成）を行うためにネイティブの`fetch`の利用が推奨されています。

## laravel との連携で Axios を採用した理由

- Fetch API の煩わしさを解消

  fetch API を使用する場合、 リクエストとレスポンスの処理がやや複雑になることがあります。一方、axios は、HTTP リクエストの処理が簡単になります

- 実際に触ってみて簡単だった

  Axios は設定が直感的で、実際にプロジェクトで使用した際にストレスなく扱えると感じました。シンプルな API 設計がにより、今後のユーザー認証などの機能の実装の際に、`fetch`での連携よりも開発効率が高いと判断し、保守性も向上することを期待しています。

以下のコードは、PokemonAPI からデータを取得する例です

# 音楽提供

本アプリケーションで使用している BGM や SE は、以下のクリエイター様から提供されています。多彩な音楽素材により、アプリの世界観を一層引き立てることができました。

## イワシロ音楽素材様

URL:https://iwashiro-sounds.work/
