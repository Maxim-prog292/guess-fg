const BG = "#005542";
const PANEL = "#E7E0D2";
const INK = "#292321";
const GOLD = "#3EBB78";
const GREEN = "#3EBB78";
const RED = "#292321";
const BLUE = "#005542";

const items = [
  {
    origin: "Шумеры",
    money: "серебряные сикли, глиняные жетоны-токены",
    time: "IV-III тыс. до н.э.",
    feature: "первые металлические деньги, учет долгов на глиняных табличках",
    image: "tokens",
    story: "В Шумере, на землях Междуречья, уже в IV-III тысячелетиях до нашей эры деньгами служили серебряные слитки - сикли, названные так по весу зерна «ше», а также глиняные жетоны-токены. Каждый жетон обозначал определенный товар: овцу, кувшин масла или отрез ткани. Именно шумеры ввели практику «юбилейного» списания долгов при воцарении нового правителя."
  },
  {
    origin: "Ассирия",
    money: "«головы Иштар» - серебряные кусочки с оттиском",
    time: "VIII-VII вв. до н.э.",
    feature: "прототип монет с изображением божества",
    image: "ishtar",
    story: "В Ассирии в VIII-VII веках до нашей эры появились серебряные кусочки с оттиском богини Иштар - так называемые «головы Иштар». Они стали прообразом настоящей чеканной монеты. В хрониках ассирийского царя Синахериба есть упоминание о таких протомонетах в полсикля."
  },
  {
    origin: "Египет",
    money: "бронзовые кольца, слитки",
    time: "II тыс. до н.э.",
    feature: "деньги-украшения, которые носили на обруче",
    image: "rings",
    story: "В Древнем Египте деньгами служили бронзовые кольца и металлические слитки. Их можно было носить с собой, нанизав на обруч большего диаметра. Металл для таких «кольцевых денег» добывали на Синайском полуострове и в Нубии, поэтому эти земли были стратегически важны."
  },
  {
    origin: "Китай",
    money: "монеты-ножи, монеты-мотыги, затем бумажные деньги",
    time: "от IX в. до н.э.; бумажные деньги - 1280 г.",
    feature: "самые необычные формы; родина бумажных денег",
    image: "knife",
    story: "Китайцы пошли своим путем: уже в IX веке до нашей эры они отливали бронзовые монеты в форме ножей для разделки китовых туш, а позже - в форме мотыг. Китайские монеты долгое время отливались в формах, а не чеканились. Китай также стал родиной бумажных денег."
  },
  {
    origin: "Греция",
    money: "монеты - драхмы, оболы, государственный штемпель",
    time: "с VII в. до н.э.",
    feature: "круглая форма и высокое художественное качество",
    image: "greek",
    story: "Греция не изобрела монету первой, но именно греки довели ее до совершенства. Они применяли государственный штемпель, использовали металл высокого качества и сделали монету круглой. Слова «драхма» и «обол» напоминают о металлических прутах, которые использовались до появления монет."
  },
  {
    origin: "Рим",
    money: "монеты - ассы, денарии",
    time: "с III в. до н.э.",
    feature: "слово «монета» связано с храмом Юноны-Монеты",
    image: "rome",
    story: "Первый монетный двор в Риме был учрежден при храме Юноны-Монеты, Юноны Советчицы. Отсюда произошло само слово «монета». Долгое время республиканский Рим обходился необработанными брусками бронзы, пока не перенял монетную традицию у греческих городов Южной Италии."
  },
  {
    origin: "Персия",
    money: "золотые дарики",
    time: "VI в. до н.э.",
    feature: "первая «международная валюта» древности",
    image: "daric",
    story: "В Персидской империи царь Дарий I провел денежную реформу и ввел золотые дарики с изображением царя с луком и стрелами. Дарик стал одной из самых надежных монет древности и принимался на огромной территории от Индии до Греции."
  },
  {
    origin: "Индия",
    money: "пуанные монеты - серебряные пластинки",
    time: "с VII в. до н.э.",
    feature: "оттиски-символы правителей, торговцев и банкиров",
    image: "punch",
    story: "Древняя Индия подарила миру пуанные монеты: небольшие изогнутые серебряные пластинки, на которые специальными пуансонами наносили символы правителей, торговцев или банкиров. На некоторых монетах изображали животных - слона, льва или быка."
  },
  {
    origin: "Майя",
    money: "костяные палочки-бирки, какао-бобы",
    time: "VI-IX вв. н.э.",
    feature: "какао-бобы как деньги и счетные бирки",
    image: "cacao",
    story: "У цивилизации майя деньгами были костяные палочки-бирки, на которых фиксировалась дань: кукуруза, ткани или труд. Еще одним денежным эквивалентом были какао-бобы. Они оказались настолько ценными, что появились подделки: бобы наполняли землей или песком."
  },
  {
    origin: "Ольмеки",
    money: "предположительно какао-бобы, престижные товары",
    time: "XII-IV вв. до н.э.",
    feature: "первая цивилизация Мезоамерики и развитая торговля",
    image: "olmec",
    story: "У ольмеков прямых свидетельств о деньгах не сохранилось, но их развитая торговля обсидианом, нефритом и базальтом говорит о том, что эквивалентом обмена могли служить престижные товары. Позже в Мезоамерике важную денежную роль получили какао-бобы."
  }
];

