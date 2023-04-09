import { Text } from "react-native";
import React from "react";
import { HeadingType } from "../../../types/sharedTypes";
import TextLayout from "../../layouts/textlayout";

const Heading = (Heading: HeadingType) => {
  return (
    <TextLayout extraStyles={"text-lg font-semibold"} text={Heading.text} />
  );
};

export default Heading;
