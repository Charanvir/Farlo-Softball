export type StatType = {
  plateApperances: number;
  atBats: number;
  hits: number;
  singles: number;
  doubles: number;
  triples: number;
  homeRuns: number;
  walks: number;
  strikeouts: number;
  battingAverage: number;
  onBasePercentage: number;
  sluggingPercentage: number;
  ops: number;
  sacFly: number;
  year: number;
};

export type PlayerType = {
  firstName: string;
  lastName: string;
  birthDate: string;
  profilePictureName: string;
  actionPictureName: string;
  stats: StatType[];
  _id: number;
};