const app = document.querySelector("#app");
const moneyEl = document.querySelector("#money");
const periodEl = document.querySelector("#period");
const featureEl = document.querySelector("#feature");
const optionsEl = document.querySelector("#options");
const feedbackEl = document.querySelector("#feedback");
const progressEl = document.querySelector("#progress");
const storyEl = document.querySelector("#story");
const nextButton = document.querySelector("#next");
const restartButton = document.querySelector("#restart");
const startPanel = document.querySelector("#startPanel");
const startButton = document.querySelector("#startButton");
const endPanel = document.querySelector("#endPanel");
const endScore = document.querySelector("#endScore");
const endText = document.querySelector("#endText");
const endRestartButton = document.querySelector("#endRestartButton");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const coverImage = new Image();
coverImage.decoding = "async";
  coverImage.src = "assets/ui/hidden-exhibit.png?v=20260913-1830";

let deck = [];
let index = 0;
let score = 0;
let currentOptions = [];
let canvasMode = "cover";
let canvasItem = null;
const moneyImages = new Map();

coverImage.addEventListener("load", () => {
  if (canvasMode === "cover") redrawCanvas();
});

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function requestFullscreen() {
  // Полноэкранный режим задаёт музейная оболочка, а не первое касание посетителя.
}

function fitApp() {
  const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  app.style.transform = `scale(${scale})`;
  app.style.marginLeft = `${(window.innerWidth - 1920 * scale) / 2}px`;
  app.style.marginTop = `${(window.innerHeight - 1080 * scale) / 2}px`;
}

function blockBrowserEvents() {
  ["contextmenu", "selectstart", "dragstart"].forEach((eventName) => {
    document.addEventListener(eventName, (event) => event.preventDefault());
  });

  document.addEventListener(
    "touchmove",
    (event) => {
      event.preventDefault();
    },
    { passive: false }
  );

  document.addEventListener("keydown", (event) => {
    const blockedKeys = ["F5", "F11", "F12"];
    const blockedCombo =
      (event.ctrlKey || event.metaKey) &&
      ["a", "c", "p", "r", "s", "u", "+", "-", "0"].includes(event.key.toLowerCase());

    if (blockedKeys.includes(event.key) || blockedCombo) {
      event.preventDefault();
    }
  });
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  redrawCanvas();
}

function startGame() {
  endPanel.hidden = true;
  deck = shuffle(items);
  index = 0;
  score = 0;
  showRound();
}

