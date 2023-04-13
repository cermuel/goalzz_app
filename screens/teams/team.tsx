import { View, Text } from "react-native";
import React, { useState } from "react";
import { MatchDataToPass } from "../../types/match";
import ScreenLayout from "../../components/layouts/screenlayout";

const Team = () => {
  const [sides, setsides] = useState("Info");
  const sidesArr: string[] = ["Info", "Records"];
  return (
    <ScreenLayout>
      <View className="flex flex-row w-full mt-4">
        {sidesArr.map((side: string) => {
          const activeSide = side == sides;
          return (
            <Text
              key={side}
              className={`w-[50%] text-center cursor-pointer text-lg ${
                activeSide
                  ? "text-pry-color border-b-2 border-b-pry-color font-bold"
                  : "text-gray-500"
              } `}
              onPress={() => setsides(side)}
            >
              {side}
            </Text>
          );
        })}
      </View>
    </ScreenLayout>
  );
};

export default Team;
