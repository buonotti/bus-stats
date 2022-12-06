<script setup lang="ts">
import {ref} from "vue";

const publicMonitors = ref([
    { route: 'Meran - Bozen', exists: true, times: [{start: '06:00', accurate: true},
                                                    {start: '08:00', accurate: true},
                                                    {start: '13:45', accurate: false}] },
    { route: 'Bozen - Brixen', exists: true, times:[{start: '07:30', accurate: true},
                                                    {start: '08:12', accurate: false},
                                                    {start: '17:20', accurate: true}] }])
</script>

<template>
  <div class="mx-24">
    <div class="content-center shadow-2xl inline-block rounded-[0.5rem] mt-3">
      <div class="text-m m-3 bg-primary rounded-[0.5rem] p-1">
        <input type="text" class="bg-primary p-1" placeholder="Search..">
        <button type="submit" class="p-1">
          <font-awesome-icon icon="magnifying-glass"></font-awesome-icon>
        </button>
      </div>
    </div>
    <div>
      <div class="flex flex-wrap whitespace-nowrap my-5">
        <div v-for="(publicMonitor, index) in publicMonitors" class="mr-5 mb-5">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="bg-primary h-[30px]"></div>
            <div class="card-body">
              <h2 class="card-title">
                {{ publicMonitor.route }}
              </h2>
              <div v-for="time in publicMonitor.times" class="m-1">
                {{ time.start }}
                <span class="badge badge-success" v-if="time.accurate">
                ACCURATE
              </span>
                <span class="badge badge-error" v-else>
                INNACURATE
              </span>
              </div>
              <div class="card-actions justify-end">
                <router-link to="/createMonitor">
                  <font-awesome-icon icon="circle-plus" class="text-primary"></font-awesome-icon>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
textarea:focus, input:focus{
  outline: none;
}
textarea::placeholder, input::placeholder{
  outline: none;
  color: hsl(var(--bc));
  opacity: 70%;
}
</style>