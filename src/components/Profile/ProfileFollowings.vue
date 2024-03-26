<template>
  <div class="mt-10">
    <div class="grid grid-cols-2 gap-4">
      <div v-for="following in followings" :key="following">
        <FollowingCard :following="following" @unfollow="handleFollowActions" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from '@/api.js'
import FollowingCard from '@/components/Profile/FollowingCard.vue'
const route = useRoute()

const followings = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get(`/api/user/following/${route.params.id}`)
    followings.value = res.data.data
  } catch (error) {
    console.log(error)
  }
})

const handleFollowActions = async (data) => {
  try {
    await axios.delete(`/api/user/following/${data.followerId}`)
    const res = await axios.get(`/api/user/following/${route.params.id}`)
    followings.value = res.data.data
  } catch (error) {
    console.log(error)
  }
}
</script>
