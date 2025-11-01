# Vue 3 Project Base

새로운 Vue 3 프로젝트를 빠르게 시작할 수 있도록 PrimeVue, Element Plus, Tailwind CSS, Pinia, Vue I18n, Vue Router, VueUse를 기본으로 구성한 베이스 템플릿입니다. TypeScript 없이 Composition API 위주로 작성되어 있으며, `src/app` 디렉터리의 설정 파일을 기반으로 라우트와 화면 구성이 자동으로 이루어집니다.

## 시작하기

```bash
npm install
npm run dev
```

- `npm run build`: 프로덕션 번들 생성
- `npm run preview`: 로컬에서 프로덕션 번들을 미리보기

`main` 브랜치에 푸시하면 GitHub Actions가 자동으로 빌드하고 GitHub Pages에 배포합니다.

## 폴더 구조

```
├── src/
│   ├── main.js             # 앱 엔트리, Pinia/PrimeVue/Element Plus/I18n/Router 초기화
│   ├── app/
│   │   ├── config.json     # 프로젝트 전반 설정(타이틀, 라우트, 다국어 메시지)
│   │   └── */
│   │       ├── index.vue   # 구성 파일에 매핑된 화면 루트
│   │       └── config.json # 섹션별 메타데이터 및 자식 라우트 설정
│   ├── components/
│   │   ├── base/           # 프로젝트 전반에서 재사용 가능한 기본 컴포넌트
│   │   └── ui/             # 기능 단위 UI 컴포넌트 (예: 다크 모드 토글)
│   ├── composables/        # 여러 컴포넌트에서 재사용하는 로직
│   ├── plugins/            # PrimeVue/I18n/Router 초기화 및 설정
│   ├── stores/             # Pinia 스토어 (테마, 언어 등 사용자 선호 저장)
│   └── styles/
│       ├── index.css       # PrimeVue/Element Plus/Tailwind 공급자 + 전역 스타일 번들러
│       └── supplier/       # 공급자별 스타일 엔트리 및 오버라이드
├── index.html              # Vite 진입 HTML
├── package.json            # 의존성 및 스크립트
├── vite.config.js          # Vite 설정 및 Tailwind 플러그인 로드
└── tailwind.config.js      # Tailwind 설정 (@tailwindcss/vite 플러그인 사용)
```

## 주요 구성 요소

- **UI 통합**: PrimeVue, Element Plus, Tailwind CSS가 함께 동작하도록 기본 구성되어 있습니다.
- **상태 관리**: Pinia 스토어와 VueUse 유틸리티를 활용할 수 있는 환경이 갖춰져 있습니다.
- **국제화**: Vue I18n을 사용해 기본 로케일을 브라우저 언어로 설정하고, `config.json`을 통해 다국어 메시지를 선언할 수 있습니다.
- **라우팅 자동화**: `src/app/**/config.json`을 읽어 라우트를 구성하며, 섹션별 메타데이터와 다국어 타이틀도 함께 정의할 수 있습니다.
- **배포 자동화**: GitHub Actions를 통해 빌드 후 GitHub Pages에 배포하도록 설정되어 있습니다.

## `config.json`으로 화면 확장하기

1. `src/app` 내부에 새 디렉터리를 만들고 `index.vue`와 `config.json`을 추가합니다.
2. 새 디렉터리의 `config.json`에 `meta.title`, `messages` 등을 정의합니다.
3. 상위 루트 `config.json`의 `routes` 배열에 새 디렉터리를 등록합니다.

루트/섹션 구성 파일은 다음과 같은 필드를 가집니다.

- `meta.title`: 문자열 또는 `{ en: '...', ko: '...' }` 형태의 다국어 객체. 페이지 타이틀과 문서 제목에 사용됩니다.
- `routes`: 문자열 경로(`"./child"`) 또는 `{ "src": "./child", "alias": "" }` 형태의 객체 배열. 자동으로 중첩 라우트를 생성합니다.
- `messages`: `i18n` 인스턴스에 병합되는 다국어 메시지 모음입니다.

## 참고

- [PrimeVue 문서](https://primevue.org/)
- [Element Plus 문서](https://element-plus.org/)
- [Tailwind CSS 문서](https://tailwindcss.com/)
- [Pinia 문서](https://pinia.vuejs.org/)
- [Vue I18n 문서](https://vue-i18n.intlify.dev/)
- [Vue Router 문서](https://router.vuejs.org/)
- [VueUse 문서](https://vueuse.org/)
