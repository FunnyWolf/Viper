---
layout: page
---

<script setup>
import { heroConfig } from '../.vitepress/config/hero.zh'
import { featuresConfig } from '../.vitepress/config/features.zh'
</script>

<Hero :config="heroConfig" />

<Features :features="featuresConfig" />
