import { type HeadConfig, type TransformContext } from "vitepress";

export function handleHeadMeta(context: TransformContext) {
    const { description, title, relativePath, frontmatter } = context.pageData;

    const curDesc = description || context.description;
    const cover = frontmatter.cover || 'https://www.viperrtp.com/viper-og.png'
    const cardType = frontmatter.cover ? 'summary_large_image' : 'summary'
    
    // Open Graph tags
    const ogUrl: HeadConfig = ["meta", { property: "og:url", content: addBase(relativePath) }]
    const ogTitle: HeadConfig = ["meta", { property: "og:title", content: title }]
    const ogDescription: HeadConfig = ["meta", { property: "og:description", content: curDesc }]
    const ogImage: HeadConfig = ["meta", { property: "og:image", content: cover }]
    const ogType: HeadConfig = ["meta", { property: "og:type", content: "article" }]

    // Twitter Card tags
    const twitterCard: HeadConfig = ["meta", { name: "twitter:card", content: cardType }]
    const twitterTitle: HeadConfig = ["meta", { name: "twitter:title", content: title }]
    const twitterDescription: HeadConfig = ["meta", { name: "twitter:description", content: curDesc }]
    const twitterImage: HeadConfig = ["meta", { name: "twitter:image", content: cover }]
    const twitterSite: HeadConfig = ["meta", { name: "twitter:site", content: "@viperrtp" }]
    const twitterCreator: HeadConfig = ["meta", { name: "twitter:creator", content: "@viperrtp" }]

    return [
        ogUrl, ogTitle, ogDescription, ogImage, ogType,
        twitterCard, twitterTitle, twitterDescription, twitterImage, twitterSite, twitterCreator
    ]
}

export function addBase(relativePath: string) {
    const host = 'https://www.viperrtp.com'
    if (relativePath.startsWith('/')) {
        return host + relativePath
    } else {
        return host + '/' + relativePath
    }
}