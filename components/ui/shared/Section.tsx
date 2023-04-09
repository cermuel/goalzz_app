import { View, Text } from "react-native";
import React from "react";

const Section = ({ children }: any) => {
  return (
    <View className="flex flex-row items-center justify-between w-full">
      {children}
    </View>
  );
};

export default Section;