function showRound() {
  const item = deck[index];
  progressEl.textContent = `${index + 1}/${deck.length}`;
  moneyEl.textContent = item.money;
  periodEl.textContent = item.time;
  featureEl.textContent = item.feature;
  feedbackEl.textContent = "";
  feedbackEl.style.color = INK;
  storyEl.textContent = "Пояснение";
  canvasMode = "cover";
  canvasItem = null;
  redrawCanvas();

  const origins = items.map((entry) => entry.origin).filter((origin) => origin !== item.origin);
  currentOptions = shuffle([...shuffle(origins).slice(0, 3), item.origin]);
  optionsEl.innerHTML = "";

  currentOptions.forEach((origin, optionIndex) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = origin;
    button.addEventListener("click", () => answer(optionIndex));
    optionsEl.append(button);
  });

  nextButton.disabled = true;
  nextButton.textContent = "Следующий уровень";
}

function answer(optionIndex) {
  const item = deck[index];
  const selected = currentOptions[optionIndex];
  const correct = selected === item.origin;

  if (correct) {
    score += 1;
    feedbackEl.textContent = "Верно!";
    feedbackEl.style.color = GREEN;
  } else {
    feedbackEl.textContent = `Неверно. Правильный ответ: ${item.origin}.`;
    feedbackEl.style.color = RED;
  }

  [...optionsEl.children].forEach((button, i) => {
    button.disabled = true;
    button.classList.remove("correct", "wrong", "muted");
    if (currentOptions[i] === item.origin) {
      button.classList.add("correct");
    } else if (currentOptions[i] === selected) {
      button.classList.add("wrong");
    } else {
      button.classList.add("muted");
    }
  });

  progressEl.textContent = `${index + 1}/${deck.length}`;
  storyEl.innerHTML = `<strong>${item.origin}</strong>${item.story}`;
  canvasMode = "money";
  canvasItem = item;
  redrawCanvas();

  nextButton.disabled = false;
  nextButton.textContent = index === deck.length - 1 ? "Показать итог" : "Следующий уровень";
}

function nextRound() {
  if (index === deck.length - 1) {
    showFinish();
    return;
  }
  index += 1;
  showRound();
}

function showFinish() {
  endScore.textContent = `${score} / ${deck.length}`;
  endText.textContent =
    score === deck.length
      ? "Отличный результат: все места происхождения определены верно."
      : "Можно пройти еще раз: порядок вопросов и вариантов изменится.";
  endPanel.hidden = false;
  moneyEl.textContent = "Игра завершена";
  periodEl.textContent = `${score} из ${deck.length}`;
  featureEl.textContent = "Можно пройти еще раз: порядок вопросов и вариантов изменится.";
  feedbackEl.textContent = "";
  progressEl.textContent = "Итог";
  optionsEl.innerHTML = "";
  currentOptions.forEach(() => {
    const button = document.createElement("button");
    button.className = "option muted";
    button.disabled = true;
    optionsEl.append(button);
  });
  storyEl.textContent = "Нажмите «Начать заново», чтобы сыграть еще раз.";
  canvasMode = "finish";
  canvasItem = null;
  redrawCanvas();
  nextButton.disabled = true;
}

function clearCanvas() {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#101812";
  ctx.fillRect(0, 0, w, h);
  return { w, h };
}

function redrawCanvas() {
  if (canvasMode === "money" && canvasItem) {
    drawMoney(canvasItem);
  } else if (canvasMode === "finish") {
    drawFinish();
  } else {
    drawCover();
  }
}

function drawText(text, x, y, size, color = INK, weight = "700", align = "center") {
  ctx.fillStyle = color;
  ctx.font = `${weight} ${size}px Georgia, serif`;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
}

