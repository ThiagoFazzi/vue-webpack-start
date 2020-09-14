/**
 * @file
 * @description i18n setup for Vue JS
 * @author      Thiago Fazzi
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import nl from './nl';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    nl,
  },
});

export default i18n;
