import { atom } from "recoil";

/**
 *problem see if we can give null and then assign token on signup
 */
export let personAtom = atom({
  key: "personAtom",
  default: null,
});
