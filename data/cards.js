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

const CARDS = [
  {
    id: "the-fool",
    name: "The Fool · 바보",
    image: { local: "", remote: "" },
    description: "새로운 시작을 알리는 카드입니다. 두려움보다 호기심을 따라가 보세요. 예상치 못한 길에서 좋은 기회가 기다리고 있습니다."
  },
  {
    id: "the-magician",
    name: "The Magician · 마법사",
    image: { local: "", remote: "" },
    description: "지금 가진 재능과 도구만으로 충분합니다. 마음먹은 일을 실행에 옮기기에 가장 좋은 시기입니다."
  },
  {
    id: "the-high-priestess",
    name: "The High Priestess · 여사제",
    image: { local: "", remote: "" },
    description: "직관이 답을 알고 있습니다. 서두르지 말고 내면의 목소리에 귀를 기울여 보세요."
  },
  {
    id: "the-empress",
    name: "The Empress · 여황제",
    image: { local: "", remote: "" },
    description: "풍요와 결실의 기운이 가득합니다. 그동안 정성 들인 일이 곧 눈에 보이는 성과로 돌아옵니다."
  },
  {
    id: "the-emperor",
    name: "The Emperor · 황제",
    image: { local: "", remote: "" },
    description: "흔들리지 않는 기준이 필요한 때입니다. 원칙을 세우고 차분히 밀고 나가면 주변이 따라옵니다."
  },
  {
    id: "the-lovers",
    name: "The Lovers · 연인",
    image: { local: "", remote: "" },
    description: "중요한 선택의 갈림길에 서 있습니다. 머리보다 마음이 가리키는 쪽이 정답에 가깝습니다."
  },
  {
    id: "the-chariot",
    name: "The Chariot · 전차",
    image: { local: "", remote: "" },
    description: "추진력이 최고조에 달했습니다. 망설이던 일이 있다면 지금 속도를 내세요. 승리는 움직이는 사람의 것입니다."
  },
  {
    id: "wheel-of-fortune",
    name: "Wheel of Fortune · 운명의 수레바퀴",
    image: { local: "", remote: "" },
    description: "흐름이 바뀌는 전환점입니다. 우연처럼 찾아오는 변화를 거부하지 말고 올라타 보세요."
  },
  {
    id: "the-star",
    name: "The Star · 별",
    image: { local: "", remote: "" },
    description: "희망의 빛이 비치고 있습니다. 잠시 멈췄던 꿈을 다시 꺼내도 좋은 시기입니다. 회복과 치유의 기운이 함께합니다."
  },
  {
    id: "the-sun",
    name: "The Sun · 태양",
    image: { local: "", remote: "" },
    description: "가장 밝은 에너지의 카드입니다. 하는 일마다 긍정적인 결과가 따르고, 주변에도 좋은 기운을 나눠주게 됩니다."
  }
];

const TEXTS = {
  introTitle: "오늘의 타로",
  introSub: "마음을 가다듬고, 카드를 한 장 뽑아 보세요",
  startButton: "카드 뽑기",
  pickGuide: "마음이 가는 카드를 한 장 선택하세요",
  retryButton: "다시 뽑기"
};
