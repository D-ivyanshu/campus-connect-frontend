<template>
  <aside
    class="fixed top-0 hidden lg:block right-0 z-40 w-64 h-screen pt-12 transition-transform -translate-x-full border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidenav"
  >
    <div class="overflow-y-auto px-3 h-full dark:bg-gray-800 flex flex-col gap-5">
      <div class="h-14 p-3">
        <div class="relative w-full max-w-sm items-center">
          <Input id="search" type="text" placeholder="Search..." class="pl-10 bg-gray-100" />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>

      <!-- Suggestions -->
      <div class="h-44 p-3">
        <h1 class="text-lg font-semibold mb-2">Suggestions</h1>
        <ul class="flex flex-col gap-2">
          <li>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="rounded-full h-10 w-10 mr-1">
                  <img src="@/assets/avatar/avatar1.jpg" class="rounded-full h-10 w-10" alt="" />
                </div>
                <div class="text-[12px]">Dummy gupta</div>
              </div>
              <div class="text-sm">
                <Button class="w-full rounded-2xl h-4 p-3 text-[10px]">follow</Button>
              </div>
            </div>
          </li>
          <li>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="rounded-full h-10 w-10 mr-1">
                  <img src="@/assets/avatar/avatar1.jpg" class="rounded-full h-10 w-10" alt="" />
                </div>
                <div class="text-[12px]">Dummy gupta</div>
              </div>
              <div class="text-sm">
                <Button class="w-full rounded-2xl h-4 p-3 text-[10px]">follow</Button>
              </div>
            </div>
          </li>
          <li>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="rounded-full h-10 w-10 mr-1">
                  <img src="@/assets/avatar/avatar1.jpg" class="rounded-full h-10 w-10" alt="" />
                </div>
                <div class="text-[12px]">Dummy gupta</div>
              </div>
              <div class="text-sm">
                <Button class="w-full rounded-2xl h-4 p-3 text-[10px]">follow</Button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Recommendations -->
      <div class="h-58 flex flex-col gap-2 p-3">
        <h1 class="text-lg font-semibold">Recommendations</h1>
        <div class="flex flex-col gap-2">
          <div class="flex gap-3">
            <div class="rounded-full h-20 w-20 bg-indigo-100">
              <img src="@/assets/logos/programmingclub.png" />
            </div>
            <div class="rounded-full h-20 w-20">
              <img src="@/assets/logos/dhrist.png" class="rounded-full h-20 w-20" />
            </div>
          </div>
          <div class="flex gap-3">
            <div class="rounded-full h-20 w-20 bg-indigo-100">
              <img src="@/assets/logos/knit.jpg" />
            </div>
            <div class="rounded-full h-20 w-20 bg-indigo-100">
              <img src="@/assets/logos/pfac.jpg" class="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
</script>
