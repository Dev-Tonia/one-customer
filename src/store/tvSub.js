import { defineStore } from "pinia";
export const useTvProviders = defineStore("tvProviders", {
  state: () => ({
    providers: [
      {
        name: "DSTV",
        img: "https://res.cloudinary.com/tonia/image/upload/v1695947378/dstv-logo_ar9ecz.png",
      },
      {
        name: "GOTV",
        img: "https://res.cloudinary.com/tonia/image/upload/v1695947378/gotv-logo_jkdaj8.webp",
      },
      {
        name: "STARTIMES",
        img: "https://res.cloudinary.com/tonia/image/upload/v1695947378/startimelogo_is8qcm.jpg",
      },
    ],
    selectCableProvider: {},
  }),
});
