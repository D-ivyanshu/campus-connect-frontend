<template>
  <div class="mt-4 h-auto w-full flex flex-col">
    <div v-if="notifications?.length > 0">
      <NotificationContent :notifications="notifications" />
    </div>
    <div v-else><NoNotification /></div>
    <button
      v-if="notifications?.length > 0"
      class="flex items-center justify-center p-2 rounded-xl hover:bg-green-200 m-2 bg-green-100"
      @click="clearNotifications()"
    >
      <IconTick class="text-green-500 mr-2" />
      <div>Mark all as read</div>
    </button>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import axios from '@/api.js'

import IconTick from '@/components/icons/IconTick.vue'
import NotificationContent from '@/components/Notifications/NotificationContent.vue'
import NoNotification from '@/components/Notifications/NoNotification.vue'

const store = useStore()

const User = computed(() => store.state.User.user)
console.log(User.value)

const notifications = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get(`/api/user/${User.value.id}/notification`)
    console.log(res)
    notifications.value = res.data.notifications
  } catch (error) {
    console.log(error)
  }
})

const clearNotifications = async () => {
  try {
    await axios.get(`/api/user/${User.value.id}/notification/read-all`)
    notifications.value = ''
  } catch (error) {
    console.log(error)
  }
}
</script>
