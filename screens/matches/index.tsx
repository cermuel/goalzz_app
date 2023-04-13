import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import TeamHeadingLayout from "../../components/layouts/team/teamHeadingLayout";
import ScreenLayout from "../../components/layouts/screenlayout";
import Space from "../../components/ui/shared/Space";
import { MatchCardType } from "../../types/match";
import { MatchCardDummyData } from "../../utils/helpers/match";
import MatchCard from "../../components/ui/match";

const Matches = () => {
  const match: MatchCardType = MatchCardDummyData;

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <ScreenLayout extraStyles={"px-4"}>
      <ScrollView>
        <Space />
        <TeamHeadingLayout image="jsh" text="English Premier League" />
        <View>
          {arr.slice(0, 6).map((element: number) => (
            <MatchCard
              homeTeamName={match.homeTeamName}
              awayTeamName={match.awayTeamName}
              homeTeamScore={match.homeTeamScore}
              awayTeamScore={match.awayTeamScore}
              status={match.status}
              homeTeamImage={match.homeTeamImage}
              awayTeamImage={match.awayTeamImage}
              dataToPass={match.dataToPass}
            />
          ))}
        </View>
        <Space />
        <TeamHeadingLayout image="jsh" text="English Premier League" />
        <View>
          {arr.slice(0, 6).map((element: number) => (
            <MatchCard
              homeTeamName={match.homeTeamName}
              awayTeamName={match.awayTeamName}
              homeTeamScore={match.homeTeamScore}
              awayTeamScore={match.awayTeamScore}
              status={match.status}
              homeTeamImage={match.homeTeamImage}
              awayTeamImage={match.awayTeamImage}
              dataToPass={match.dataToPass}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Matches;
