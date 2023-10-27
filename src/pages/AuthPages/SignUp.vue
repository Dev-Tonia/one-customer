<script setup>
import Button from "../../components/Button.vue";
import CustomInput from "../../components/CustomInput.vue";
import AuthLayout from "./AuthLayout.vue";
</script>
<template>
  <AuthLayout>
    <form action="" class="px-10">
      <h1 class="text-2xl font-semibold text-center mb-6">
        Create Your Account
      </h1>
      <CustomInput placeholder="John Doe" type="text" class="mb-5" />
      <CustomInput
        placeholder="johndoe@example.com"
        type="email"
        class="mb-5"
      />
      <CustomInput placeholder="1234567890" type="tel" class="mb-5" />
      <!-- <CustomInput placeholder="Password" type="password" class="mb-5" /> -->
      <div class="flex bg-[#F3F5F9] rounded-lg items-center mb-5 pr-2">
        <CustomInput
          type="password"
          placeholder="Password"
          class="w-full bg-transparent border-none outline-none"
        />
        <i class="ri-eye-line text-primary text-2xl cursor-pointer"></i>
      </div>
      <CustomInput
        placeholder="confirm Password"
        type="password"
        class="mb-5"
      />

      <Button class="w-full">Sign up</Button>
      <p class="text-gray-600 mt-2">
        Already has an account?
        <RouterLink to="/login" class="text-primary font-semibold"
          >Log in</RouterLink
        >
      </p>
    </form>
  </AuthLayout>
</template>
<style scoped></style>
