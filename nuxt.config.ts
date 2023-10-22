// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  // Configuration options here
  app: {
    baseURL: '/mushroom_db_app/', // baseURL: '/<repository_name>/'
    buildAssetsDir: 'assets',
  },
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
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
      name: 'contact',
      path: '/contact',
      component: 'pages/contact.vue'
    },
    {
      name: 'news',
      path: '/news',
      component: 'pages/news.vue'
    },
    {
      name: 'admin',
      path: '/admin',
      component: 'pages/admin.vue'
    },
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