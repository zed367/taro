/*
 * 카드 콘텐츠 설정
 *
 * 카드명과 설명을 수정하거나 새 항목을 추가하면 화면에 바로 반영됩니다.
 * 변경 후 GitHub main 브랜치에 푸시하면 Cloudflare Pages가 자동 배포합니다.
 */

const IMAGE_STORAGE = Object.freeze({
  // 현재는 "local"을 사용합니다. S3 또는 CloudFront로 옮길 때 "remote"로 변경하세요.
  mode: "local",

  // S3 버킷 직접 URL보다 CloudFront 같은 CDN URL 사용을 권장합니다.
  // 예: "https://images.example.com/tarot"
  remoteBaseUrl: ""
});

const CARD_BACK = {
  image: { local: "card12.png", remote: "" }
};

const CARDS = [
  {
    id: "the-tower",
    name: "THE TOWER 탑",
    image: { local: "card01.png", remote: "" },
    handwriting: { local: "yuni.png", remote: "" },
    description: "가까운 사람이 예상치 못한 시련을 줄 수 있습니다.\n그러나 지금의 위기를 두려워하기보다 직시하세요.\n탑이 허물어진 자리에서야\n비로소 진짜 기초를 새로 쌓을 수 있습니다."
  },
  {
    id: "the-hermit",
    name: "THE HERMIT 은둔자",
    image: { local: "card02.png", remote: "" },
    handwriting: { local: "huya.png", remote: "" },
    description: "잠시 멈추고 혼자가 되어보세요.\n지금 당신에게 필요한 답은 밖이 아닌 내면에 있습니다.\n고요함 속에서 지혜를 찾으세요."
  },
  {
    id: "justice",
    name: "JUSTICE 정의",
    image: { local: "card03.png", remote: "" },
    handwriting: { local: "hina.png", remote: "" },
    description: "감정적으로 대처하면 오히려 일을 그르칠 수 있습니다.\n냉철한 판단으로 공정하고 정의로운 선택을 할 때 입니다."
  },
  {
    id: "the-emperor",
    name: "THE EMPEROR 황제",
    image: { local: "card04.png", remote: "" },
    handwriting: { local: "mahiro.png", remote: "" },
    description: "때로는 당당하게 주도권을 쥘 필요가 있습니다.\n스스로의 원칙과 기준을 따르세요."
  },
  {
    id: "the-hierophant",
    name: "THE HIEROPHANT 교황",
    image: { local: "card05.png", remote: "" },
    handwriting: { local: "lize.png", remote: "" },
    description: "당신이 가진 생각을 세상 밖으로 꺼내세요. 같은 마음을 가진 사람을 반드시 찾을 수 있을거예요."
  },
  {
    id: "the-world",
    name: "THE WORLD 세계",
    image: { local: "card06.png", remote: "" },
    handwriting: { local: "tabi.png", remote: "" },
    description: "지금 겪는 고난은 새로운 한 걸음의 토대가 되는 과정입니다.\n그 끝에서는 놀라운 세계를 마주할 수 있을 거예요."
  },
  {
    id: "the-chariot",
    name: "THE CHARIOT 전차",
    image: { local: "card07.png", remote: "" },
    handwriting: { local: "buki.png", remote: "" },
    description: "망설임 없이 앞으로 날아가세요. 멈추지 않는 추진력과 순간 순간의 판단력이 당신을 떨어지지 않게 도와줄 거예요."
  },
  {
    id: "temperance",
    name: "TEMPERANCE 절제",
    image: { local: "card08.png", remote: "" },
    handwriting: { local: "rin.png", remote: "" },
    description: "본인의 기준은 본인이 세우는 것입니다.\n자신에게 맞는 속도와 기준을 다시 설정해보세요."
  },
  {
    id: "strength",
    name: "STRENGTH 힘",
    image: { local: "card09.png", remote: "" },
    handwriting: { local: "nana.png", remote: "" },
    description: "진정한 카리스마는 화려하게 뽐내지 않아도 자연스레 느껴지는 것, 오늘은 그냥 당신답게 걸어가세요."
  },
  {
    id: "the-fool",
    name: "THE FOOL 바보",
    image: { local: "card10.png", remote: "" },
    handwriting: { local: "riko.png", remote: "" },
    description: "가끔은 너무 많이 아는 것이 근심을 키워\n용기를 내지 못하게 할 때가 있습니다.\n오늘은 걱정보다 일단 그냥 뛰어드는 것이 정답일 수 있어요."
  },
  {
    id: "special-card",
    name: "???????",
    image: { local: "card11.png", remote: "" },
    description: "해가 지고, 밤이 되면 새로운 세상이 펼쳐집니다."
  }
];

const TEXTS = {
  introTitle: "오늘의 스텔라 운세",
  introSub: "스텔라와 함께면, 나쁜 하루는 없어요.",
  startButton: "타로 카드 뽑기",
  pickGuide: "마음이 가는 카드를 한 장 선택해 주세요",
  retryButton: "다시 뽑기"
};
