const $ = id => document.getElementById(id);
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function diceRoll(numberEl, resultEl, finalValue, successText) {
  for (let i=0;i<18;i++) {
    numberEl.textContent = Math.floor(Math.random()*100)+1;
    await sleep(45+i*5);
  }
  numberEl.textContent = String(finalValue).padStart(2,"0");
  await sleep(350);
  resultEl.textContent = successText;
}

$("spotBtn").addEventListener("click", async () => {
  $("spotBtn").disabled = true;
  $("roll").classList.remove("hidden");
  await diceRoll($("rollNumber"), $("rollResult"), 23, "成功");
  await sleep(900);
  $("mystery").classList.add("hidden");
  $("spotBtn").classList.add("hidden");
  $("title").classList.remove("hidden");
  await sleep(3500);
  $("listenBtn").classList.remove("hidden");
});

$("listenBtn").addEventListener("click", async () => {
  $("listenBtn").classList.add("hidden");
  $("listenArea").classList.remove("hidden");
  // 余韻を少しだけ残してから、次の判定へ。
  await sleep(700);
  $("listenRollBtn").classList.remove("hidden");
});

$("listenRollBtn").addEventListener("click", async () => {
  $("listenRollBtn").disabled = true;
  $("listenRoll").classList.remove("hidden");
  await diceRoll($("listenNumber"), $("listenResult"), 08, "成功");
  await sleep(500);

  const bgm = $("bgm");
  try {
    bgm.volume = 0;
    await bgm.play();
    let v=0;
    const timer=setInterval(()=>{
      v += 0.005;
      bgm.volume=Math.min(v,0.15);
      if(v>=0.60) clearInterval(timer);
    },100);
  } catch(e) {
    // 自動再生制限等で再生できない場合も、画面演出は継続します。
  }

  await sleep(1800);
  $("abyssBtn").classList.remove("hidden");
});

$("abyssBtn").addEventListener("click", async () => {
  document.body.classList.add("abyss-bg");
  $("scene").classList.add("fade-out");
  await sleep(1900);

  // 3ページ目を同一HTML内で表示
  $("scene").innerHTML = `
    <section class="panel final-panel">
      <div class="final-title">
        <span class="line1">ようこそ</span>
        <span class="line2">クトゥルフの世界へ</span>
      </div>
      <div class="final-space"></div>
      <div id="found" class="found hidden">見つけた。</div>
      <div id="watching" class="watching hidden">あなたは既に見られています・・・</div>
      <img id="horrorImage" class="final-image hidden" src="cthulhu_final.png" alt="">
    </section>`;
  $("scene").classList.remove("fade-out");

  await sleep(5200);
  $("found").classList.remove("hidden");
  $("scene").classList.add("flash");
  await sleep(800);
  $("scene").classList.remove("flash");
  await sleep(2300);
  $("watching").classList.remove("hidden");
  await sleep(5000);
  $("horrorImage").classList.remove("hidden");
});

document.addEventListener("click", () => {
  // 初回ユーザー操作を音声再生許可のきっかけにする
}, {once:true});
