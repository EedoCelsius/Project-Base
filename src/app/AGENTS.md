# 역할
- 앱 라우트와 화면 구성을 결정하는 핵심 영역.
- 루트 `config.json`은 프로젝트 전역 설정, 각 하위 디렉터리는 화면/섹션 단위.

# 작성 지침
- 재사용 가능한 component는 `/src/components`에 작성하고 여기에서는 레이아웃 위주로 구성.
- 직관성을 해치지 않는 범위 내에서 필요하다면 같은 디렉터리 내에 여러 SFC로 분할해서 작성할 수 있음.

# 새 화면을 만들 때
1) 하위 폴더 생성
2) `index.vue` 및 `config.json` 작성
3) 상위 섹션 `routes`에 새 폴더를 연결.

# config.json 작성 지침
- `meta`와 `routes`는 `/src/plugins/router.js`의 작동 원리를 참고해서 작성할 것.
- `messages`는 `{"index": {"ko": {}, ...}, ...}`처럼 SFC별로 객체를 구분해 작성하고 각 Vue에서 해당 객체만 `useI18n`를 이용해 local scope로 참조한다.