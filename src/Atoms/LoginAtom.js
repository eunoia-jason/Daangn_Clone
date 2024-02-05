import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const Credential = atom({
  key: "credential",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
