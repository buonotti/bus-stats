import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./plugins/router"
import {store} from "./plugins/store"
import vfmPlugin from "vue-final-modal"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { MotionPlugin } from '@vueuse/motion'
import {faHouse, faBus, faEnvelope, faCircleInfo, faCircleQuestion, faCircleHalfStroke, faPlay, faUser, faPen, faKey, faBars, faCirclePlus, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

library.add(faHouse)
library.add(faBus)
library.add(faEnvelope)
library.add(faCircleInfo)
library.add(faCircleQuestion)
library.add(faCircleHalfStroke)
library.add(faPlay)
library.add(faUser)
library.add(faKey)
library.add(faPen)
library.add(faBars)
library.add(faCirclePlus)
library.add(faMagnifyingGlass)

createApp(App).use(router).use(store).use(vfmPlugin).use(MotionPlugin).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
