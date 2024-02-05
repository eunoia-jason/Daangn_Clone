import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "login",
  storage: localStorage,
});

export const Credential = atom({
  key: "credential",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
