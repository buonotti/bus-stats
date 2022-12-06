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
  <div>
    <ul class="flex overflow-x-auto whitespace-nowrap p-4">
      <li v-for="publicMonitor in publicMonitors" class="m-3">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              {{publicMonitor.route}}
            </h2>
            <div v-for="time in publicMonitor.times" class="m-1">
              {{time.start}}
              <span class="badge badge-success" v-if="time.accurate">
                ACCURATE
              </span>
              <span class="badge badge-error" v-else>
                INNACURATE
              </span>
            </div>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>