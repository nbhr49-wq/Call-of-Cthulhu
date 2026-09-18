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


### v7 changes
- BGM maximum playback volume reduced from 0.30 to 0.15; fade-in remains approximately 12 seconds.
- Final artwork replaced with an eye-focused crop so the eye is larger and more immediately readable.
- Final scene text remains separate HTML text rather than relying on text embedded in the artwork.


### Final approved image version
- Uses the latest approved eye-focused final artwork.
- Final scene uses the artwork's own typography without duplicate HTML overlays.
- BGM maximum volume is 0.15 with the slow fade-in preserved.


### v9 final
- Added `?v=9` cache-busting to the final image URL so the latest `cthulhu_final.png` is requested instead of a cached older image.
- Keeps the approved final artwork and the very quiet BGM (maximum volume 0.15).


### v10 changes
- Final artwork now fills the entire viewport (`100vw` × `100vh`) using `object-fit: cover`.
- Final artwork is displayed at full opacity/brightness instead of the previous dimmed 0.55 opacity.
- Final scene uses only the approved artwork, avoiding duplicate text overlays.
- Added `?v=10` cache-busting to the final image URL.
