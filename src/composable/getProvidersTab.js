// mouse.js
import { ref } from "vue";

// by convention, composable function names start with "use"
export function useProviderTab() {
  const activeTab = ref("");

  function selectTab(tab) {
    activeTab.value = activeTab.value === tab ? "" : tab;
  }

  return { selectTab, activeTab };
}