function wrapText(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function drawCover() {
  const { w, h } = clearCanvas();
  if (!coverImage.complete || coverImage.naturalWidth === 0) return;

  const scale = Math.max(w / coverImage.naturalWidth, h / coverImage.naturalHeight);
  const sourceWidth = w / scale;
  const sourceHeight = h / scale;
  const sourceX = (coverImage.naturalWidth - sourceWidth) / 2;
  const sourceY = (coverImage.naturalHeight - sourceHeight) / 2;
  ctx.drawImage(coverImage, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, w, h);
}

function drawFinish() {
  const { w, h } = clearCanvas();
  drawText("Итог", w / 2, h / 2 - 36, 54, "#f6edd9");
  drawText(`${score} / ${deck.length}`, w / 2, h / 2 + 34, 58, "#e4c984");
}

function drawMoney(item) {
  const { w, h } = clearCanvas();
  let image = moneyImages.get(item.image);
  if (!image) {
    image = new Image();
    image.decoding = "async";
    image.src = `assets/money/${item.image}.png`;
    image.addEventListener("load", () => {
      if (canvasMode === "money" && canvasItem?.image === item.image) redrawCanvas();
    });
    moneyImages.set(item.image, image);
  }

  if (image.complete && image.naturalWidth > 0) {
    const scale = Math.max(w / image.naturalWidth, h / image.naturalHeight);
    const sourceWidth = w / scale;
    const sourceHeight = h / scale;
    const sourceX = (image.naturalWidth - sourceWidth) / 2;
    const sourceY = (image.naturalHeight - sourceHeight) / 2;
    ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, w, h);
    const shade = ctx.createLinearGradient(0, 0, 0, h);
    shade.addColorStop(0, "rgba(8, 13, 10, .04)");
    shade.addColorStop(1, "rgba(8, 13, 10, .24)");
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, w, h);
  } else {
    drawText("Экспонат", w / 2, h / 2, 42, "#f6edd9");
  }
}

const drawImages = {
  tokens(w) {
    [[180, 185, "овца"], [280, 250, "масло"], [390, 175, "ткань"]].forEach(([x, y, label]) => {
      ellipse(x, y, 45, 36, "#3EBB78", "#292321", 3);
      drawText(label, x, y, 14, "#292321");
    });
    rect(w - 210, 155, 115, 110, "#E7E0D2", "#292321", 3);
    for (let i = 0; i < 5; i += 1) line(w - 190, 180 + i * 15, w - 115, 180 + i * 15, "#292321", 3);
  },
  ishtar(w) {
    ellipse(w / 2, 235, 110, 110, "#E7E0D2", "#292321", 5);
    ellipse(w / 2, 229, 48, 49, "transparent", "#292321", 5);
    arc(w / 2, 190, 55, 48, 0.12 * Math.PI, 0.9 * Math.PI, "#292321", 5);
    drawText("Иштар", w / 2, 318, 26, "#292321");
  },
  rings(w) {
    [[220, 225, 66], [330, 195, 54], [435, 250, 72], [555, 205, 56]].forEach(([x, y, r]) => {
      ellipse(x, y, r, r, "transparent", "#3EBB78", 16);
    });
    rect(w - 250, 210, 165, 60, "#005542", "#292321", 4);
  },
  knife(w) {
    polygon([[170, 270], [250, 140], [335, 135], [300, 270]], "#3EBB78", "#005542", 4);
    ellipse(248, 172, 12, 12, "#E7E0D2", "#005542", 3);
    rect(305, 250, 80, 45, "#3EBB78", "#005542", 4);
    rect(w - 260, 145, 140, 170, "#3EBB78", "#292321", 4);
    drawText("бумага", w - 190, 230, 20, "#292321");
  },
  greek(w) {
    ellipse(w / 2, 235, 115, 115, "#E7E0D2", "#292321", 6);
    drawText("ΑΘΕ", w / 2, 198, 40, "#292321");
    ellipse(w / 2, 270, 45, 45, "transparent", "#292321", 5);
    polygon([[w / 2 - 18, 250], [w / 2 + 20, 250], [w / 2 + 4, 286]], "#292321");
  },
  rome(w) {
    ellipse(w / 2, 240, 118, 118, "#3EBB78", "#292321", 6);
    arc(w / 2, 231, 58, 61, 0.44 * Math.PI, 1.84 * Math.PI, "#292321", 6);
    drawText("SPQR", w / 2, 315, 30, "#292321");
  },
  daric(w) {
    ellipse(w / 2, 240, 135, 122, "#3EBB78", "#292321", 6);
    line(w / 2 - 45, 275, w / 2 + 75, 180, "#292321", 8);
    line(w / 2 + 75, 180, w / 2 + 55, 220, "#292321", 5);
    ellipse(w / 2 - 47, 187, 23, 23, "#292321");
    rect(w / 2 - 52, 210, 70, 75, "#292321");
  },
  punch() {
    polygon([[170, 155], [515, 125], [575, 310], [205, 345]], "#E7E0D2", "#292321", 5);
    [[260, 210, "слон"], [390, 205, "бык"], [315, 285, "лев"], [470, 275, "*"]].forEach(([x, y, sign]) => {
      ellipse(x, y, 42, 30, "transparent", "#292321", 4);
      drawText(sign, x, y, 15, "#292321");
    });
  },
  cacao(w) {
    [[210, 190], [300, 245], [400, 185], [505, 250]].forEach(([x, y]) => {
      ellipse(x, y, 34, 56, "#005542", "#292321", 4);
      line(x, y - 50, x, y + 50, "#292321", 3);
    });
    rect(w - 205, 165, 85, 160, "#E7E0D2", "#292321", 3);
    for (let i = 0; i < 5; i += 1) line(w - 190, 190 + i * 24, w - 135, 190 + i * 24, "#292321", 3);
  },
  olmec(w) {
    ellipse(w / 2, 230, 105, 105, "#3EBB78", "#005542", 6);
    ellipse(w / 2 - 37, 205, 18, 20, "#005542");
    ellipse(w / 2 + 37, 205, 18, 20, "#005542");
    arc(w / 2, 262, 50, 38, 1.1 * Math.PI, 1.9 * Math.PI, "#005542", 7);
    drawText("нефрит, обсидиан, какао", w / 2, 362, 19, "#005542");
  }
};

