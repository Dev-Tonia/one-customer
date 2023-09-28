<script setup>
const { networkProvider } = defineProps(["networkProvider"]);
import { useBuyData } from "../store/buyData";

const dataOption = useBuyData();
// const dataOption = ref(" ");
</script>
<template>
  <div class="select bg-[#F3F5F9]">
    <select
      id="account_type"
      name="account_type"
      class="bg-[#F3F5F9]"
      v-model="dataOption.selectOption"
    >
      <option value="" selected disabled>Select Your Data Plan</option>
      <option
        v-for="items in networkProvider"
        :value="items"
        :key="items.value"
      >
        {{ items.title }}
      </option>
    </select>
    <span class="focus"></span>
  </div>
</template>
<style scoped>
select {
  appearance: none;
  /* safari */
  -webkit-appearance: none;
  /* other styles for aesthetics */
  width: 100%;
  font-size: 14px;
  padding: 10px;
  /* border: 1px solid #caced1; */
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
  outline: none;
  display: grid;
}
select::-ms-expand {
  display: none;
}
.select {
  width: 100%;
  /* border: 1px solid var(--select-border); */
  border-radius: 0.25em;
  /* padding: 0.25em 0.5em; */
  font-size: 14px;
  cursor: pointer;
  line-height: 1.1;
  /* background-image: linear-gradient(to top, #f9f9f9, #fff 33%); */
  grid-template-areas: "select";
  align-items: center;
  position: relative;
}
.select::after {
  content: "";
  width: 0.8em;
  height: 0.5em;
  /* background-color: var(--select-arrow); */
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}

select,
.select:after {
  grid-area: select;
  justify-self: end;
}
select:focus + .focus {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  /* border: 2px solid var(--select-focus); */
  border-radius: inherit;
}
/* .select:not(.select--multiple)::after */
</style>
