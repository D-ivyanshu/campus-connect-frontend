<template>
  <div
    class="mt-5 h-full w-full bg-white rounded-xl text-gray-900 flex flex-col justify-start shadow-lg"
  >
    <div class="relative bg-white">
      <div class="rounded-t-lg h-48 overflow-hidden">
        <img
          class="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cover Photo"
        />
      </div>

      <div class="w-full mx-auto absolute left-5 top-20 flex items-center space-x-3">
        <div class="w-32 h-32 border-2 border-white rounded-full overflow-hidden">
          <img class="rounded-full" src="@/assets/avatar/avatar6.png" alt="Woman looking front" />
        </div>
        <div>
          <div>
            <h1 class="text-xl font-bold text-white">Divyanshu Upreti</h1>
            <p class="text-slate-400 text-md">Computer Science</p>
          </div>
        </div>
      </div>
      <div
        v-if="User.id != route.params.id"
        class="right-0 top-36 w-15 absolute lg:right-10 lg:top-32"
      >
        <div v-if="buttonText == 'follow'">
          <Button
            class="text-sm h-8 bg-white text-black border-[1.5px] hover:bg-gray-100 hover:border-black"
            @click="handleFollowActions('follow')"
            >Follow</Button
          >
        </div>
        <div v-if="buttonText == 'unfollow'">
          <Button
            class="text-sm h-8 bg-white hover:bg-green-100"
            @click="handleFollowActions('unfollow')"
          >
            <IconTick class="text-green-500" />
            <h1 class="text-green-500">Followed</h1>
          </Button>
        </div>
      </div>
    </div>

    <div class="bg-white h-full rounded-xl">
      <ProfileTabs @selected="handleTabSelected" />
    </div>
  </div>

  <div class="mt-2">
    <div v-if="selectedComponent === 1"><ProfileAbout /></div>
    <div v-if="selectedComponent === 2"><ProfileFollowers /></div>
    <div v-if="selectedComponent === 3"><ProfileFriends /></div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import ProfileAbout from '@/components/Profile/ProfileAbout.vue'
import ProfileFollowers from '@/components/Profile/ProfileFollowers.vue'
import ProfileFriends from '@/components/Profile/ProfileFollowings.vue'
import ProfileTabs from '@/components/Profile/ProfileTabs.vue'
import Button from '@/components/ui/button/Button.vue'
import axios from '@/api.js'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import IconTick from '@/components/icons/IconTick.vue'

const route = useRoute()
const store = useStore()

const selectedComponent = ref(1)
const User = computed(() => store.state.User.user)

const handleTabSelected = (index) => {
  selectedComponent.value = index
}

const buttonText = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get(`/api/user/isfollowing/${route.params.id}`)
    buttonText.value = res.data.data
  } catch (error) {
    console.log(error)
  }
})

const handleFollowActions = async (data) => {
  try {
    if (data === 'follow') {
      await axios.put(`/api/user/following/${route.params.id}`)
      buttonText.value = 'unfollow'
    } else if (data === 'unfollow') {
      await axios.delete(`/api/user/following/${route.params.id}`)
      buttonText.value = 'follow'
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
