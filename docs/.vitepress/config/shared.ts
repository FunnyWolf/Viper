import {defineConfig, TransformContext} from 'vitepress'

import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader
} from 'vitepress-plugin-group-icons'
import lightbox from "vitepress-plugin-lightbox"
import {handleHeadMeta} from "../theme/handleHeadMeta";
import minipic from 'vite-plugin-minipic'

export const shared = defineConfig({
  title: 'VIPER',

  rewrites: {
    'en/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],
    config(md) {
      // TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case 'zh':
              return '复制代码'
            default:
              return 'Copy code'
          }
        })()
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        )
      }
      md.use(groupIconMdPlugin)
      md.use(lightbox, {});
    }
  },

  sitemap: {
    hostname: 'https://www.viperrtp.com',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/viper.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/viper.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Viper | Powerful and Flexible Red Team Platform' }],
    ['meta', { property: 'og:site_name', content: 'Viper' }],
    ['meta', { property: 'og:image', content: 'https://www.viperrtp.com/viper-og.png' }],
    ['meta', { property: 'og:url', content: 'https://www.viperrtp.com/' }],
    ['meta', { name: 'twitter:site', content: '@viperrtp' }],
    ['meta', { name: 'twitter:creator', content: '@viperrtp' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'Viper | Powerful and Flexible Red Team Platform' }],
    ['meta', { name: 'twitter:description', content: 'A Unified Platform Designed for Adversary Emulation and Red Team Operations' }],
    ['meta', { name: 'twitter:image:src', content: 'https://www.viperrtp.com/viper-og.png' }],
  ],

  async transformHead(context: TransformContext) {
    return handleHeadMeta(context)
  },
  appearance: 'force-dark',
  themeConfig: {
    logo: { src: '/viper.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FunnyWolf/Viper' },
      { icon: 'twitter', link: 'https://x.com/viperrtp' },
      { icon: 'discord', link: 'https://discord.gg/3R9yZvQueT' },
      {
        icon: {
          svg: '<svg t="1715000000000" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1234" width="24" height="24"><path d="M692.1 347.5c11.6 0 23.1 0.8 34.5 2.1-31-144.1-185.3-251.4-361.5-251.4-197 0-359.2 134.2-359.2 306.9 0 99.1 54.1 180.6 144.5 243.7l-36.1 108.6 126.2-63.2c45.1 8.9 81.4 18.1 126.5 18.1 11.3 0 22.5-0.5 33.7-1.4-7.1-24.2-11.1-49.6-11.1-75.9C389.5 466.1 522.1 347.5 692.1 347.5zM244.1 249.3c27.1 0 45.1 17.8 45.1 44.8 0 26.9-18 45-45.1 45-27 0-54.1-18.1-54.1-45C190 267.1 217.1 249.3 244.1 249.3zM501.5 339.1c-27 0-54.1-18.1-54.1-45 0-26.9 27.1-44.8 54.1-44.8 27 0 45.1 17.8 45.1 44.8C546.6 321 528.5 339.1 501.5 339.1zM1024 629.4c0-153.2-153.2-278-325.3-278-182.3 0-325.5 124.8-325.5 278 0 153.4 143.2 278 325.5 278 38 0 76.2-9.7 114.3-18.1l104.4 54.1-28.6-90.5C970.9 792.2 1024 715.9 1024 629.4zM616.3 584.6c-18 0-36.1-18-36.1-36.1 0-18 18-36.1 36.1-36.1 27.1 0 45.1 18 45.1 36.1C661.4 566.6 643.4 584.6 616.3 584.6zM814.4 584.6c-18 0-36.1-18-36.1-36.1 0-18 18-36.1 36.1-36.1 27 0 45.1 18 45.1 36.1C859.5 566.6 841.4 584.6 814.4 584.6z" p-id="1235"></path></svg>'
        },
        link: '/zh/guide/wechat',
      }
    ],

    search: {
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: '8J64VVRP8K',
      //   apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
      //   indexName: 'vitepress',
      //   locales: {}
      // }
    },

    // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          vitepress: localIconLoader(
            import.meta.url,
            '../../public/viper.svg'
          ),
          // firebase: 'logos:firebase'
        }
      }),
      minipic({
        sharpOptions: {
          avif: {
            quality: 80
          },
          png: {
            quality: 80
          },
          jpeg: {
            quality: 80
          },
          jpg: {
            quality: 80
          },
          webp: {
            quality: 80
          },
          gif: {}
        },
        cache: true // Enable caching for better performance
      })
    ]
  }
})
