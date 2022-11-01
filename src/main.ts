import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./plugins/router";
import vfmPlugin from "vue-final-modal"
import{FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faHouse, faBus, faEnvelope, faCircleInfo, faCircleQuestion, faCircleHalfStroke, faPlay, faUser, faKey} from "@fortawesome/free-solid-svg-icons";

library.add(faHouse)
library.add(faBus)
library.add(faEnvelope)
library.add(faCircleInfo)
library.add(faCircleQuestion)
library.add(faCircleHalfStroke)
library.add(faPlay)
library.add(faUser)
library.add(faKey)

createApp(App).use(router).use(vfmPlugin).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
