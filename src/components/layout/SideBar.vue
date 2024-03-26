<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen mt-3 transition-transform -translate-x-full md:translate-x-0"
    aria-label="Sidenav"
    id="drawer-navigation"
  >
    <div class="flex flex-col justify-center px-3 h-full bg-white dark:bg-gray-800">
      <div class="w-full h-22 flex items-start justify-center mb-6">
        <div class="flex flex-col items-center">
          <div>
            <img src="@/assets/avatar/avatar6.png" class="rounded-full w-14 h-14" />
          </div>
          <div class="flex flex-col items-center">
            <span class="text-md">{{ User?.name }}</span>
            <span class="text-sm">{{ User?.email }}</span>
          </div>
        </div>
      </div>
      <ul class="space-y-2 ml-3 mr-3">
        <li>
          <a
            href="/"
            class="flex items-center p-2 text-base font-medium text-white-900 rounded-lg dark:text-white hover:bg-primary hover:text-white dark:hover:bg-gray-700 group"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-primary transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span class="ml-3">News Feed</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-medium text-white-900 rounded-lg dark:text-white hover:bg-primary hover:text-white dark:hover:bg-gray-700 group"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 mr-3 text-primary transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            make a post
          </a>
        </li>

        <li>
          <a
            :href="`/profile/${User?.id}`"
            class="flex items-center p-2 text-base font-medium text-white-900 rounded-lg dark:text-white hover:bg-primary hover:text-white dark:hover:bg-gray-700 group"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-primary transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span class="ml-3">Profile page</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-medium text-white-900 rounded-lg dark:text-white hover:bg-primary hover:text-white dark:hover:bg-gray-700 group"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-primary transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span class="ml-3">Settings</span>
          </a>
        </li>
        <li @click="logout">
          <a
            href="#"
            class="flex items-center p-2 text-base font-medium text-white-900 rounded-lg dark:text-white hover:bg-primary hover:text-white dark:hover:bg-gray-700 group"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-primary transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span class="ml-3">Logout</span>
          </a>
        </li>
      </ul>
      <div class="mt-2 w-full h-32">
        <div class="flex flex-col items-center justify-center mt-5">
          <router-link to="/">
            <!-- <img src="@/assets/logoo.png" alt="" class="h-40" /> -->
            <!-- <img src="@/assets/logoo.png" alt="" /> -->

            <img src="@/assets/logo-campus-connect.png" alt="" class="h-14" />
            <img src="@/assets/logo with name.png" alt="" class="h-16" />

            <!-- <img src="@/assets/logo-campus-connect.png" alt="" class="h-12" /> -->
          </router-link>
          <!-- <img src="@/assets/campus connect logo.png" alt="" class="h-22 w-52" /> -->
          <!-- <span class="text-md font-semibold">Campus Connect</span> -->
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'

const store = useStore()

const User = computed(() => store.state.User.user)
console.log(User.value)

const logout = async () => {
  await store.dispatch('User/logout')
  router.push('/login')
}
</script>
