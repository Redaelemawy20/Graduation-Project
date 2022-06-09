import { useContext } from "react";
import TranslationContext from "./TranslationContext";

export default (key) => {
  if (!key) return key;
  const array = key.split(".");
  let translation = useContext(TranslationContext);
  for (let item of array) {
    translation = translation[item];
    if (translation === undefined || translation === null) return key;
  }
  return translation;
};
