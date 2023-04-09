import { View, Text } from "react-native";
import React from "react";
import { ViewAllType } from "../../../types/sharedTypes";

const ViewAll = (ViewAll: ViewAllType) => {
  return (
    <Text
      onPress={ViewAll.action}
      className={`text-gray-500 underline hover:text-pry-color`}
    >
      View All
    </Text>
  );
};

export default ViewAll;
