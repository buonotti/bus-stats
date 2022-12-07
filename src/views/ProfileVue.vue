<script setup lang="ts">
import { useAuthenticationStore } from "../plugins/store";
import axios, { AxiosResponse } from "axios";
import { api } from "../plugins/api";
import ProfilePictureAsync from "../components/ProfilePictureAsync.vue";
import { ref } from "vue";

const file = ref("")
const uploadFile = ref("")
const hasImg = ref(true)
const authStore = useAuthenticationStore()
const errorMsg = ref("")
const modalOpen = ref(false)

function setImg(e: any) {
  hasImg.value = true
  file.value = URL.createObjectURL(e.target.files[0]);
  uploadFile.value = e.target.files[0]
}

async function sendImg() {
  let bodyFormData = new FormData();
  bodyFormData.append('image', uploadFile.value)

  try {
    await axios.post(api("profile/") + authStore.id, bodyFormData, {
      headers: {
        'Authorization': "Bearer " + authStore.token
      }
    })
    modalOpen.value = true
    errorMsg.value = "Saved changes!"
    authStore.triggerUpdate()
  } catch (e: any) {
    modalOpen.value = true
    errorMsg.value = e.response.data.message.split(':')[1]
  }
}

async function deleteImage() {
  try {
    await axios.delete(api("profile/") + authStore.id, {
      headers: {
        'Authorization': "Bearer " + authStore.token
      }
    })
    modalOpen.value = true
    errorMsg.value = "Deleted image!"
    authStore.hasProfile = false
    hasImg.value = false
  } catch (e: any) {
    modalOpen.value = true
    errorMsg.value = e.response.data.message.split(':')[1]
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
    <div class="card p:w-[450px] w-[350px] cardDisplay bg-base-100 drop-shadow-2xl align-center mt-5">
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
                  <Suspense class="mt-7">
                    <ProfilePictureAsync :data-src="file" class="mt-7" />
                    <template #fallback>
                      <font-awesome-icon icon="user" class="mt-7 skeleton"></font-awesome-icon>
                    </template>
                  </Suspense>
                </div>
              </div>
              <!--
                <div class="avatar-remove" v-if="authStore.hasProfile" @click="deleteImage">
                <label for="" class="text-3xl">
                  <font-awesome-icon icon="trash"></font-awesome-icon>
                </label>
              </div>
              -->
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
  <div class="h-[600px] w-[300px] select-none align-top-left hidden 2xl:flex">
    <img src="../images/register_circle_left.png" class="h-full w-full" alt="">
  </div>
  <div class="h-[400px] w-[350px] select-none align-bottom-right hidden 2xl:flex">
    <img src="../images/home_circle.png" class="h-full w-full" alt="">
  </div>
</template>

<style scoped>
body {
  background: whitesmoke;
  font-family: 'Roboto', sans-serif;
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

.avatar-upload .avatar-remove {
  position: absolute;
  right: 12px;
  z-index: 1;
  bottom: 10px;
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
  background-color: hsl(var(--b2));
  color: hsl(var(--p));
  font-family: "Roboto", sans-serif;
  font-size: 33px;
  border-radius: 25px;
}
</style>