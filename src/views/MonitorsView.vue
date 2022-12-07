<script setup lang="ts">
import {ref} from "vue";

const filter = ref("")
const modalOpen = ref(false)

const publicMonitors = ref([
    { route: 'Meran - Bozen', exists: true, times: [{start: '06:00', accurate: true, runtime: '1 Week(s)'},
                                                    {start: '08:00', accurate: true, runtime: '2 Week(s)'},
                                                    {start: '13:45', accurate: false, runtime: '3 Day(s)'}] },
     { route: 'Mals - Meran', exists: true, times: [{start: '06:30', accurate: true, runtime: '1 Week(s)'},
                                                    {start: '11:00', accurate: false, runtime: '2 Day(s)'},
                                                    {start: '16:58', accurate: true, runtime: '3 Month(s)'}] },
    { route: 'Bozen - Brixen', exists: true, times:[{start: '07:30', accurate: true, runtime: '1 Month(s)'},
                                                    {start: '08:12', accurate: false, runtime: '2 Day(s)'},
                                                    {start: '17:20', accurate: false, runtime: '6 Day(s)'}] }])

function showModal()
{
  modalOpen.value = true
}

</script>

<template>
  <VueFinalModal v-model="modalOpen" name="example" classes="modal-container" content-class="modal-content">
    <div class="modal__content">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <div class="card-title text-l">Premium feature</div>
          <div class="text-m m-3">
            See below to learn more about our different premium plans.
          </div>
          <div class="card-actions">
            <button class="btn btn-primary text-m">coming soon</button>
          </div>
        </div>
      </div>
    </div>
  </VueFinalModal>
  <div class="m:mx-24 mx-5 ">
    <div class="mt-3 flex justify-center m:justify-start">
      <div class="content-center shadow-2xl inline-block rounded-[0.5rem]">
        <div class="text-m m-3 bg-primary rounded-[0.5rem] p-1">
          <input type="text" class="bg-primary p-1" placeholder="Search.." v-model="filter">
          <button type="submit" class="p-1">
            <font-awesome-icon icon="magnifying-glass"></font-awesome-icon>
          </button>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-center m:justify-start flex-wrap whitespace-nowrap my-5">
        <div v-for="(publicMonitor) in publicMonitors">
          <div class="card w-96 bg-base-100 shadow-xl mr-5 mb-5" v-if="publicMonitor.route.toLowerCase().includes(filter.toLowerCase())">
            <div class="bg-primary h-[30px]"></div>
            <div class="card-body">
              <h2 class="card-title">
                {{ publicMonitor.route }}
              </h2>
              <div v-for="time in publicMonitor.times" class="m-1">
                {{ time.start }}
                <span class="badge badge-success" v-if="time.accurate">
                {{ time.runtime }}
              </span>
                <span class="badge badge-error" v-else>
                {{ time.runtime }}
              </span>
              </div>
              <div class="card-actions ml-2 text-l">
                <button @click.prevent="showModal()">
                  <font-awesome-icon icon="circle-plus" class="text-primary"></font-awesome-icon>
                </button>
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
  background-color: white;
  font-family: "Roboto", sans-serif;
  font-size: 33px;
  border-radius: 25px;
}
</style>