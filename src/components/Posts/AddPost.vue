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
    <div class="flex bg-red-900 justify-between m-2">
      <div>1</div>
      <Button type="submit" class="rounded-2xl font-semibold right-0"> Submit Post </Button>
    </div>
  </form>
</template>

<script setup>
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import MyEditor from '@/components/Posts/MyEditor.vue'
const content = ref('')

const formSchema = toTypedSchema(
  z.object({
    body: z.string()
  })
)

const { handleSubmit } = useForm({
  validationSchema: formSchema
})

const onSubmit = handleSubmit(async (values) => {
  console.log(values)
})

console.log(content)
</script>
