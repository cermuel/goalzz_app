import { View, Text, Image, Alert } from "react-native";
import React from "react";
import TextLayout from "../../layouts/textlayout";
import { FontAwesome5 } from "@expo/vector-icons";
import useDark from "../../../hooks/useDark";
import { TeamCardType } from "../../../types/team";

const TeamCard = (Team: TeamCardType) => {
  const { isDark } = useDark();
  return (
    <View
      className={`w-full px-2 border-b-[1.2px] ${
        isDark ? "border-b-gray-600" : "border-b-gray-400"
      } rounded-md flex flex-row h-20 items-center justify-between`}
    >
      <View className="flex flex-row items-center space-x-2">
        <Image
          source={{
            uri: Team.image,
          }}
          className="w-10 h-10"
          alt=""
        />
        <TextLayout text={Team.name} extraStyles={"font-bold text-lg"} />
      </View>
      <View>
        <FontAwesome5
          name="chevron-right"
          size={16}
          color={isDark ? "#eee" : "#111"}
          onPress={() => Alert.alert(Team.id.toString())}
        />
      </View>
    </View>
  );
};

export default TeamCard;
