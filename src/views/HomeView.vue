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
  <div class="float-left ml-24 mt-16">
    <h1 class="title-homepage-l">BusStats</h1>
    <pre class="text-homepage-l">
Look up your route now to get
informed on possible delays or
cancellations.
    </pre>
    <div v-motion-slide-left>
      <router-link to="/lines" class="text-homepage-l btn-main">get started
        <font-awesome-icon icon="play" class="ml-2"></font-awesome-icon>
      </router-link>
    </div>
  </div>
  <div class="h-[750px] w-1/2 align-bottom-right hidden 2xl:flex">
    <img src="../images/home_circle.png" class="h-full w-full" alt="">
  </div>
</template>
