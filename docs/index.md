---
layout: page
---

<script setup>
import { heroConfig } from './.vitepress/config/hero.en'
import { featuresConfig } from './.vitepress/config/features.en'
</script>

<Hero :config="heroConfig" />

<Features :features="featuresConfig" />