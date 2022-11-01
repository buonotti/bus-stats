<script setup lang="ts">

import {ref} from "vue";
import axios, {AxiosResponse} from "axios";
import ErrorMsg from "../components/ErrorMsg.vue";
import errorMsg from "../components/ErrorMsg.vue";

const email = ref("")
const password = ref("")
const passwordRepeat = ref("")
const modalOpen = ref(false)

async function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function registerUser() {
  const user = {
    email: email.value,
    password: password.value
  }

  if (user.password === passwordRepeat.value && user.password.length >= 3) {
    let response: AxiosResponse<any, any> | null = null

    user.password = await sha256(user.password)
    console.log(user.password)

    try {
      response = await axios.post("http://localhost:8080/api/v1/register", user)
    } catch (e: any) {
      console.log(errorMsg.methods.emailError())
      modalOpen.value = true;
    } finally {
      console.log(response?.status)
    }
  } else if (user.password.length < 3) {
    console.log(errorMsg.methods.passwordFormatError())
    modalOpen.value = true;
  } else {
    console.log(errorMsg.methods.passwordMatchingError())
    modalOpen.value = true;
  }
}

</script>
<template>
  <div>
    <VueFinalModal v-model="modalOpen" name="example" classes="modal-container" content-class="modal-content">
      <div class="modal__content">
        <error-msg></error-msg>
      </div>
    </VueFinalModal>
  </div>
  <div id="warning"></div>
  <div class="card w-1/3 bg-base-100 shadow-xl align-center">
    <div class="card-body items-center text-center">
      <h1 class="title-l">Register</h1>
      <div>
        <input type="email" placeholder="E-Mail" class="text-l input input-bordered border-2 input-primary w-full mb-5"
               v-model="email"/>
        <input type="password" placeholder="Password"
               class="text-l input input-bordered border-2 input-primary w-full mb-5"
               v-model="password"/>
        <input type="password" placeholder="Repeat password"
               class="text-l input input-bordered border-2 input-primary w-full mb-5"
               v-model="passwordRepeat"/>
      </div>
    </div>
    <div class="card-actions justify-end mb-5">
      <button class="text-l btn-main btn-wide align-center" @click.prevent="registerUser">Create</button>
    </div>
  </div>
  <div class="h-[600px] w-[300px] select-none align-top-left">
    <img src="../images/register_circle_left.png" class="h-full w-full" alt="">
  </div>
  <div class="h-[400px] w-[350px] select-none align-bottom-right">
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
  background-color: white;
  font-family: "Berlin Sans FB", sans-serif;
  font-size: 33px;
  border-radius: 25px;
}
</style>