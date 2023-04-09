import { MatchCardType, MatchDataToPass } from "../../../types/match";

const DummyDataToPass: MatchDataToPass = {
  homeTeamName: "Man City",
  awayTeamName: "Man United",
  homeTeamImage: "https://a.espncdn.com/i/teamlogos/soccer/500/382.png",
  awayTeamImage: "https://a.espncdn.com/i/teamlogos/soccer/500/360.png",
  status: "FT",
  homeTeamScore: 6,
  awayTeamScore: 3,
};
export const MatchCardDummyData: MatchCardType = {
  homeTeamName: "Man City",
  awayTeamName: "Man United",
  homeTeamImage: "https://a.espncdn.com/i/teamlogos/soccer/500/382.png",
  awayTeamImage: "https://a.espncdn.com/i/teamlogos/soccer/500/360.png",
  homeTeamScore: 6,
  awayTeamScore: 3,
  status: "FT",
  dataToPass: DummyDataToPass,
};
