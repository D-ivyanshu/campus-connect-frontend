<template>
  <div class="overflow-hidden">
    <Dialog class="sm:h-10 md:max-w-[425px] lg:max-w-2xl">
      <div class="border rounded-2xl border-gray-100 shadow dark:border-gray-600 mb-4">
        <DialogTrigger class="w-full">
          <div class="p-8 rounded-2xl w-full">
            <div class="flex items-center justify-between mb-4 w-full">
              <div class="flex items-center space-x-2 w-full">
                <img src="@/assets/avatar/avatar3.jpg" class="rounded-full w-10 h-10" />
                <div class="flex-grow">
                  <input
                    class="rounded-full border-2 outline-none pl-5 p-2 w-full relative hover:bg-gray-100"
                    placeholder="Share Something..."
                  />
                </div>
              </div>
            </div>

            <div class="flex justify-between">
              <div class="flex space-x-3">
                <div
                  class="flex items-center rounded-full bg-gray-100 pl-3.5 pr-3.5 hover:bg-gray-200"
                >
                  <IconGallery class="text-green-500" />
                  <h1 class="text-slate-500">Image</h1>
                </div>
                <div
                  class="flex items-center rounded-full bg-gray-100 p-1.5 pl-3.5 pr-3.5 hover:bg-gray-200"
                >
                  <IconVideo class="text-red-500" />
                  <h1 class="text-slate-500">Gifs</h1>
                </div>
              </div>
              <div>
                <Button type="submit" class="rounded-lg bg-slate-800 hover:bg-slate-700"
                  >Post
                </Button>
              </div>
            </div>
          </div>
        </DialogTrigger>
      </div>
      <DialogContent class="sm:max-w-[425px] lg:max-w-2xl overflow-hidden w-full">
        <DialogHeader>
          <DialogTitle class="text-2xl">What is happening ?</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <AddPost />
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
import IconGallery from '@/components/icons/IconGallery.vue'
import IconVideo from '@/components/icons/IconVideo.vue'
import Button from '@/components/ui/button/Button.vue'
import AddPost from '@/components/Posts/AddPost.vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
</script>
