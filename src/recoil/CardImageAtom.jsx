import { atom } from "recoil";

export const CardImageAtom = atom({
  key: "imageListState",
  default: [undefined, undefined, undefined, undefined],
});
