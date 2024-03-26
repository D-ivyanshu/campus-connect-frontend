<template>
  <form class="flex flex-col ml-1 w-full" @submit="onSubmit">
    <div class="flex flex-col w-full">
      <div class="mb-4 w-full">
        <!-- Email -->
        <FormField v-slot="{ componentField }" name="body">
          <FormItem v-auto-animate>
            <FormControl>
              <div class="relative items-center flex">
                <MyEditor v-bind="componentField" class="w-full" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="flex justify-between m-2 items-center">
      <div class="flex space-x-3">
        <div class="flex items-center rounded-full bg-gray-100 pl-3.5 pr-3.5 p-2 hover:bg-gray-200">
          <label for="upload" class="cursor-pointer">
            <IconGallery class="text-green-500" />
            <h1 class="text-slate-500">Image</h1>
          </label>
          <input id="upload" type="file" class="hidden" />
        </div>
        <div
          class="flex items-center rounded-full bg-gray-100 p-1.5 pl-3.5 pr-3.5 hover:bg-gray-200"
        >
          <IconVideo class="text-red-500" />
          <h1 class="text-slate-500">Video</h1>
        </div>
      </div>
      <div></div>

      <Button
        type="submit"
        class="bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-semibold right-0 flex items-center"
      >
        <div>
          <svg
            class="mr-1"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </div>
        Submit Post
      </Button>
    </div>
  </form>
</template>

<script setup>
import { useForm } from 'vee-validate'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { toTypedSchema } from '@vee-validate/zod'
import IconGallery from '@/components/icons/IconGallery.vue'
import IconVideo from '@/components/icons/IconVideo.vue'
import * as z from 'zod'
import Button from '@/components/ui/button/Button.vue'
import MyEditor from '@/components/Posts/MyEditor.vue'
import { useToast } from '@/components/ui/toast/use-toast'
import router from '@/router'

const { toast } = useToast()
import { useStore } from 'vuex'

const formSchema = toTypedSchema(
  z.object({
    body: z.string()
  })
)

const { handleSubmit } = useForm({
  validationSchema: formSchema
})
const store = useStore()

const onSubmit = handleSubmit(async (values) => {
  console.log(values)
  try {
    await store.dispatch('Post/addPost', values)
    toast({
      title: 'Post added successfully'
    })

    router.push('/')
    setTimeout(() => {
      window.location.reload()
    }, 500)
  } catch (error) {
    console.log(error)
    if (error.response?.status === 401) {
      toast({
        title: error.response.data.error,
        variant: 'destructive'
      })
    } else {
      toast({
        title: 'Internal Server Error',
        variant: 'destructive'
      })
    }
  }
})
</script>
