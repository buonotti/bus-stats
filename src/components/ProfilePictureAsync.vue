<script async setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import axios, { AxiosResponse } from "axios";
import { useAuthenticationStore } from "../plugins/store";
import { api } from '../plugins/api';

const props = defineProps<{
  dataSrc: string
}>()

const authStore = useAuthenticationStore()
const src = ref("")
const imgSrc = computed(() => {
  if (props.dataSrc) {
    return props.dataSrc
  }
  return src.value
})


async function fetchImage() {
  let response: AxiosResponse<any, any> | null = null
  try {
    response = await axios.get(api("profile/") + authStore.id, {
      headers: {
        'Authorization': "Bearer " + authStore.token
      }
    })
    authStore.hasProfile = true
    return `data:${response!.data.file_type};base64, ${response!.data.file_data}`
  } catch (e: any) {
    return "none"
  }
}

src.value = await fetchImage()
</script>

<template>
  <font-awesome-icon icon="user" id="test" v-if="imgSrc === 'none'"></font-awesome-icon>
  <img :src="imgSrc" v-else class="avatar-preview" />
</template>