<script setup lang="ts" >
import {onMounted, ref} from "vue";
import axios from 'axios'

const health = ref('bad')

onMounted(async () => {
  try {
    const apiHealth = await axios.get("http://localhost:8080/health")
    if (apiHealth.status === 200) {
      health.value = 'ok'
    }
  } catch (e) {
    // ignored
  }

})
</script>

<template>
  <div class="float-left ml-5 m:ml-24 mt-16">
    <p class="title-homepage-s p:title-homepage-m m:title-homepage-l">BusStats</p>
    <pre class="text-homepage-s p:text-homepage-m m:text-homepage-l">
Look up your route now to get
informed on possible delays or
cancellations.
    </pre>
    <div v-motion-slide-left>
      <router-link to="/lines" class="text-homepage-m m:text-homepage-l btn-main">get started
        <font-awesome-icon icon="play" class="ml-2"></font-awesome-icon>
      </router-link>
    </div>
  </div>
  <div class="h-[750px] w-1/2 align-bottom-right hidden 2xl:flex">
    <img src="../images/home_circle.png" class="h-full w-full" alt="">
  </div>
</template>
