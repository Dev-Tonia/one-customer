<script setup>
import Button from "../components/Button.vue";
import ContactUsIcon from "../components/ContactUsIcon.vue";
import Layout from "../components/Layout.vue";
</script>
<template>
  <Layout>
    <section
      class="sm:flex justify-between items-center px-6 bg-primary text-white"
    >
      <div class="w-full flex justify-center">
        <ContactUsIcon />
      </div>
      <div class="sm:w-9/12">
        <h1 class="text-4xl font-semibold text-center mb-4">contact Us</h1>
        <p>
          We value your feedback and inquiries. If you have any questions,
          comments, or concerns, please don't hesitate to reach out to us. Our
          dedicated team is here to assist you in any way we can.
        </p>
      </div>
    </section>
    <section class="px-6 py-7">
      <div class="">
        <h2>Alternative Way To Get To Us</h2>
      </div>
      <div class=" ">
        <h3 class="text-xl font-bold">Let's Hear from you.</h3>
        <form action="">
          <div class="form-control mb-2">
            <label for=" name" class="block font-medium text-lg"> Name </label>
            <input type="text" id=" name " placeholder=" Enter your Name" />
          </div>
          <div class="form-control mb-2">
            <label for=" email" class="block font-medium text-lg">
              Email
            </label>
            <input type="email" id=" email " placeholder=" Enter your Email" />
          </div>
          <div class="form-control mb-2">
            <label for=" subject" class="block font-medium text-lg">
              Subject
            </label>
            <input type="text" id=" subject " placeholder="Query header" />
          </div>
          <div class="form-control mb-2">
            <label for=" message" class="block font-medium text-lg">
              Message
            </label>
            <textarea rows="4" placeholder=" Message..."></textarea>
          </div>
          <Button>Send Message </Button>
        </form>
      </div>
    </section>
  </Layout>
</template>

<style scoped>
input,
textarea {
  @apply block w-full py-[10px] px-4  bg-[#F3F5F9] rounded-lg border-2 border-green-500 outline-none;
}

input::placeholder {
  @apply text-xs;
}
</style>
