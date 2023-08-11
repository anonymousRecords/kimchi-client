import { atom } from "recoil";
import { PhotoFeeling } from "../components/PhotoPage/PhotoFeeling";

export const PhotoFeelingAtom = atom({
  key: "photoFeelingList",
  default: PhotoFeeling[0].beforeImg,
});
