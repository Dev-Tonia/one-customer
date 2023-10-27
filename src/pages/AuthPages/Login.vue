<script setup>
import Button from "../../components/Button.vue";
import CustomInput from "../../components/CustomInput.vue";
import AuthLayout from "./AuthLayout.vue";
</script>
<template>
  <AuthLayout>
    <form action="" class="px-10">
      <h1 class="text-2xl font-semibold text-center mb-6">Welcome Back</h1>
      <CustomInput
        placeholder="johndoe@example.com"
        type="email"
        class="mb-5"
      />
      <div class="flex bg-[#F3F5F9] rounded-lg items-center mb-5 pr-2">
        <CustomInput
          type="password"
          placeholder="Password"
          class="w-full bg-transparent border-none outline-none"
        />
        <i class="ri-eye-line text-primary text-2xl cursor-pointer"></i>
      </div>
      <div class="min-[450px]:flex justify-between mb-5">
        <div>
          <input type="checkbox" name="" id="remember" />
          <label for="remember" class="ml-2 text-gray-600">Remember Me</label>
        </div>
        <div>
          <RouterLink to="retrieve-password" class="text-primary font-semibold">
            Forget Password?
          </RouterLink>
        </div>
      </div>
      <Button class="w-full">Login</Button>
      <p class="text-gray-600 mt-2">
        Don't have an account?
        <RouterLink to="/sign-up" class="text-primary font-semibold"
          >Sign Up</RouterLink
        >
      </p>
    </form>
  </AuthLayout>
</template>
<style scoped></style>
