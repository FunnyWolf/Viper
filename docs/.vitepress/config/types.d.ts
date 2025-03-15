// types.d.ts
declare module 'vitepress' {
    interface SiteConfig {
        site: {
            url: string
        }
        title: string
        description: string
    }

    interface PageData {
        frontmatter: {
            title?: string
            description?: string
            image?: string
            twitterTitle?: string
            twitterDescription?: string
            twitterImage?: string
            twitterCard?: boolean
            head?: [string, Record<string, string>][]
        }
    }
}