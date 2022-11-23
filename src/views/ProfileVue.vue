<script setup lang="ts">
// @ts-ignore
import * as events from "events";
import { defineAsyncComponent, ref } from "vue";
import { useAuthenticationStore } from "../plugins/store";
import axios, { AxiosResponse } from "axios";
import { api } from "../plugins/api";

const file = ref("")
const uploadFile = ref("")
const hasImg = ref(true)
const authStore = useAuthenticationStore()
const errorMsg = ref("")
const modalOpen = ref(false)

const AsyncProfileComponent = defineAsyncComponent({
  loader: () => import("../components/ProfilePictureAsync.vue")
})

//TODO: check typing of e
function setImg(e: any) {
  hasImg.value = true
  file.value = URL.createObjectURL(e.target.files[0]);
  uploadFile.value = e.target.files[0]
}

async function sendImg() {
  let response: AxiosResponse<any, any> | null = null
  let bodyFormData = new FormData();
  bodyFormData.append('image', uploadFile.value)

  try {
    console.log(authStore.id)
    response = await axios.post(api("profile") + authStore.id, bodyFormData, {
      headers: {
        'Authorization': "Bearer " + authStore.token
      }
    })
  } catch (e: any) {
    modalOpen.value = true
    errorMsg.value = e.response.data.message
    console.log(e.response.data.message)
  } finally {
    console.log(response?.status)
  }
}

function encryptStr(str: string) {
  return new Array(str.length).join('*');
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
    <div class="card w-1/3 cardDisplay bg-base-100 drop-shadow-2xl align-center mt-5">
      <div class="card-body items-center text-center">
        <form>
          <div class="float-left ml-5 mt-25">
            <div class="text-l">
              Profile
            </div>
            <div class="avatar-upload">
              <div class="avatar-edit">
                <input type='file' id="imageUpload" name="image" accept=".png, .jpg, .jpeg" @change="setImg" />
                <label for="imageUpload" class="text-3xl">
                  <font-awesome-icon icon="pen"></font-awesome-icon>
                </label>
              </div>
              <div class="avatar-preview drop-shadow-2xl">
                <div id="imagePreview" class="bg-base-100 text-9xl drop-shadow-2xl">
                  <Suspense>
                    <AsyncProfileComponent :data-src="file" />
                    <template #fallback>
                      <font-awesome-icon icon="user" class="mt-7"></font-awesome-icon>
                    </template>
                  </Suspense>
                </div>
              </div>
            </div>
            <div>
              <p class="text-l mt-5">
                Email: {{ authStore.username }}
              </p>
              <p class="text-l mt-5">
                Password: {{ encryptStr(authStore.username) }}
              </p>
            </div>
            <div class="mt-5">
              <button type="submit" class="text-l btn-main btn-wide align-center" @click.prevent="sendImg">Save</button>
            </div>
          </div>
        </form>
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
body {
  background: whitesmoke;
  font-family: 'Berlin Sans FB', sans-serif;
}

.avatar-upload {
  position: relative;
  max-width: 205px;
  margin: 50px auto;
}

.avatar-upload .avatar-edit {
  position: absolute;
  right: 12px;
  z-index: 1;
  top: 10px;
}

.avatar-upload .avatar-edit input {
  display: none;
}

.avatar-upload .avatar-edit input+label {
  display: inline-block;
  width: 34px;
  height: 34px;
  margin-bottom: 0;
  border-radius: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: normal;
  transition: all .2s ease-in-out;
}

.avatar-upload .avatar-edit input+label:after {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
}

.avatar-upload .avatar-preview {
  width: 192px;
  height: 192px;
  position: relative;
  border-radius: 100%;
}

.avatar-upload .avatar-preview>div {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  font-family: "Berlin Sans FB", sans-serif;
  font-size: 33px;
  border-radius: 25px;
}
</style>