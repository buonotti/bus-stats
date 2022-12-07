<script setup lang="ts">

import { ref } from "vue";
import axios, { AxiosResponse } from "axios";
import { useAuthenticationStore } from "../plugins/store";
import { useRouter } from "vue-router";
import { api } from "../plugins/api"

const errorMsg = ref("")
const email = ref("")
const password = ref("")
const passwordHash = ref("")
const modalOpen = ref(false)
const authStore = useAuthenticationStore()
const router = useRouter()

async function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function loginUser() {
  passwordHash.value = await sha256(password.value);
  const user = {
    email: email.value,
    password: passwordHash.value
  }
  let response: AxiosResponse<any, any> | null = null

  try {
    response = await axios.post(api("login"), user)
    authStore.login(user.email)
    authStore.saveLoginData(response?.data.token, response?.data.uid)
    await router.push("/")
  } catch (e: any) {
    modalOpen.value = true
    errorMsg.value = e.response.data.message.split(':')[1]
  }
}

</script>
<template>
  <div>
    <VueFinalModal v-model="modalOpen" name="example" classes="modal-container" content-class="modal-content">
      <div class="modal__content">
        {{ errorMsg }}
      </div>
    </VueFinalModal>
  </div>
  <div id="warning"></div>
  <div v-motion-slide-top>
    <div class="card p:w-[450px] w-[350px] cardDisplay bg-base-100 shadow-xl align-center">
      <div class="card-body items-center text-center">
        <h1 class="title-l">Login</h1>
        <div>
          <input type="email" placeholder="E-Mail"
            class="text-l input input-bordered border-2 input-primary w-full mb-5" v-model="email" />
          <input type="password" placeholder="Password"
            class="text-l input input-bordered border-2 input-primary w-full mb-5" v-model="password" />
        </div>
      </div>
      <div class="card-actions justify-end mb-5">
        <button class="text-l btn-main btn-wide align-center" @click.prevent="loginUser">Submit</button>
      </div>
      <div class="card-actions justify-center mb-5">
        <router-link to="/register" class="text-primary hover: cursor-pointer"
          style="font-family: 'Roboto', sans-serif; text-decoration-line: underline">Register instead
        </router-link>
      </div>
    </div>
  </div>
  <div class="h-[600px] w-[300px] select-none align-top-left hidden 2xl:flex">
    <img src="../images/register_circle_left.png" class="h-full w-full" alt="">
  </div>
  <div class="h-[400px] w-[350px] select-none align-bottom-right hidden 2xl:flex">
    <img src="../images/home_circle.png" class="h-full w-full" alt="">
  </div>
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
  font-family: "Roboto", sans-serif;
  font-size: 33px;
  border-radius: 25px;
}
</style>