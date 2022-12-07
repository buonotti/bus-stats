<script setup lang="ts">

import { useDark } from "@vueuse/core";
import ProfilePictureAsync from "./components/ProfilePictureAsync.vue";
import { useAuthenticationStore } from "./plugins/store";
import { ref } from 'vue';

const isDark = useDark({
  attribute: "data-theme",
  selector: "body",
  valueDark: "bus_stats_dark",
  valueLight: "bus_stats_light"
})

const authStore = useAuthenticationStore()
const modalOpen = ref(false);

function convertEmail(email: string) {
  if (email.length > 20) {
    const subStr = email.substring(0, 20)
    return subStr + "..."
  }
  return email
}

</script>

<template class="">
  <VueFinalModal v-model="modalOpen" name="example" classes="modal-container" content-class="modal-content">
    <div class="modal__content">

    </div>
  </VueFinalModal>
  <div class="relative flex flex-wrap items-center justify-between">
    <div class="sticky navbar bg-base-100 shadow-lg top-0 z-50">
      <div class="navbar-start">
        <img src="../src/images/logo.svg" alt="" class="hidden m:flex h-12 ml-3">
        <router-link to="/"
          class="text-homepage-l flex-nowrap mt-2 mb-2 ml-8 items-center text-3xl capitalize btn btn-outline hidden m:flex">
          <div class="hidden xl:flex">Home</div>
          <font-awesome-icon icon="home" class="xl:ml-3"></font-awesome-icon>
        </router-link>
        <router-link to="/monitors"
          class="text-homepage-l flex-nowrap mt-2 mb-2 ml-5 items-center text-3xl capitalize btn btn-outline hidden m:flex">
          <div class="hidden xl:flex">Monitors</div>
          <font-awesome-icon icon="bus" class="xl:ml-3"></font-awesome-icon>
        </router-link>
        <!-- <router-link to="/contact"
          class="text-homepage-l flex-nowrap mt-2 mb-2 ml-5 items-center text-3xl capitalize btn btn-outline hidden m:flex">
          <div class="hidden xl:flex">Contact</div>
          <font-awesome-icon icon="envelope" class="xl:ml-3"></font-awesome-icon>
        </router-link> -->
        <router-link to="/about"
          class="text-homepage-l flex-nowrap mt-2 mb-2 ml-5 items-center text-3xl capitalize btn btn-outline hidden m:flex">
          <div class="hidden xl:flex">About</div>
          <font-awesome-icon icon="circle-info" class="xl:ml-3"></font-awesome-icon>
        </router-link>
        <div class="flex m:hidden">
          <div class="dropdown m-1">
            <label tabindex="0" class="text-3xl btn btn-ghost btn-circle avatar ">
              <font-awesome-icon icon="bars"></font-awesome-icon>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <router-link class="justify-between" style="font-family: 'Berlin Sans FB', sans-serif" to="/">
                  Home
                </router-link>
              </li>
              <li>
                <router-link class="justify-between" style="font-family: 'Berlin Sans FB', sans-serif" to="/monitors">
                  Monitors
                </router-link>
              </li>
              <!-- <li>
                <router-link class="justify-between" style="font-family: 'Berlin Sans FB', sans-serif" to="/contact">
                  Contact
                </router-link>
              </li> -->
              <li>
                <router-link class="justify-between" style="font-family: 'Berlin Sans FB', sans-serif" to="/about">
                  About
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="navbar-center">
      </div>
      <div class="navbar-end">
        <!-- HELP-MODE BUTTON -->
        <div class="flex flex-col lg:flex-row list-none ml-auto">
          <div class="dropdown dropdown-end m-1">
            <a tabindex="0" class="text-3xl btn btn-ghost btn-circle avatar" href="https://bus-stats-api-prod-bus-stats-api-zd0528.mo5.mogenius.io/swagger/index.html" target="_blank">
              <font-awesome-icon icon="circle-question"></font-awesome-icon>
            </a>
          </div>
        </div>
        <!-- DARK-MODE BUTTON -->
        <div class="flex-none">
          <div class="dropdown dropdown-end m-1">
            <label tabindex="0" class="text-3xl btn btn-ghost btn-circle avatar">
              <font-awesome-icon icon="circle-half-stroke" @click="isDark = !isDark"></font-awesome-icon>
            </label>
          </div>
        </div>
        <!-- NAME DISPLAY -->
        <div v-motion :initial="{
          opacity: 0,
          x: -100,
        }" :enter="{
  opacity: 1,
  x: 0,
}" :leave="{
  opacity: 0,
  x: 100,
}" class="flex-none m-1 hidden ml:flex" v-if="authStore.isLoggedIn">
          <span class="badge text-m p-4 text-primary border-2 border-primary bg-base-100"
            style="font-family: 'Berlin Sans FB', sans-serif;">{{ convertEmail(authStore.username) }}</span>
        </div>
        <!-- PROFILE BUTTON -->
        <div class="flex-none">
          <div class="dropdown dropdown-end m-1">
            <label tabindex="0" class="text-3xl btn btn-ghost btn-circle avatar ">
              <Suspense v-if="authStore.isLoggedIn">
                <ProfilePictureAsync data-src="" class="rounded-[100%]" />
                <template #fallback>
                  <font-awesome-icon icon="user" class="skeleton"></font-awesome-icon>
                </template>
              </Suspense>
              <font-awesome-icon icon="user" v-else></font-awesome-icon>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <router-link class="justify-between" style="font-family: 'Berlin Sans FB', sans-serif" to="/register">
                  Register
                </router-link>
              </li>
              <li>
                <router-link class="justify-between" style="font-family: 'Berlin Sans FB', sans-serif" to="/login"
                  v-if="!authStore.isLoggedIn">
                  Login
                </router-link>
                <button class="justify-between" style="font-family: 'Berlin Sans FB', sans-serif"
                  @click="authStore.logout" v-else>
                  Logout
                </button>
              </li>
              <li>
                <router-link class="justify-between" style="font-family: 'Berlin Sans FB', sans-serif" to="/profile">
                  Profile
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="min-h-screen">
    <router-view></router-view>
  </div>
  <footer class="footer footer-center p-1 border-t-2 border-primary text-base-content text-s mt-auto">
    Copyright &copy; Buonotti 2022
  </footer>
</template>

<style scoped>
:deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 3rem;
  background-color: hsl(var(--b2));
  color: hsl(var(--p));
  font-family: "Berlin Sans FB", sans-serif;
  font-size: 33px;
  border-radius: 25px;
}
</style>
