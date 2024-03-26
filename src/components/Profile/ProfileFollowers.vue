<template>
  <div class="mt-10">
    <div class="grid grid-cols-2 gap-4">
      <div v-for="follower in followers" :key="follower">
        <FollowerCard :follower="follower" @follow="handleFollowActions" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/api.js'
import FollowerCard from '@/components/Profile/FollowerCard.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const followers = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get(`/api/user/followers/${route.params.id}`)
    followers.value = res.data.data
  } catch (error) {
    console.log(error)
  }
})

const handleFollowActions = async (data) => {
  try {
    if (data.action === 'follow') {
      await axios.put(`/api/user/following/${data.followerId}`)
    } else if (data.action === 'unfollow') {
      await axios.delete(`/api/user/following/${data.followerId}`)
    }
    const res = await axios.get(`/api/user/followers/${route.params.id}`)
    followers.value = res.data.data
  } catch (error) {
    console.log(error)
  }
}
</script>
