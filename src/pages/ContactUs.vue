<script setup>
import Button from "../components/Button.vue";
import ContactUsIcon from "../components/ContactUsIcon.vue";
</script>
<template>
  <section
    class="sm:flex justify-between items-center px-6 bg-primary text-white"
  >
    <div class="sm:w-5/12">
      <h1 class="text-4xl font-semibold text-center mb-4 sm:hidden">
        contact Us
      </h1>

      <div class="w-full flex justify-center">
        <ContactUsIcon />
      </div>
    </div>

    <div class="sm:w-7/12">
      <h1 class="text-4xl font-semibold text-center mb-4 hidden sm:block">
        contact Us
      </h1>
      <p class="pb-7 sm:pb-0">
        We value your feedback and inquiries. If you have any questions,
        comments, or concerns, please don't hesitate to reach out to us. Our
        dedicated team is here to assist you in any way we can.
      </p>
    </div>
  </section>
  <section class="wrapper py-7 gap-3 items-center sm:flex">
    <div class="">
      <h2 class="text-2xl font-semibold mb-4">Get In Touch</h2>
      <!-- <i class="ri-map-pin-fill"></i> -->
      <div class="mb-5">
        <span class="inline-block bg-primary bg-opacity-10 py-2 px-3 rounded-lg"
          ><i class="ri-mail-send-fill text-4xl text-black/80"></i
        ></span>
        <span>
          <a href="mailto:complaints@easypaybills.ng">
            complaints@easypaybills.ng</a
          ></span
        >
      </div>
      <!-- <i class="ri-smartphone-fill"></i> -->
      <div class="mb-5">
        <span class="inline-block bg-primary bg-opacity-10 py-2 px-3 rounded-lg"
          ><i class="ri-map-pin-fill text-4xl text-black/80"></i
        ></span>
        <span> 6B Peter Odili Rd, Port Harcourt, Rivers, Nigeria.</span>
      </div>
      <div class="mb-5 flex gap-2 item-center">
        <span class="inline-block bg-primary bg-opacity-10 py-2 px-3 rounded-lg"
          ><i class="ri-smartphone-fill text-4xl text-black/80"></i
        ></span>
        <span class="flex flex-col">
          <a href="tel:+2349087610511">+2349087610511</a>
          <a
            href="https://api.whatsapp.com/send?phone=2349087610379"
            target="_blank"
            rel="noopener noreferrer"
            >+2349087610379</a
          >
        </span>
      </div>
    </div>
    <div class="sm:w-8/12">
      <h3 class="text-2xl font-semibold">Let's Hear from you.</h3>
      <form action="">
        <div class="form-control mb-2">
          <label for=" name" class="block font-medium text-lg"> Name </label>
          <input type="text" id=" name " placeholder=" Enter your Name" />
        </div>
        <div class="form-control mb-2">
          <label for=" email" class="block font-medium text-lg"> Email </label>
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
