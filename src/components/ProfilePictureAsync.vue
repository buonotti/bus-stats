<script async setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import axios, {AxiosResponse} from "axios";
import {useAuthenticationStore} from "../plugins/store";

const props = defineProps<{
  dataSrc: string
}>()
const authStore = useAuthenticationStore()
const src = ref("")
const imgSrc = computed(() => {
  if (props.dataSrc) {
    const srcValue = props.dataSrc
    return `<img src="${srcValue}"  style="width: 100%; height: 100%; border-radius: 100%; background-size: cover; background-repeat: no-repeat; background-position: center;" alt=''/>`
  }
  return src.value
})

async function fetchImage() {
    let response: AxiosResponse<any, any> | null = null
    try {
      response = await axios.get("http://localhost:8080/api/v1/profile/" + authStore.id, {
        headers: {
          'Authorization': "Bearer " + authStore.token
        }
      })
      const srcValue = `data:${response!.data.file_type};base64, ${response!.data.file_data}`
      return `<img src="${srcValue}"  style="width: 100%; height: 100%; border-radius: 100%; background-size: cover; background-repeat: no-repeat; background-position: center;" alt=''/>`
    } catch (e: any) {
      return "<font-awesome-icon icon=\"user\" class=\"mt-7\"></font-awesome-icon>"
    }
}

src.value = await fetchImage()
</script>

<template>
  <span v-html="imgSrc"></span>
</template>