function rect(x, y, w, h, fill, stroke, lineWidth = 1) {
  const radius = Math.min(14, w / 2, h / 2);
  ctx.fillStyle = fill;
  roundRectPath(x, y, w, h, radius);
  ctx.fill();
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    roundRectPath(x, y, w, h, radius);
    ctx.stroke();
  }
}

function strokeRoundRect(x, y, w, h, radius) {
  roundRectPath(x, y, w, h, Math.min(radius, w / 2, h / 2));
  ctx.stroke();
}

function roundRectPath(x, y, w, h, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function ellipse(x, y, rx, ry, fill, stroke, lineWidth = 1) {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  if (fill !== "transparent") {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

function arc(x, y, rx, ry, start, end, stroke, lineWidth) {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, start, end);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

function line(x1, y1, x2, y2, stroke, lineWidth) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

function polygon(points, fill, stroke, lineWidth = 1) {
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  points.slice(1).forEach(([x, y]) => ctx.lineTo(x, y));
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

document.addEventListener("click", requestFullscreen);
document.addEventListener("touchstart", requestFullscreen, { passive: true });
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement && startPanel.hidden) {
    setTimeout(requestFullscreen, 200);
  }
});

startButton.addEventListener("click", () => {
  requestFullscreen();
  startGame();
  startPanel.hidden = true;
});
nextButton.addEventListener("click", nextRound);
restartButton.addEventListener("click", startGame);
endRestartButton.addEventListener("click", () => {
  requestFullscreen();
  startGame();
});
window.addEventListener("resize", () => {
  fitApp();
  resizeCanvas();
});
window.addEventListener("load", () => {
  fitApp();
  resizeCanvas();
  startPanel.hidden = true;
  startPanel.remove();
  startGame();
  window.ExhibitUI?.mount({ timeout: 60000, reset: startGame });
});
blockBrowserEvents();
