// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  // Configuration options here
  devtools: { enabled: true },
  ssr: false, //disable ssr
  colorMode: {
    preference: 'light'
  },
  routes: [
    {
      name: 'home',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'about',
      path: '/about',
      component: 'pages/about.vue'
    },
    {
      name: 'mushroom-detail',
      path: '/mushrooms',
      component: '~/pages/mushroom-detail.vue'
    },
    {
      name: 'contact',
      path: '/',
      component: 'pages/contact.vue'
    },
    {
      name: 'news',
      path: '/',
      component: 'pages/news.vue'
    },
    // for generating page based on mushroom ID, we will implement later
    /*
    {
      name: 'mushroom-detail',
      path: '/mushrooms/:id',
      component: '~/pages/mushroom-detail.vue'
    },*/
  ],
  modules: [
    '@nuxt/ui',
    'vue3-carousel-nuxt',
    '@nuxt/image-edge'
  ],
  //Cloudinary config
  image:{
    cloudinary:{
      baseURL: 'https://res.cloudinary.com/dcyxj3dqt/image/upload/',
    },
  },
  //Tailwind CSS config
  TailwindModules: [
    '@nuxtjs/tailwindcss'
  ]
}