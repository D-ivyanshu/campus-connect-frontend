<template>
  <div class="mt-10">
    <form class="space-y-8" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel>Your name</FormLabel>
          <FormControl>
            <!-- <Input type="text" placeholder="Name" v-bind="componentField" /> -->
            <div class="flex items-center space-x-10">
              <div class="w-16 h-16 rounded-full">
                <img src="@/assets/avatar/avatar1.jpg" class="rounded-full" alt="" />
              </div>
              <div>
                <!-- <Select class="w-full">
                  <SelectTrigger>
                    <SelectValue
                      :value="selectedAvatar || null"
                      placeholder="Default avatar"
                      class="text-slate-500"
                      v-bind="componentField"
                    />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="avatar1.jpg" >
                        <img
                          src="@/assets/avatar/avatar1.jpg"
                          class="h-10 w-10 rounded-full"
                          alt=""
                        />
                      </SelectItem>
                      <SelectItem value="avatar2.jpg">
                        <img
                          src="@/assets/avatar/avatar2.jpg"
                          class="h-10 w-10 rounded-full"
                          alt=""
                        />
                      </SelectItem>
                      <SelectItem value="avatar3.jpg">
                        <img
                          src="@/assets/avatar/avatar3.jpg"
                          class="h-10 w-10 rounded-full"
                          alt=""
                        />
                      </SelectItem>
                      <SelectItem value="avatar4.jpg">
                        <img
                          src="@/assets/avatar/avatar4.jpg"
                          class="h-10 w-10 rounded-full"
                          alt=""
                        />
                      </SelectItem>
                      <SelectItem value="avatar5.jpg">
                        <img
                          src="@/assets/avatar/avatar5.jpg"
                          class="h-10 w-10 rounded-full"
                          alt=""
                        />
                      </SelectItem>
                      <SelectItem value="avatar6.png">
                        <img
                          src="@/assets/avatar/avatar6.png"
                          class="h-10 w-10 rounded-full"
                          alt=""
                        />
                      </SelectItem>
                      <SelectItem value="avatar7.jpg">
                        <img
                          src="@/assets/avatar/avatar7.jpg"
                          class="h-10 w-10 rounded-full"
                          alt=""
                        />
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select> -->
              </div>
              <div>
                <Button>Upload </Button>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel>Your avatar</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Name" v-bind="componentField" @select="handleSelect" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="about">
        <FormItem>
          <FormLabel>About</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us a little bit about yourself ..."
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="course">
        <FormItem>
          <FormLabel>Course</FormLabel>
          <FormControl>
            <Select class="w-full">
              <SelectTrigger>
                <SelectValue
                  placeholder="Select your course"
                  class="text-gray-500"
                  v-bind="componentField"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="btech"> Bachelor of Technology </SelectItem>
                  <SelectItem value="mca"> Master of Computer Applications </SelectItem>
                  <SelectItem value="mtech"> Master of Technology </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="branch">
        <FormItem>
          <FormLabel>Branch</FormLabel>
          <FormControl>
            <Select class="w-full">
              <SelectTrigger>
                <SelectValue
                  placeholder="Select your branch"
                  class="text-slate-500"
                  v-bind="componentField"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="cse"> Computer Science and Engineering </SelectItem>
                  <SelectItem value="it"> Information Technology </SelectItem>
                  <SelectItem value="ece"> Electronics and Communication Engineering </SelectItem>
                  <SelectItem value="el"> Electrical Engineering </SelectItem>
                  <SelectItem value="me"> Mechanical Engineering </SelectItem>
                  <SelectItem value="civ"> Civil Engineering </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="year">
        <FormItem>
          <FormLabel>Year</FormLabel>
          <FormControl>
            <Select class="w-full">
              <SelectTrigger>
                <SelectValue
                  placeholder="Select your year"
                  class="text-slate-500"
                  v-bind="componentField"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1"> 1st Year </SelectItem>
                  <SelectItem value="2"> 2nd Year </SelectItem>
                  <SelectItem value="3"> 3rd Year </SelectItem>
                  <SelectItem value="4"> 4th Year </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="flex gap-2 justify-start">
        <Button type="submit"> Update profile </Button>
        <Button type="button" variant="outline" @click="resetForm"> Reset form </Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FieldArray } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

// const profileFormSchema = toTypedSchema(
//   z.object({
//     username: z
//       .string()
//       .min(2, {
//         message: 'Username must be at least 2 characters.'
//       })
//       .max(30, {
//         message: 'Username must not be longer than 30 characters.'
//       }),
//     email: z
//       .string({
//         required_error: 'Please select an email to display.'
//       })
//       .email(),
//     bio: z
//       .string()
//       .max(160, { message: 'Bio must not be longer than 160 characters.' })
//       .min(4, { message: 'Bio must be at least 2 characters.' }),
//     urls: z
//       .array(
//         z.object({
//           value: z.string().url({ message: 'Please enter a valid URL.' })
//         })
//       )
//       .optional()
//   })
// )

const onSubmit = (values) => {
  console.log(values)
}
</script>
