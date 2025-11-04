# 작업 지침
- 새 기본 컴포넌트는 `base/`, 특정 기능 UI는 `ui/`에 배치.
- PrimeVue를 우선 활용하고 필요한 component가 없을 경우 Element Plus를 사용.
- styling시 Tailwind class를 우선 사용하고 직접 작성한 CSS는 필요한 최소만.
- 하나의 component를 구현하기 위해 재활용 가능한 여러 SFC로 분할해서 작성할 수 있음.
- 여러 컴포넌트에서 공유되는 로직은 `/src/composables/`에 작성.
