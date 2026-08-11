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
    id: "the-tower",
    name: "The Tower · 탑",
    image: { local: "", remote: "" },
    description: "마음속에 품은 이야기를 가장 먼저 꺼내 보세요. 7기와 함께라면 예상 밖의 순간도 즐거운 시작이 됩니다."
  },
  {
    id: "the-hermit",
    name: "The Hermit · 은둔자",
    image: { local: "", remote: "" },
    description: "조용히 머무는 순간에도 우리만의 이야기는 이어집니다. 오늘은 천천히, 좋아하는 마음을 들여다봐도 좋습니다."
  },
  {
    id: "justice",
    name: "Justice · 정의",
    image: { local: "", remote: "" },
    description: "좋아하는 마음에 솔직해지는 것이 가장 멋진 선택입니다. 지금의 마음을 믿고 7기를 만나 보세요."
  },
  {
    id: "the-emperor",
    name: "The Emperor · 황제",
    image: { local: "", remote: "" },
    description: "나만의 기준과 속도로 7기를 즐겨 보세요. 단단하게 쌓인 시간이 특별한 추억이 됩니다."
  },
  {
    id: "the-hierophant",
    name: "The Hierophant · 교황",
    image: { local: "", remote: "" },
    description: "우리만 아는 이야기와 약속이 차곡차곡 쌓입니다. 함께하는 하루가 오래 기억될 순간이 됩니다."
  },
  {
    id: "the-world",
    name: "The World · 세계",
    image: { local: "", remote: "" },
    description: "작은 설렘도 함께라면 한 장면이 됩니다. 7기에서 새로운 즐거움을 발견해 보세요."
  },
  {
    id: "the-chariot",
    name: "The Chariot · 전차",
    image: { local: "", remote: "" },
    description: "설레는 여정의 출발선입니다. 망설였던 마음을 안고 7기와 힘차게 달려가 보세요."
  },
  {
    id: "temperance",
    name: "Temperance · 절제",
    image: { local: "", remote: "" },
    description: "서로 다른 순간들이 모여 가장 소중한 이야기가 됩니다. 편안한 마음으로 함께해 주세요."
  },
  {
    id: "strength",
    name: "Strength · 힘",
    image: { local: "", remote: "" },
    description: "힘이 필요한 날에는 7기의 이야기가 곁을 지켜드립니다. 오늘도 당신의 하루를 응원합니다."
  },
  {
    id: "the-fool",
    name: "The Fool · 바보",
    image: { local: "", remote: "" },
    description: "새로운 시작은 가벼운 호기심에서 시작됩니다. 7기와 함께 낯선 즐거움을 만나 보세요."
  },
  {
    id: "special-card",
    name: "Special Card · 스페셜",
    image: { local: "", remote: "" },
    description: "어떤 이야기일지 아직은 비밀입니다. 7기에서만 만날 수 있는 깜짝 순간을 기대해 주세요."
  }
];

const TEXTS = {
  introTitle: "스텔라이브 7기 타로",
  introSub: "카드를 한 장 뽑고, 7기의 웰컴 메시지를 확인해 보세요",
  startButton: "타로 카드 뽑기",
  pickGuide: "마음이 가는 카드를 한 장 선택해 주세요",
  retryButton: "다시 뽑기"
};
