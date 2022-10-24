<script setup lang="ts">

import {useDark} from "@vueuse/core";

const isDark = useDark({
  attribute: "data-theme",
  selector: "body",
  valueDark: "bus_stats_dark",
  valueLight: "bus_stats_light"
})
</script>

<template class="">
  <div class="sticky navbar bg-base-100 shadow-lg top-0 z-50">
    <div class="navbar-start">
        <router-link to="/" class="text-homepage-l flex flex-nowrap mt-2 mb-2 ml-24 items-center text-3xl capitalize btn btn-outline">Home<font-awesome-icon icon="home" class="ml-3"></font-awesome-icon></router-link>
        <router-link to="/lines" class="text-homepage-l flex flex-nowrap mt-2 mb-2 ml-5 items-center text-3xl capitalize btn btn-outline">Lines<font-awesome-icon icon="bus" class="ml-3"></font-awesome-icon></router-link>
        <router-link to="/contact" class="text-homepage-l flex flex-nowrap mt-2 mb-2 ml-5 items-center text-3xl capitalize btn btn-outline">Contact<font-awesome-icon icon="envelope" class="ml-3"></font-awesome-icon></router-link>
        <router-link to="/about" class="text-homepage-l flex flex-nowrap mt-2 mb-2 ml-5 items-center text-3xl capitalize btn btn-outline">About<font-awesome-icon icon="circle-info" class="ml-3"></font-awesome-icon></router-link>
    </div>
    <div class="navbar-center">
    </div>
    <div class="navbar-end">
      <!-- HELP-MODE BUTTON -->
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="text-3xl btn btn-ghost btn-circle avatar">
            <font-awesome-icon icon="circle-question"></font-awesome-icon>
          </label>
        </div>
      </div>
      <!-- DARK-MODE BUTTON -->
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="text-3xl btn btn-ghost btn-circle avatar">
            <font-awesome-icon icon="circle-half-stroke" @click="isDark = !isDark"></font-awesome-icon>
          </label>
        </div>
      </div>
      <!-- PROFILE BUTTON -->
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="text-3xl btn btn-ghost btn-circle avatar">
            <!-- TODO Set icon to PFP-->
            <font-awesome-icon icon="user"></font-awesome-icon>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <router-link class="justify-between" to="/register">
                Register
              </router-link>
            </li>
            <li>
              <router-link class="justify-between" to="/login">
                Login
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>

  <div class="h-screen">
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
