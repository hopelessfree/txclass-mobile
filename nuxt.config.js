module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "妙思维JS++前端开发官方网站 - WEB|JavaScript|Vue|React|Node",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
      {
        hid: "JS++前端开发工程师精英就业班与提升班课程是针对前端开发零基础、爱好者、职业技术提升、互联网创业相关人员的一套完整的WEB前端开发学习体系，该体系通过深度基础课程对学员进行培养，使学员掌握最完整最有深度的技术理论知识和实战的基础技能。",
      },
      {
        hid: "前端开发,WEB开发,在线课程,编程,项目实战,项目架构,JavaScript,Vue,React,Node",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/styles/border.css",
    "@/assets/styles/common.css",
    "@/assets/styles/iconfont.css",
    "@/assets/styles/resets.css",
    "swiper/css/swiper.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/assets/scripts/common.js", ssr: false },
    { src: "@/plugins/vue-awesome-swiper.js", ssr: false },
    { src: "@/plugins/vue-lazyload.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'http://source.songxianwei.com',
  },

  server: {
    port: 3008,
    host: '0.0.0.0',
  },
  
};
