import DefaultTheme from "vitepress/theme";
import 'virtual:group-icons.css'
import './styles.css'
import Layout from "./Layout.vue";
export default {
    extends: DefaultTheme,
    Layout,
};
