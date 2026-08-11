(function () {
  "use strict";

  const imageStorage = IMAGE_STORAGE;
  const cardBack = CARD_BACK;
  const elements = {
    title: document.getElementById("intro-title"),
    subtitle: document.getElementById("intro-sub"),
    startButton: document.getElementById("btn-start"),
    pickGuide: document.getElementById("pick-guide"),
    retryButton: document.getElementById("btn-retry"),
    stars: document.getElementById("stars"),
    deck: document.getElementById("deck"),
    resultFront: document.getElementById("result-front"),
    resultBack: document.querySelector(".result-back"),
    resultInner: document.getElementById("result-inner"),
    resultName: document.getElementById("result-name"),
    resultDescription: document.getElementById("result-desc"),
    resultHandwriting: document.getElementById("result-handwriting")
  };

  const screens = {
    intro: document.getElementById("screen-intro"),
    pick: document.getElementById("screen-pick"),
    result: document.getElementById("screen-result")
  };

  let shuffledCards = [];

  applyTexts();
  applyCardBack();
  renderStars();
  bindEvents();

  function applyTexts() {
    elements.title.textContent = TEXTS.introTitle;
    elements.subtitle.textContent = TEXTS.introSub;
    elements.startButton.textContent = TEXTS.startButton;
    elements.pickGuide.textContent = TEXTS.pickGuide;
    elements.retryButton.textContent = TEXTS.retryButton;
  }

  function renderStars() {
    for (let index = 0; index < 36; index += 1) {
      const star = document.createElement("span");
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${(Math.random() * 3.6).toFixed(2)}s`;
      elements.stars.appendChild(star);
    }
  }

  function bindEvents() {
    elements.startButton.addEventListener("click", startDraw);
    elements.retryButton.addEventListener("click", startDraw);
  }

  function startDraw() {
    shuffledCards = shuffle(CARDS);
    renderDeck();
    showScreen("pick");

    elements.deck.classList.remove("shuffling");
    void elements.deck.offsetWidth;
    elements.deck.classList.add("shuffling");
    window.setTimeout(() => elements.deck.classList.remove("shuffling"), 600);
  }

  function shuffle(cards) {
    const result = cards.slice();
    for (let index = result.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  }

  function renderDeck() {
    elements.deck.replaceChildren();
    const total = shuffledCards.length;
    const spread = Math.min(64, total * 7);
    const cardBackUrl = resolveImageUrl(cardBack.image);

    shuffledCards.forEach((card, index) => {
      const angle = total === 1 ? 0 : -spread / 2 + (spread / (total - 1)) * index;
      const button = document.createElement("button");
      const cardFace = document.createElement("span");

      button.className = "card";
      button.type = "button";
      button.style.transform = `rotate(${angle}deg)`;
      button.setAttribute("aria-label", `${card.name} 선택`);
      cardFace.className = "card-face";
      if (cardBackUrl) {
        cardFace.classList.add("has-card-back");
        cardFace.style.backgroundImage = `url("${cardBackUrl}")`;
      }
      button.appendChild(cardFace);
      button.addEventListener("click", () => revealCard(card));
      elements.deck.appendChild(button);
    });
  }

  function revealCard(card) {
    elements.resultFront.replaceChildren();
    const imageUrl = resolveImageUrl(card.image);

    if (imageUrl) {
      const image = document.createElement("img");
      image.src = imageUrl;
      image.alt = card.name;
      image.addEventListener("error", () => showPlaceholder(card.name), { once: true });
      elements.resultFront.appendChild(image);
    } else {
      showPlaceholder(card.name);
    }

    elements.resultName.textContent = card.name;
    elements.resultDescription.textContent = card.description;
    renderHandwriting(card);
    restartRevealAnimation();
    showScreen("result");
  }

  function applyCardBack() {
    const imageUrl = resolveImageUrl(cardBack.image);
    if (!imageUrl) return;

    elements.resultBack.classList.add("has-card-back");
    elements.resultBack.style.backgroundImage = `url("${imageUrl}")`;
  }

  function renderHandwriting(card) {
    const imageUrl = resolveImageUrl(card.handwriting, "assets/handwriting");
    elements.resultHandwriting.replaceChildren();

    if (!imageUrl) {
      elements.resultHandwriting.hidden = true;
      return;
    }

    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = `${card.name} 캐릭터의 손글씨`;
    image.addEventListener("error", () => {
      elements.resultHandwriting.hidden = true;
    }, { once: true });
    elements.resultHandwriting.appendChild(image);
    elements.resultHandwriting.hidden = false;
  }

  function resolveImageUrl(image, localBasePath = "assets/cards") {
    const source = image || {};

    if (imageStorage.mode === "remote" && source.remote) {
      if (isAbsoluteUrl(source.remote)) return source.remote;
      if (imageStorage.remoteBaseUrl) {
        return `${imageStorage.remoteBaseUrl.replace(/\/$/, "")}/${source.remote.replace(/^\//, "")}`;
      }
    }

    return source.local ? `${localBasePath}/${source.local.replace(/^\//, "")}` : "";
  }

  function isAbsoluteUrl(value) {
    return /^https?:\/\//i.test(value);
  }

  function showPlaceholder(name) {
    const placeholder = document.createElement("div");
    const symbol = document.createElement("span");
    const line = document.createElement("span");
    const cardName = document.createElement("span");

    placeholder.className = "placeholder";
    symbol.className = "ph-symbol";
    line.className = "ph-line";
    cardName.className = "ph-name";
    symbol.textContent = "✶";
    cardName.textContent = name;
    placeholder.append(symbol, line, cardName);
    elements.resultFront.replaceChildren(placeholder);
  }

  function restartRevealAnimation() {
    elements.resultInner.style.animation = "none";
    void elements.resultInner.offsetWidth;
    elements.resultInner.style.animation = "";
  }

  function showScreen(name) {
    Object.values(screens).forEach((screen) => screen.classList.remove("active"));
    screens[name].classList.add("active");
  }
})();
