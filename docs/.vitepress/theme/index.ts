import DefaultTheme from "vitepress/theme";
import googleAnalytics from 'vitepress-plugin-google-analytics';
import 'virtual:group-icons.css'
import './styles.css'
import Layout from "./Layout.vue";
export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp: (ctx) => {
        googleAnalytics({
            id: 'G-8MSHMM5T8X', // 替换为你的 GA 跟踪 ID（以 G- 开头）
        });
    }
};
