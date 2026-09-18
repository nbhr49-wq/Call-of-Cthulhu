# クトゥルフ神話TRPG・参加体験サイト

GitHub Pagesにそのまま置ける試作版です。

## ファイル
- `index.html` : 3段階の体験
- `style.css` : 霧・文字・演出
- `script.js` : ダイス演出、BGM、ページ遷移
- `bgm.mp3` : ここに使用したいBGMを入れてください

## 流れ
1. 霧の中の「何か」→ 目星
2. 必ず成功 → 「クトゥルフ神話TRPG」が浮かぶ
3. 「何かが聞こえる気がする・・・・・」
4. 聞き耳 → 必ず成功 → BGMがフェードイン
5. 「深淵へ……」
6. 「ようこそ、クトゥルフの世界へ」
7. 少し間を置いて「見つけた。」
8. 最後に「あなたは、もう見つかっています。」

## GitHub Pages
リポジトリに3ファイルをアップロードし、`Settings → Pages` から公開できます。
BGMは著作権・利用規約を確認したうえで `bgm.mp3` として配置してください。

※ ブラウザの仕様上、音声はユーザー操作をきっかけに再生する構成にしています。


### v3 changes
- Final horror image now uses contain-style fitting so the full image is visible without cropping.
- BGM fade-in is slower: approximately 12 seconds to reach 0.60 volume.


### v4 changes
- 「……何か、聞こえませんか？」を削除。
- 「何かが聞こえる気がする・・・・・」を押すと、少し間を置いて直接「聞き耳を振る」が表示されます。


### v5 changes
- Final line changed to 「あなたは既に見られています・・・」.

### v6 changes
- BGM maximum playback volume reduced from 0.60 to 0.30; slow fade-in timing remains approximately 12 seconds.
