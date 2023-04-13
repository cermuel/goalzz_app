import { View, Text, Image } from "react-native";
import React from "react";
import Heading from "../../../ui/shared/Heading";
import { TeamHeadingType } from "../../../../types/team";

const TeamHeadingLayout = (Team: TeamHeadingType) => {
  return (
    <View className="flex flex-row items-center mb-2">
      <Image source={{ uri: Team.image }} className="w-8 border-2 h-8" />
      <Heading text={Team.text} />
    </View>
  );
};

export default TeamHeadingLayout;
