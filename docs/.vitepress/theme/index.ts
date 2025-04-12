import DefaultTheme from "vitepress/theme";
import googleAnalytics from 'vitepress-plugin-google-analytics';
import 'virtual:group-icons.css'
import './styles.css'
import Layout from "./Layout.vue";
import Features from './components/Features.vue'
import Hero from './components/Hero.vue'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp: ({ app }) => {
        app.component('Features', Features)
        app.component('Hero', Hero)
        googleAnalytics({
            id: 'G-8MSHMM5T8X',
        });
    }
};
