<template>
  <div class="antialiased dark:bg-gray-900">
    <AppHeader />
    <SideBar />
    <RightSideBar />

    <!-- main post section -->
    <main class="p-2 pt-0 md:ml-64 md:mr-64 h-auto mt-16 rounded-lg overflow-y-auto">
      <div>
        <div class="bg-white mb-5 flex justify-between">
          <div class="text-xl font-semibold text-slate-700">Feeds</div>
          <div class="flex">
            <ul class="flex justify-between space-x-5 text-sm text-slate-700">
              <li><a href="#">Recent</a></li>
              <li><a href="#">Friends</a></li>
              <li><a href="#">Popular</a></li>
            </ul>
          </div>
        </div>

        <!-- Add a post -->
        <ShareSomething />

        <!-- POSTS -->
        <!-- <div v-for="(post, postKey) in posts" :key="post">
          <SocialPost :post="post" :postKey="postKey" />
        </div> -->
        <!-- {{ posts }} -->
        <PostCard v-for="post in posts" :post="post" :key="post" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import SideBar from '@/components/layout/SideBar.vue'
import RightSideBar from '@/components/layout/RightSideBar.vue'
import PostCard from '@/components/Posts/PostCard.vue'
import ShareSomething from '@/components/Posts/ShareSomething.vue'

import { useStore } from 'vuex'

const store = useStore()
const posts = computed(() => store.getters['Post/posts'])

onMounted(async () => {
  try {
    await store.dispatch('Post/fetchPosts')
  } catch (error) {
    console.log(error)
  }
})
</script>
