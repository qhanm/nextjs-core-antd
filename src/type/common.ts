import { MODE_ENUM } from "src/enum/common";

export type TSetting = {
  mode: MODE_ENUM;
};

export type TAppContext = {
  setting: TSetting;
  saveSetting: (setting: TSetting) => void;
};
