const musicPlayer = document.getElementById("musicPlayer");
const musicToggle = document.getElementById("musicToggle");

let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    musicPlayer
      .play()
      .then(() => {
        musicStarted = true;
        musicToggle.textContent = "♫";
        musicToggle.classList.remove("paused");
      })
      .catch((err) => {
        console.warn("Audio gagal diputar:", err);
      });
  }
}

const homeButton = document.querySelector('[data-next="home"]');

if (homeButton) {
  homeButton.addEventListener(
    "click",
    () => {
      startMusic();
    },
    { once: true }
  );
}

musicToggle.addEventListener("click", () => {
  if (musicPlayer.paused) {
    musicPlayer
      .play()
      .then(() => {
        musicToggle.textContent = "♫";
        musicToggle.classList.remove("paused");
      })
      .catch(() => {});
  } else {
    musicPlayer.pause();
    musicToggle.textContent = "⏸";
    musicToggle.classList.add("paused");
  }
});

/* NAVIGATION */
const screens = [...document.querySelectorAll(".screen")];

function show(id) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === id);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.querySelectorAll("[data-next]").forEach((btn) => {
  btn.addEventListener("click", () => {
    show(btn.dataset.next);
  });
});

const restartButton = document.getElementById("restart");

if (restartButton) {
  restartButton.addEventListener("click", () => {
    show("opening");
  });
}

/* CAKE */
let candles = false;

const cake = document.getElementById("cake");
const cakeHint = document.getElementById("cakeHint");

if (cake) {
  cake.addEventListener("click", () => {
    candles = !candles;

    cake.textContent = candles ? "🕯️🎂🕯️" : "🎂";

    cakeHint.textContent = candles
      ? "Make a wish, Nduyyy! ✨"
      : "Klik kue untuk menyalakan lilin ✨";
  });
}

/* LETTER */
const letterParts = [
  "Jenaaa, selamat ulang tahun yaa sayang... ♡",

  "Terima kasih ya sayangbuy udah hadir di hidup aku dan selalu memberikan warna di hari-hari aku. Terima kasih buat semua perhatian, waktu, dan kasih sayang yang kamu kasih. Terima kasih udah nerima aku hingga saat ini dengan segala kurangnya aku. Terima kasih udah sabar sama aku, aku sangat bersyukur ada orang yang bisa sabar sama aku dengan semua apa yang udah aku lakuin ke kamu...",

  "Aku juga mau minta maaf kalau selama ini aku masih sering bikin kamu kecewa, sedih, atau belum bisa jadi pasangan yang sempurna. Maaf kalau ada perkataan atau sikap (sumpah serapah) aku yang sering nyakitin hati kamu. Terutama akhir' ini kita banyak sekali melewatkan masa' sedih dan kecewa karena ulah aku yang fatal, maafin aku yaahh..... Aku masih terus belajar dan menata ulang semua untuk jadi seseorang yang lebih baik buat kamu.",

  "Di hari ulang tahun kamu ini, aku berdoa semoga kamu selalu sehat (makin nduttt), bahagia, dimudahkan dalam setiap urusan, dan semua impian kamu bahkan kita bisa tercapai. Semoga kamu selalu dikelilingi hal-hal baik, dan semoga aku masih bisa terus menemani kamu dalam banyak cerita dan momen ke depannya. Selamat ulang tahun, sayang. Aku sayang kamu. ♡"
];

const typedLetter = document.getElementById("typedLetter");
const revealLetter = document.getElementById("revealLetter");

if (typedLetter) {
  typedLetter.textContent = letterParts.join("\n\n");
}

if (revealLetter) {
  revealLetter.style.display = "none";
}

/* MINI GAME */
document.querySelectorAll(".choice").forEach((btn) => {
  btn.addEventListener("click", () => {
    const result = document.getElementById("gameResult");

    result.textContent =
      btn.textContent === "Kamu adalah rumah"
        ? "Benar! Kamu adalah rumah yang selalu ingin aku datangi. ♡"
        : "Coba lagi, jawaban hatiku sudah jelas ✨";

    result.style.color = "#ffc0df";
  });
});

/* MEMORY PLANETS */
document.querySelectorAll(".memory-planet").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("planetMessage").textContent =
      btn.dataset.memory;
  });
});