import { View, Text, Button } from "react-native";
import React from "react";
import Section from "../components/ui/shared/Section";
import Heading from "../components/ui/shared/Heading";
import ViewAll from "../components/ui/shared/ViewAll";
import Logo from "../components/ui/shared/Logo";
import MatchCard from "../components/ui/match";
import { MatchCardDummyData } from "../utils/helpers/match";
import { MatchCardType } from "../types/match";
import ScreenLayout from "../components/layouts/screenlayout";
import TeamCard from "../components/ui/team";
import ProgressBar from "../components/animations/ProgressBar";
import { TeamCardType } from "../types/team";
import { TeamDummyDetails } from "../utils/helpers/team";
import Space from "../components/ui/shared/Space";
import NewsCard from "../components/ui/news";
import { NewsCardType } from "../types/news";
import { NewsDummyData } from "../utils/helpers/news";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }: any) => {
  const match: MatchCardType = MatchCardDummyData;
  const team: TeamCardType = TeamDummyDetails;
  const news: NewsCardType = NewsDummyData;

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <ScreenLayout>
      <ScrollView>
        <Logo />
        <ProgressBar progress={100} />
        <Section>
          <Heading text="Teams" />
          <ViewAll action={() => navigation.navigate("Teams")} />
        </Section>
        <View>
          {arr.slice(0, 8).map((element: number) => (
            <TeamCard image={team.image} name={team.name} id={team.id} />
          ))}
        </View>
        <Space />
        <Section>
          <Heading text="Recent Matches" />
          <ViewAll action={() => navigation.navigate("Matches")} />
        </Section>
        <View>
          {arr.map((element: number) => (
            <MatchCard
              homeTeamName={match.homeTeamName}
              awayTeamName={match.awayTeamName}
              homeTeamScore={match.homeTeamScore}
              awayTeamScore={match.awayTeamScore}
              status={match.status}
              homeTeamImage={match.homeTeamImage}
              awayTeamImage={match.awayTeamImage}
              dataToPass={match.dataToPass}
              navigation={navigation}
            />
          ))}
        </View>
        <Space />
        <Section>
          <Heading text="Latest News" />
          <ViewAll action={() => navigation.navigate("News")} />
        </Section>
        <View>
          {arr.slice(0, 4).map((element: number) => (
            <NewsCard image={news.image} text={news.text} date={news.date} />
          ))}
        </View>

        <View className="h-20 w-full"></View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Home;
