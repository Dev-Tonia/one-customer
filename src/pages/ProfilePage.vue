<template>
  <div class="bg-white rounded-lg px-8 py-4 mt-6">
    <div class="">
      <h1 class="border-b border-black cursor-pointer">Personal details</h1>
    </div>
    <div class="md:flex items-center md:space-x-12 mt-8">
      <div class="img relative cursor-pointer flex justify-center items-center">
        <div
          class="border rounded-full bg-white relative"
          style="width: 150px; height: 150px"
        >
          <div
            class="rounded-full bg-gray-300 absolute left-0 right-0 bottom-0 top-0 w-full h-full flex items-center justify-center"
          >
            <h1 class="p-3 font-mono" style="font-size: 100px">OA</h1>
          </div>
        </div>
        <i
          class="fa-solid fa-camera absolute right-16 bottom-6 md:right-4 text-blue-ribbon-500 md:bottom-4 bg-white p-3 rounded-full"
        ></i>
        <div
          class="hidden upload absolute top-0 -right-10 shadow-lg bg-white p-4 rounded-lg"
        >
          <div class="file cursor-pointer">
            <label for="img" class="cursor-pointer"
              ><i class="fa-solid fa-image mr-1 cursor-pointer"></i>Upload
              Picture</label
            >
          </div>
        </div>
      </div>
      <div class="right space-y-4">
        <h1 class="text-lg md:text-2xl">John Doe</h1>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 mt-8 overflow-auto">
      <div class="left">
        <ul class="space-y-4">
          <li class="border-b pb-1">Email Address</li>
          <li class="border-b pb-1">Gender</li>
          <li class="border-b pb-1">Phone Number</li>
        </ul>
      </div>
      <div class="right md:col-span-3">
        <ul class="space-y-4">
          <li class="border-b pb-1 pl-5">johndoe@example.com</li>
          <li class="border-b pb-1 pl-5">Female</li>
          <li class="border-b pb-1 pl-5">+2348123456789</li>
        </ul>
      </div>
    </div>
    <button
      class="text-sm text-white bg-blue-ribbon-100 px-4 py-2 rounded-lg mt-4"
      type="button"
      disabled=""
    >
      <i class="fa-solid fa-certificate mr-2"></i>View Certificate
    </button>
  </div>
</template>
<script></script>
<style></style>
