import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "item",
  storage: sessionStorage,
});

export const AboutItem = atom({
  key: "aboutItem",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const AboutSeller = atom({
  key: "aboutSeller",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
