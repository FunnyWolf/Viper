import { type HeadConfig, type TransformContext } from "vitepress";

// 处理每个页面的元数据
export function handleHeadMeta(context: TransformContext) {
    const { description, title, relativePath, frontmatter } = context.pageData;

    const curDesc = description || context.description;
    const cover = frontmatter.cover || 'https://www.viperrtp.com/viper-og.png'
    const cardType = frontmatter.cover ? 'summary_large_image' : 'summary'
    // 增加 Twitter 卡片
    const ogUrl: HeadConfig = ["meta", { property: "og:url", content: addBase(relativePath) }]
    const ogTitle: HeadConfig = ["meta", { property: "og:title", content: title }]
    const ogDescription: HeadConfig = ["meta", { property: "og:description", content: curDesc }]
    const ogImage: HeadConfig = ["meta", { property: "og:image", content: cover }]

    const twitterCard: HeadConfig = ["meta", { name: "twitter:card", content: cardType }]
    const twitterImage: HeadConfig = ["meta", { name: "twitter:image:src", content: cover }]
    const twitterDescription: HeadConfig = ["meta", { name: "twitter:description", content: curDesc }]

    const twitterHead: HeadConfig[] = [
        ogUrl, ogTitle, ogDescription, ogImage,
        twitterCard, twitterDescription, twitterImage,
    ]
    return twitterHead
}

export function addBase(relativePath: string) {
    const host = 'https://www.viperrtp.com'
    if (relativePath.startsWith('/')) {
        return host + relativePath
    } else {
        return host + '/' + relativePath
    }
}