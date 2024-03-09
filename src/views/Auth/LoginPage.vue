<template>
  <div class="h-screen md:flex">
    <!-- Image side -->
    <div class="relative overflow-hidden md:flex w-1/2 justify-around items-center hidden">
      <img src="@/assets/login-page.jpg" alt="" class="object-cover w-full h-full" />
    </div>

    <!-- Form Side -->
    <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form class="flex flex-col py-10 ml-1" @submit="onSubmit">
        <!-- TODO: FIX THIS LOGO HERE -->
        <!-- logo -->
        <router-link to="/">
          <img src="@/assets/logo-campus-connect.png" alt="" class="h-20" />
        </router-link>
        <h1 class="font-bold text-3xl mb-5">Login</h1>
        <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
        <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

        <div class="flex flex-col w-80">
          <div class="mb-4">
            <!-- Email -->
            <FormField v-slot="{ componentField }" name="email">
              <FormItem v-auto-animate>
                <FormControl>
                  <div class="relative w-full max-w-sm items-center">
                    <Input
                      type="text"
                      placeholder="Email"
                      class="border-2 pl-10 py-5 w-full rounded-2xl text-[16px]"
                      v-bind="componentField"
                    />
                    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                      <IconEmail />
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>

          <div class="mb-4">
            <!-- Password -->
            <FormField v-slot="{ componentField }" name="password">
              <FormItem v-auto-animate>
                <FormControl>
                  <div class="relative w-full max-w-sm items-center">
                    <Input
                      type="password"
                      placeholder="Password"
                      class="border-2 pl-10 py-5 w-full rounded-2xl outline-none text-[16px]"
                      v-bind="componentField"
                    />
                    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                      <IconLock />
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </div>

        <!-- Submit Button -->
        <Button type="submit" class="w-full rounded-2xl font-semibold"> Login </Button>

        <p class="text-sm text-gray-400 space-x-2 mt-2">
          Don't have an account?
          <span class="text-indigo-500 text-sm"><a href="/register">Register</a></span>
        </p>
        <p class="text-sm text-gray-400">
          Forgot Password?
          <span class="text-indigo-500 text-sm"><a href="/forgotpassword">Reset Password</a></span>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
// import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import IconEmail from '@/components/icons/IconEmail.vue'
import IconLock from '@/components/icons/IconLock.vue'

import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
// import { useToast } from '@/components/ui/toast/use-toast'

// const { toast } = useToast()

const formSchema = toTypedSchema(
  z.object({
    email: z
      .string()
      .email({ message: 'Invalid email format' })
      .refine((value) => value.endsWith('@knit.ac.in'), {
        message: 'Email must have the domain knit.ac.in'
      }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .max(50, { message: 'Password cannot exceed 50 characters' })
  })
)

const { handleSubmit } = useForm({
  validationSchema: formSchema
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
  //TODO: ADD A TOAST HERE
})
</script>
