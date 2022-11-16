<script setup lang="ts">
import emailjs from '@emailjs/browser';
import {ref} from "vue";

const email = ref("");
const message = ref("");
const modalOpen = ref(false);
const confirmMsg = ref("")
const confirmTitle = ref("")

async function sendEmail() {
  let data = {
    from_email: email.value,
    message: message.value,
  }

  try {
    await emailjs.send('service_bdihciq', 'template_c5x2uzq', data, '5nBVeAOC3749XpTxd')
    confirmTitle.value = "Feedback send"
    confirmMsg.value = "Thank you for helping us improve"
  } catch (e: any) {
    confirmTitle.value = "Oh no"
    confirmMsg.value = "Something went wrong."
  } finally {
    modalOpen.value = true
  }

}
</script>

<template>
  <div>
    <VueFinalModal v-model="modalOpen" name="example" classes="modal-container" content-class="modal-content">
      <div class="modal__content">
        <div class="title-l text-center">
          {{confirmTitle}}
        </div>
        <div class="text-l text-center">
          {{confirmMsg}}
        </div>
      </div>
    </VueFinalModal>
  </div>
  <div v-motion-slide-top>
    <div class="card w-1/3 bg-base-100 shadow-xl align-center">
      <div class="card-body items-center text-center">
        <h1 class="title-l">Contact</h1>
        <div>
          <input type="email" placeholder="E-Mail"
                 class="text-l input input-bordered border-2 input-primary w-full mb-5"
                 v-model="email"/>
          <textarea type="text" placeholder="Describe your issue here"
                    class="text-l input input-bordered border-2 input-primary w-full mb-5 textarea h-24"
                    v-model="message"/>
        </div>
      </div>
      <div class="card-actions justify-end mb-5">
        <button class="text-l btn-main btn-wide align-center" @click.prevent="sendEmail()">Submit</button>
      </div>
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