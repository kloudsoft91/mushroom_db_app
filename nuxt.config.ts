// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  // Configuration options here
  devtools: { enabled: true },
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
  ],
  //Cloudinary config
  modules: ['@nuxt/image-edge'],
  image:{
    cloudinary:{
      baseURL: 'https://res.cloudinary.com/dcyxj3dqt/image/upload/',
    },
  },
}