// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  head.meta.push({
    name: 'keywords',
    content: 'JavaScript, programming, JavaScript Jeep, Coding, 100DaysOfCode, '
  })

  head.meta.push({
    name: 'description',
    content: 'JavaScript Jeep for JavaScript Articles'
  })

  head.meta.push({
    name: 'author',
    content: 'JavaScript Jeep'
  })
  head.script.push({
    src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
    body: true,
    async: true,
    "data-id":"Jagathish",
    "data-description":"Support me on Buy me a coffee!",
    "data-message":"Cheer me Up",
    "data-color":"#FF5F5F",
    "data-position":"right",
    "data-x_margin":"18",
    "data-y_margin":"18",
    "data-name":"BMC-Widget"
  });
  head.script.push({
      async : true,
      body : true,
      src : "http://c.amazon-adsystem.com/aax2/assoc.js"
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
}
