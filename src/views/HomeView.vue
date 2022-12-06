<template>
  <div class="float-left ml-5 m:ml-24 mt-16">
    <p class="title-homepage-s p:title-homepage-m m:title-homepage-l">BusStats</p>
    <pre class="text-homepage-s p:text-homepage-m m:text-homepage-l">
Look up your route now to get
informed on possible delays or
cancellations.
    </pre>
    <div v-motion-slide-left>
      <router-link to="/monitors" class="text-homepage-m m:text-homepage-l btn-main">get started
        <font-awesome-icon icon="play" class="ml-2"></font-awesome-icon>
      </router-link>
    </div>
  </div>
</template>
