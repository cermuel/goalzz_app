import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { MatchDataToPass } from "../../types/match";
import ScreenLayout from "../../components/layouts/screenlayout";
import Heading from "../../components/ui/shared/Heading";
import Section from "../../components/ui/shared/Section";
import TextLayout from "../../components/layouts/textlayout";

const Match = ({ route }: any) => {
  const match: MatchDataToPass = route.params;
  return (
    <ScreenLayout>
      <View className="bg-pry-color relative w-full flex flex-row justify-between px-6 rounded-md h-40">
        <View className="w-[40%] h-full flex items-center justify-center">
          <Image
            source={{ uri: match.homeTeamImage }}
            className="w-10 h-10 border-[1px]"
          />
          <TextLayout
            text={match.homeTeamName}
            extraStyles={`font-semibold text-base `}
          />
        </View>
        <View className="w-[40%] h-full flex items-center justify-center space-y-2">
          <Image
            source={{ uri: match.homeTeamImage }}
            className="w-10 h-10 border-[1px]"
          />
          <TextLayout
            text={match.homeTeamName}
            extraStyles={`font-semibold text-base `}
          />
        </View>
        <View className="w-full absolute left-6 py-2 h-full flex justify-center items-center z-50">
          <Heading text={match.status} />

          <View className="absolute bottom-1 w-full flex flex-row justify-center">
            <Heading text={"Match Location"} />
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default Match;
