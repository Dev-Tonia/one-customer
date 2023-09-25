import { defineStore } from "pinia";
export const useNetworkProvider = defineStore("networkProvider", {
  state: () => ({
    providers: [
      {
        name: "MTN",
        img: "https://res.cloudinary.com/tonia/image/upload/v1695643582/images/MTN_ddee4o.jpg",
      },
      {
        name: "AIRTEL",
        img: "https://res.cloudinary.com/tonia/image/upload/v1695643582/images/Airtel_crpbkp.jpg",
      },
      {
        name: "GLO",
        img: "https://res.cloudinary.com/tonia/image/upload/v1695643582/images/glo_rxkyg1.jpg",
      },
      {
        name: "9MOBILE",
        img: "https://res.cloudinary.com/tonia/image/upload/v1695643582/images/9mobile2_lywgta.jpg",
      },
    ],
  }),
});
