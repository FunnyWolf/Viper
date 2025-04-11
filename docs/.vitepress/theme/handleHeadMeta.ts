import { type HeadConfig, type TransformContext } from "vitepress";

export function handleHeadMeta(context: TransformContext) {
    const { description, title, relativePath, frontmatter } = context.pageData;
    const host = 'https://www.viperrtp.com'

    const curDesc = description || context.description;
    const cover = frontmatter.cover
        ? (frontmatter.cover.startsWith('http')
            ? frontmatter.cover
            : `${host}${frontmatter.cover}`)
        : `${host}/viper-og.png`;
    const cardType = frontmatter.cover ? 'summary_large_image' : 'summary'
    
    // Basic Meta tags
    const basicTitle: HeadConfig = ["title", {}, title]
    const basicDesc: HeadConfig = ["meta", { name: "description", content: curDesc }]

    // Open Graph tags for Reddit and other platforms
    const ogUrl: HeadConfig = ["meta", { property: "og:url", content: addBase(relativePath) }]
    const ogTitle: HeadConfig = ["meta", { property: "og:title", content: title }]
    const ogDescription: HeadConfig = ["meta", { property: "og:description", content: curDesc }]
    const ogImage: HeadConfig = ["meta", { property: "og:image", content: cover }]
    const ogImageAlt: HeadConfig = ["meta", { property: "og:image:alt", content: title }]
    const ogImageWidth: HeadConfig = ["meta", { property: "og:image:width", content: "1200" }]
    const ogImageHeight: HeadConfig = ["meta", { property: "og:image:height", content: "630" }]
    const ogType: HeadConfig = ["meta", { property: "og:type", content: "article" }]
    const ogSiteName: HeadConfig = ["meta", { property: "og:site_name", content: "Viper RTP" }]

    // Twitter Card tags
    const twitterCard: HeadConfig = ["meta", { name: "twitter:card", content: cardType }]
    const twitterTitle: HeadConfig = ["meta", { name: "twitter:title", content: title }]
    const twitterDescription: HeadConfig = ["meta", { name: "twitter:description", content: curDesc }]
    const twitterImage: HeadConfig = ["meta", { name: "twitter:image", content: cover }]
    const twitterSite: HeadConfig = ["meta", { name: "twitter:site", content: "@viperrtp" }]
    const twitterCreator: HeadConfig = ["meta", { name: "twitter:creator", content: "@viperrtp" }]

    return [
        basicTitle, basicDesc,
        ogUrl, ogTitle, ogDescription, ogImage, ogType, ogSiteName,
        ogImageAlt, ogImageWidth, ogImageHeight,
        twitterCard, twitterTitle, twitterDescription, twitterImage,
        twitterSite, twitterCreator
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