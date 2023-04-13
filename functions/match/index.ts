import { MatchDataToPass } from "../../types/match";

export const handleClick = (navigation: any, data: MatchDataToPass) => {
  navigation.navigate("Matches", { screen: "Match", params: data });
};
