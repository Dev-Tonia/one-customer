// mouse.js
import { computed } from "vue";
import { useRoute } from "vue-router";

// by convention, composable function names start with "use"
export function useLayout() {
  const { meta } = useRoute();
  const layout = meta.layout.__name;
  //   Getting the current Layout
  const getRoutePathLayout = computed(() => {
    return layout === "DashBoardLayout"
      ? "/user.order-summary"
      : "/order-summary";
  });

  // expose managed state as return value
  return { getRoutePathLayout, layout };
}
