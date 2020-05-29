// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'JavaScript Jeep',
    siteDescription: 'Website for JavaScript Articles',
    siteUrl: 'https://javascriptjeep.com',
    plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        purgeConfig: {
          content: [
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.html',
            './src/**/*.pug',
            './src/**/*.md',
            './docs/**/*.md',
            './blog/**/*.md',
          ],
          whitelist: [
            'body',
            'html',
            'img',
            'a',
            'g-image',
            'g-image--lazy',
            'g-image--loaded',
            'active',
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Gridsome Portfolio Starter Blog',
          feed_url: 'https://gridsome-portfolio-starter.netlify.com/rss.xml',
          site_url: 'https://gridsome-portfolio-starter.netlify.com/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://gridsome-portfolio-starter.netlify.com' + node.path,
          author: 'Andre Madarang',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    {
        use: '@gridsome/plugin-google-analytics',
        options: {
          id: 'UA-154765892-1'
        }
    },
    // {
    //   use: 'gridsome-plugin-pwa',
    //   options: {
    //       title: 'JavaScriptJeep',
    //       startUrl: '/',
    //       display: 'standalone',
    //       statusBarStyle: 'default',
    //       manifestPath: 'manifest.json',
    //       disableServiceWorker: true,
    //       serviceWorkerPath: 'service-worker.js',
    //       cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
    //       shortName: 'JavaScriptJeep',
    //       themeColor: '#666600',
    //       backgroundColor: '#ffffff',
    //       icon: 'src', // must be provided like 'src/favicon.png'
    //       msTileImage: '',
    //       msTileColor: '#666600'
    //   }
    // },
  ],
  templates: {
    Tag: '/tag/:id'
  },
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
}
