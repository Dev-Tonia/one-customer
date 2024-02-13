<script setup>
import Button from "../../components/Button.vue";
import CustomInput from "../../components/CustomInput.vue";
import AuthLayout from "./AuthLayout.vue";
</script>
<template>
  <AuthLayout>
    <form action="" class="bg-white pt-6 pb-12 px-10">
      <h1 class="text-2xl font-semibold text-center mb-2">Retrieve Password</h1>
      <p class="mb-6 px-10 text-center text-gray-600">
        Please enter your email address below for verification. A link will be
        sent to your email
      </p>
      <CustomInput
        placeholder="johndoe@example.com"
        type="email"
        class="mb-5"
      />
      <RouterLink to="change-password">
        <Button class="w-full">Send Link</Button>
      </RouterLink>

      <p class="text-gray-600 mt-2">
        Remembered Password?
        <RouterLink to="/sign-up" class="text-primary font-semibold"
          >Log In
        </RouterLink>
      </p>
    </form>
  </AuthLayout>
</template>
<style scoped></style>
