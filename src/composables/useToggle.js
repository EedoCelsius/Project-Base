import { ref } from 'vue';

export default function useToggle(initial = false) {
  const state = ref(initial);

  const toggle = (value) => {
    if (typeof value === 'boolean') {
      state.value = value;
      return;
    }

    state.value = !state.value;
  };

  return {
    state,
    toggle
  };
}
