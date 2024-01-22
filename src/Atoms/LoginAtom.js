import { atom } from "recoil";

export const Credential = atom({
  key: "credential",
  default: null,
});

export const AccessToken = atom({
  key: "accessToken",
  default: localStorage.getItem("accessToken"),
});
