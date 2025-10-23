# Vue 3 Project Base

새로운 Vue 3 프로젝트를 빠르게 시작할 수 있도록 PrimeVue, Element Plus, Tailwind CSS, Pinia, Vue I18n, Vue Router, VueUse를 기본으로 구성한 베이스 템플릿입니다. TypeScript 없이 옵션 API 위주로 작성되어 있으며 재사용 가능한 컴포넌트와 컴포저블, 전역 상태 예제가 포함되어 있습니다.

## 시작하기

```bash
npm install
npm run dev
```

GitHub Actions가 `main` 브랜치로 푸시될 때 자동으로 빌드하고 GitHub Pages로 배포합니다.

## 폴더 구조

```
├── public/                 # 정적 자산
├── src/
│   ├── App.vue             # 루트 컴포넌트, 라우터 뷰와 테마 동기화 담당
│   ├── main.js             # 앱 엔트리, Pinia/PrimeVue/ElementPlus/I18n/Router 초기화
│   ├── components/
│   │   ├── base/           # 프로젝트 전반에서 재사용 가능한 기본 컴포넌트
│   │   ├── layout/         # 레이아웃 관련 컴포넌트 (AppShell 등)
│   │   └── ui/             # 기능 단위 UI 컴포넌트 (LocaleSwitcher, DarkModeToggle 등)
│   ├── composables/        # 여러 컴포넌트에서 재사용하는 로직(useToggle 등)
│   ├── locales/            # Vue I18n 다국어 리소스 (en, ko)
│   ├── plugins/            # 라이브러리 설정(i18n, PrimeVue 옵션 등)
│   ├── router/             # Vue Router 설정 및 라우트 선언(index.js)
│   ├── stores/             # Pinia 스토어 정의(usePreferencesStore 등)
│   ├── styles/
│       ├── index.js        # PrimeVue/Element Plus/Tailwind 공급자 + 전역 스타일 번들러
│       ├── base.css        # CSS 변수 및 전역 유틸리티
│       └── supplier/       # 공급자별 스타일 엔트리 및 오버라이드 (primevue.css, tailwind.css, element-plus.css)
│   └── views/              # 라우트에 대응하는 화면 컴포넌트(HomeView, GuideView 등)
├── index.html              # Vite 진입 HTML
├── package.json            # 의존성 및 스크립트
├── postcss.config.cjs      # PostCSS 설정 (Tailwind, Autoprefixer)
├── tailwind.config.cjs     # Tailwind 설정
└── .github/workflows/      # GitHub Actions (Pages 자동 배포)
```

## 주요 기능

- **UI 통합**: PrimeVue 테마를 기본으로 공급자별 CSS가 `src/styles/supplier/`에서 CSS `var()`를 통해 동일한 팔레트를 공유합니다.
- **상태 관리**: Pinia 스토어 예시(usePreferencesStore)와 컴포저블(useToggle)을 제공하여 재사용 패턴을 안내합니다.
- **국제화**: Vue I18n이 영어/한국어 번역을 제공하며 LocaleSwitcher 컴포넌트에서 손쉽게 언어 전환이 가능합니다.
- **라우팅**: Vue Router가 구성되어 있으며 Home/Guide/Components 뷰 스캐폴드가 `src/views/`에 포함됩니다.
- **스타일링**: Tailwind CSS가 기본 구성되어 있으며 전역 색상 및 서페이스 토큰을 CSS 변수로 관리합니다.
- **테마 토글**: 헤더의 다크 모드 스위치가 Pinia 스토어와 연동되어 CSS 변수 기반 라이트/다크 팔레트를 전환합니다.
- **VueUse 유틸리티**: VueUse의 `useDark`와 `useTitle`을 활용해 테마 전환과 문서 타이틀 동기화를 간소화했습니다.
- **배포 자동화**: GitHub Actions를 통해 빌드 후 GitHub Pages에 자동 배포됩니다.

## 커스텀 컴포넌트 스캐폴드

`src/components/base/BaseButton.vue`와 같이 Option API 기반의 기본 컴포넌트를 참고하여 프로젝트 요구사항에 맞는 컴포넌트를 손쉽게 추가할 수 있습니다. 필요한 경우 `src/components` 하위에 폴더를 나누어 구성하세요.

## 참고

- [PrimeVue 문서](https://primevue.org/)
- [Element Plus 문서](https://element-plus.org/)
- [Tailwind CSS 문서](https://tailwindcss.com/)
- [Pinia 문서](https://pinia.vuejs.org/)
- [Vue I18n 문서](https://vue-i18n.intlify.dev/)
- [Vue Router 문서](https://router.vuejs.org/)
- [VueUse 문서](https://vueuse.org/)
