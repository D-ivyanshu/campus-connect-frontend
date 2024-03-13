<template>
  <div class="border-2 border-dashed rounded-2xl border-gray-300 dark:border-gray-600 mb-4">
    <div class="hover:bg-gray-50 bg-white p-8 rounded-2xl shadow-md w-full">
      <!-- User Info with Three-Dot Menu -->
      <div class="flex items-center justify-between mb-4 w-full">
        <div class="flex items-center space-x-2">
          <img src="@/assets/avatar/avatar3.jpg" class="rounded-full w-14 h-14" />
          <div>
            <p class="text-gray-800 font-semibold">
              {{ post?.data.attributes.posted_by.data.attributes.name }}
            </p>
            <p class="text-gray-500 text-sm">Posted {{ post?.data.attributes.posted_at }}</p>
          </div>
        </div>
        <div class="text-gray-500 cursor-pointer">
          <!-- Three-dot menu icon -->
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button class="hover:bg-gray-50 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="7" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="17" r="1" />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="left-0">
              <DropdownMenuItem>
                <IconEdit class="text-green-500 mr-5" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconDelete class="text-red-500 mr-5" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <!-- Message -->
      <div class="mb-4 prose" v-html="post?.data.attributes.body"></div>
      <!-- Image -->
      <!-- <div class="mb-4">
          <img src="@/assets/123.jpg" alt="Post Image" class="w-full object-fit rounded-md" />
        </div> -->
      <!-- Like and Comment Section -->
      <div class="flex items-center justify-between text-gray-500">
        <div class="flex items-center space-x-2">
          <button class="flex justify-center items-center gap-2 px-2 p-1">
            <svg
              class="w-5 h-5 fill-current hover:scale-125"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z"
                fill="gray"
              />
            </svg>
            <span>42 Likes</span>
          </button>
        </div>
        <button
          class="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1"
        >
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
            class="w-5 h-5 fill-current hovered"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
              ></path>
            </g>
          </svg>
          <span>{{ post?.data.attributes.comments.comment_count }} Comment</span>
        </button>
      </div>
    </div>
  </div>
  <section class="bg-white dark:bg-gray-900 py-5 lg:py-5 antialiased">
    <div class="max-w-2xl mx-auto px-4">
      <!-- Add a comment -->
      <form class="mb-6">
        <div class="flex justify-between space-x-2">
          <div
            class="flex-grow py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border-2 border-gray-300 dark:bg-gray-800 dark:border-gray-700"
          >
            <label for="comment" class="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows="1"
              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <Button type="submit" class="rounded-xl font-semibold"> Post </Button>
        </div>
      </form>
      <!-- Comments -->
      <div v-for="comment in post.data.attributes.comments.data" :key="comment">
        <PostComment :comment="comment" />
        <hr class="mb-3" />
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import PostComment from '@/components/Posts/PostComment.vue'

const post = ref(null)
const props = defineProps(['post'])
post.value = props.post
</script>

//TODO:
