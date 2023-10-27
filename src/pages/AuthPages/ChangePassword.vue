<script setup>
import Button from "../../components/Button.vue";
import CustomInput from "../../components/CustomInput.vue";
import AuthLayout from "./AuthLayout.vue";
</script>
<template>
  <AuthLayout>
    <form action="" class="px-10">
      <h1 class="text-2xl font-semibold text-center mb-6">
        Change Your Password
      </h1>

      <div class="flex bg-[#F3F5F9] rounded-lg items-center mb-5 pr-2">
        <CustomInput
          type="password"
          placeholder="Password"
          class="w-full bg-transparent border-none outline-none"
        />
        <i class="ri-eye-line text-primary text-2xl cursor-pointer"></i>
      </div>
      <CustomInput
        type="password"
        placeholder="Confirm Password"
        class="mb-6"
      />
      <Button class="w-full">Change Password</Button>
    </form>
  </AuthLayout>
</template>
<style scoped></style>
