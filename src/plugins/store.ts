import { createPinia, defineStore } from "pinia";
import { computed, ref } from "vue";
import router from "./router";

export const store = createPinia();

export const useAuthenticationStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);
  const _username = ref("");
  const username = computed(() => _username.value);
  const id = ref("");
  const token = ref("");
  const hasProfile = ref(false);

  let updateHandler: () => void = () => {};

  function login(message: string) {
    _username.value = message;
    isLoggedIn.value = true;
  }

  function registerProfileUpdateHandler(f: () => void) {
    updateHandler = f;
  }

  function triggerUpdate() {
    updateHandler();
  }

  async function logout() {
    isLoggedIn.value = false;
    _username.value = "";
    id.value = "";
    token.value = "";
    await router.push("/");
  }

  function saveLoginData(tokenValue: string, idValue: string) {
    id.value = idValue;
    token.value = tokenValue;
  }

  return {
    isLoggedIn,
    username,
    id,
    token,
    hasProfile,
    login,
    logout,
    saveLoginData,
    registerProfileUpdateHandler,
    triggerUpdate,
  };
});
