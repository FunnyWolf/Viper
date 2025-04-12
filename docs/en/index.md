---
layout: page
---

<script setup>
import { heroConfig } from '../.vitepress/config/hero.en'
import { featuresConfig } from '../.vitepress/config/features.en'
import { keyFeaturesConfig } from '../.vitepress/config/keyFeatures.en'
import { testimonialsConfig } from '../.vitepress/config/testimonials.en'
</script>

<Hero :config="heroConfig" />
<Features :features="featuresConfig" />
<KeyFeatures :config="keyFeaturesConfig" />
<Testimonials :config="testimonialsConfig" />
