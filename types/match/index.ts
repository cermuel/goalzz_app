export type MatchCardType = {
  homeTeamImage: string;
  awayTeamImage: string;
  homeTeamName: string;
  awayTeamName: string;
  homeTeamScore: string | number;
  awayTeamScore: string | number;
  status: string;
  dataToPass: MatchDataToPass;
  navigation?: any;
};

export type MatchDataToPass = {
  homeTeamImage: string;
  awayTeamImage: string;
  homeTeamName: string;
  awayTeamName: string;
  homeTeamScore: string | number;
  awayTeamScore: string | number;
  status: string;
};
