/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import
ShareVariant
from '../../node_modules/mdi-vue/ShareVariant';
import GestureTap from '../../node_modules/mdi-vue/GestureTap';
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.component('ShareVariant', ShareVariant);
  Vue.component('GestureTap', GestureTap);

};