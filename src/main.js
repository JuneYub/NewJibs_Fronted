import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useKakao } from 'vue3-kakao-maps/@utils';
import 'intro.js/introjs.css';
import 'intro.js/themes/introjs-modern.css';

/* ag-grid css */
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './assets/main.css';

import { useMemberStore } from './stores/member'

// Polyfill for global object
if (typeof global === 'undefined') {
  window.global = window;
}

const pinia = createPinia()
const app = createApp(App)

pinia.use(piniaPluginPersistedstate)

useKakao('26966ba6b4868e85a7fc9760936d8e28', ['services']);
app.use(pinia)
app.use(router)

const memberStore = useMemberStore()
memberStore.initializeAuthState()

app.mount('#app')
