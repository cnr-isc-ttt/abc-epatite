/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import
ShareVariant
from 'mdi-vue/ShareVariant';
import GestureTap from 'mdi-vue/GestureTap';
import EmailSendOutline from 'mdi-vue/EmailSendOutline';
import WhatsApp from 'mdi-vue/Whatsapp';
// https://code.luasoftware.com/tutorials/vuepress/import-vuejs-component-into-vuepress/
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer,
}) => {
  // ...apply enhancements for the site.
  Vue.component('ShareVariant', ShareVariant);
  Vue.component('GestureTap', GestureTap);
  Vue.component('EmailSendOutline', EmailSendOutline);
  Vue.component('WhatsApp', WhatsApp);
  if (!isServer) {
    import('vue-carousel').then((module) => {
      Vue.use(module.default)
    })
  }
};