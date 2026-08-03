# 오늘의 타로

Cloudflare Pages에서 제공하는 정적 타로 카드 페이지입니다. 카드 콘텐츠는 `data/cards.js`에서 관리합니다.

## 카드 문구 수정

`data/cards.js`의 `CARDS` 배열에서 카드의 `name`, `description`을 수정합니다. 같은 형식의 객체를 배열에 추가하면 카드 수도 자동으로 늘어납니다. 각 `id`는 중복되지 않아야 합니다.

## 현재: 저장소 안의 이미지 사용

1. 카드 이미지 파일을 `assets/cards/`에 추가합니다.
2. 해당 카드의 `image.local`에 파일명만 입력합니다.

```js
image: { local: "the-fool.webp", remote: "" }
```

## 추후: S3 또는 CloudFront 이미지 사용

이미지 저장 위치를 바꿔도 카드 화면 코드는 수정할 필요가 없습니다.

1. `IMAGE_STORAGE.mode`를 `"remote"`로 변경합니다.
2. `remoteBaseUrl`에 S3 앞단의 CloudFront URL 또는 공개 이미지 URL을 넣습니다.
3. 카드별 `image.remote`에 파일 경로를 입력합니다.

```js
const IMAGE_STORAGE = {
  mode: "remote",
  remoteBaseUrl: "https://images.example.com/tarot"
};

image: { local: "the-fool.webp", remote: "the-fool.webp" }
```

`image.remote`에는 전체 URL도 넣을 수 있습니다.

```js
image: {
  local: "",
  remote: "https://images.example.com/tarot/the-fool.webp"
}
```

S3 원본 버킷을 브라우저에 직접 공개하는 것보다 CloudFront 도메인을 경유하도록 구성하는 방식을 권장합니다. 이 화면은 이미지를 `<img>`로만 표시하므로, 이미지 서버는 HTTPS로 외부 읽기 접근이 가능해야 합니다.

## 배포 관리

Cloudflare Pages에서 GitHub 저장소 `zed367/taro`를 연결합니다.

- 프로덕션 브랜치: `main`
- 빌드 명령: `exit 0`
- 빌드 출력 경로: `.`

이후 `main`에 푸시하면 프로덕션 배포가 자동으로 갱신됩니다. 기능 브랜치 또는 Pull Request를 사용하면 Pages 미리보기 배포도 확인할 수 있습니다.
