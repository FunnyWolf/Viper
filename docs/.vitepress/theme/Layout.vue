<script setup>
import { inject } from '@vercel/analytics';
inject();
import DefaultTheme from "vitepress/theme";
import {computed, onMounted} from "vue";
import {useRouter, useRoute} from "vitepress";
import mediumZoom from "medium-zoom";
import PageBackground from "./components/PageBackground.vue";

const {Layout} = DefaultTheme;
const router = useRouter();
const route = useRoute();

const isHome = computed(() => {
  const p = route.path
  return p === '/' || p === '/zh/' || p === '/zh'
})

const setupMediumZoom = () => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });
};

onMounted(setupMediumZoom);
router.onAfterRouteChanged = setupMediumZoom;
</script>

<template>
  <PageBackground v-if="isHome" />
  <Layout/>
</template>

<style>
.medium-zoom-overlay {
  backdrop-filter: blur(5rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 999;
}

.VPContent.is-home,
.VPContent.is-home .vp-doc,
.VPPage {
  background: transparent !important;
}

body {
  background: #0a0a0a !important;
}

.VPNavBar .divider {
  display: none !important;
}

.VPFooter {
  background: transparent !important;
  border: none !important;
}
</style>
