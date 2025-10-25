# Vue 3 Project Base

새로운 Vue 3 프로젝트를 빠르게 시작할 수 있도록 PrimeVue, Element Plus, Tailwind CSS, Pinia, Vue I18n, Vue Router, VueUse를 기본으로 구성한 베이스 템플릿입니다. TypeScript 없이 Composition API 위주로 작성되어 있습니다.

## 시작하기

```bash
npm install
npm run dev
```

GitHub Actions가 `main` 브랜치로 푸시될 때 자동으로 빌드하고 GitHub Pages로 배포합니다.

## 폴더 구조

```
├── src/
│   ├── App.vue             # 루트 컴포넌트, 라우터 뷰와 테마 동기화 담당
│   ├── main.js             # 앱 엔트리, Pinia/PrimeVue/ElementPlus/I18n/Router 초기화
│   ├── components/
│   │   ├── base/           # 프로젝트 전반에서 재사용 가능한 기본 컴포넌트
│   │   ├── layout/         # 레이아웃 관련 컴포넌트
│   │   └── ui/             # 기능 단위 UI 컴포넌트
│   ├── composables/        # 여러 컴포넌트에서 재사용하는 로직
│   ├── locales/            # Vue I18n 다국어 리소스
│   ├── plugins/            # 라이브러리 설정
│   ├── router/             # Vue Router 설정 및 라우트 선언
│   ├── stores/             # Pinia 스토어 정의
│   ├── styles/
│       ├── index.css       # PrimeVue/Element Plus/Tailwind 공급자 + 전역 스타일 번들러
│       └── supplier/       # 공급자별 스타일 엔트리 및 오버라이드
│   └── views/              # 라우트에 대응하는 화면 컴포넌트
├── index.html              # Vite 진입 HTML
├── package.json            # 의존성 및 스크립트
├── vite.config.js          # Vite 설정 및 Tailwind 플러그인 로드
├── tailwind.config.js      # Tailwind 설정 (@tailwindcss/vite 플러그인 사용)
└── .github/workflows/      # GitHub Actions (Pages 자동 배포)
```

## 주요 구성 요소

- **UI 통합**: PrimeVue, Element Plus, Tailwind CSS가 함께 동작하도록 기본 구성되어 있습니다.
- **상태 관리**: Pinia 스토어와 VueUse 유틸리티를 활용할 수 있는 환경이 갖춰져 있습니다.
- **국제화**: Vue I18n 구성이 포함되어 다국어 리소스를 쉽게 확장할 수 있습니다.
- **라우팅**: Vue Router가 설정되어 있으며 필요한 라우트를 추가하면 됩니다.
- **스타일링**: Tailwind CSS와 CSS 변수를 조합해 프로젝트에 맞춘 디자인 시스템을 구축할 수 있습니다.
- **테마 토글**: 다크 모드 전환 로직이 포함되어 있으며 필요에 따라 확장할 수 있습니다.
- **배포 자동화**: GitHub Actions를 통해 빌드 후 GitHub Pages에 배포하도록 설정되어 있습니다.

## 참고

- [PrimeVue 문서](https://primevue.org/)
- [Element Plus 문서](https://element-plus.org/)
- [Tailwind CSS 문서](https://tailwindcss.com/)
- [Pinia 문서](https://pinia.vuejs.org/)
- [Vue I18n 문서](https://vue-i18n.intlify.dev/)
- [Vue Router 문서](https://router.vuejs.org/)
- [VueUse 문서](https://vueuse.org/)
