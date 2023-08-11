import { atom } from "recoil";
import { FrameColor } from "../components/FramePage/FrameColor";

export const FrameColorAtom = atom({
  key: "frameColorList",
  default: FrameColor[0].color,
});
