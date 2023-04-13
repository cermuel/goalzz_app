import { View, Text, Image } from "react-native";
import React from "react";
import { MatchCardType } from "../../../types/match";
import TextLayout from "../../layouts/textlayout";
import SectionLayout from "../../layouts/sectionlayout";
import { handleClick } from "../../../functions/match";

const MatchCard = (Match: MatchCardType, navigation: any) => {
  return (
    <SectionLayout
      extraStyles={"h-20 flex flex-row justify-between items-center"}
      onPress={() => handleClick(Match.navigation, Match.dataToPass)}
    >
      <View className={`flex flex-row gap-2 items-center`}>
        <Text className={`text-xs tracking-tighter font-bold text-pry-color`}>
          {Match.status}
        </Text>
        <View className={`flex space-y-1 justify-center`}>
          <View className="flex flex-row items-center gap-1">
            <Image
              source={{
                uri: Match.homeTeamImage,
              }}
              className="w-4 h-4"
              alt={`${Match.homeTeamName}`}
            />
            <TextLayout
              extraStyles={"text-base font-medium"}
              text={Match.homeTeamName}
            />
          </View>
          <View className="flex flex-row items-center gap-1">
            <Image
              source={{
                uri: Match.awayTeamImage,
              }}
              className="w-4 h-4"
              alt={`${Match.awayTeamName}`}
            />
            <TextLayout
              extraStyles={"text-base font-medium"}
              text={Match.awayTeamName}
            />
          </View>
        </View>
      </View>
      <View className={`flex justify-center`}>
        <TextLayout text={Match.homeTeamScore} extraStyles={"font-bold my-1"} />
        <TextLayout text={Match.awayTeamScore} extraStyles={"font-bold my-1"} />
      </View>
    </SectionLayout>
  );
};

export default MatchCard;
