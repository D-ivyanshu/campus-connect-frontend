<template>
  <div class="mt-10">
    <!--TODO: {{ Improve the border part }} -->
    <div class="grid grid-cols-4 grid-rows-5 gap-4">
      <div
        class="row-span-2 shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-evenly border-[1px] border-slate-100"
      >
        <div class="lg:mr-2 items-center justify-center flex flex-col">
          <div class="text-xl font-semibold">{{ User?.data?.attributes?.followers_count }}</div>
          <div class="text-sm text-slate-500">Followers</div>
        </div>

        <div class="hidden lg:block">
          <Separator orientation="vertical" class="text-black w-0.5 h-20" />
        </div>
        <div class="lg:ml-2 items-center justify-center flex flex-col">
          <div class="text-xl font-semibold">{{ User?.data?.attributes?.following_count }}</div>
          <div class="text-sm text-slate-500">Following</div>
        </div>
      </div>
      <div class="col-span-3 row-span-5 shadow-lg rounded-lg border-[1px] border-slate-100">
        <div class="p-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo fugit officia, veniam cum
          dolorem molestiae! Aut laborum facilis amet aperiam blanditiis qui, vitae possimus officia
          ad in eos voluptatem veritatis voluptates a perspiciatis quasi voluptas distinctio quos?
          Aliquid nam dolorum deleniti illum ipsum unde, quos accusamus! Tenetur cupiditate
          assumenda dolores!
        </div>
      </div>
      <div
        class="row-span-3 row-start-3 shadow-lg rounded-lg border-[1px] border-slate-100 flex flex-col"
      >
        <h1 class="pl-3 pt-3 text-lg font-semibold">Social</h1>
        <div class="flex items-center">
          <ul class="p-3">
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="text-blue-500 mr-2 h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"
                ></path>
              </svg>
              <span class="hidden lg:block">Facebook</span>
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="text-pink-600 mr-3 h-4 w-4"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7M911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165M512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1m213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9"
                ></path>
              </svg>
              <span class="hidden lg:block">Instagram</span>
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="text-blue-600 mr-2 h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93a2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82"
                ></path>
                <rect
                  width="4.5"
                  height="11.7"
                  x="3"
                  y="9.3"
                  fill="currentColor"
                  rx=".9"
                  ry=".9"
                ></rect>
                <circle cx="5.25" cy="5.25" r="2.25" fill="currentColor"></circle>
              </svg>
              <span class="hidden lg:block">Linkedin</span>
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="text-blue-400 mr-2 h-5 w-5"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8.08 20A11.07 11.07 0 0 0 19.52 9A8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51a1.88 1.88 0 0 1-2.16-.38a3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24a9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"
                ></path>
              </svg>
              <span class="hidden lg:block">Twitter</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ShareSomething class="mt-5" />
    <PostCard v-for="post in posts" :post="post" :key="post" />
  </div>
</template>

<script setup>
import { Separator } from '@/components/ui/separator'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from '@/api.js'
import ShareSomething from '@/components/Posts/ShareSomething.vue'
import PostCard from '@/components/Posts/PostCard.vue'

const route = useRoute()
const User = ref(null)
const posts = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get(`/api/user/${route.params.id}`)
    const postres = await axios.get(`/api/user/${route.params.id}/posts`)
    posts.value = postres.data.data
    User.value = res.data
  } catch (error) {
    console.log(error)
  }
})
</script>
