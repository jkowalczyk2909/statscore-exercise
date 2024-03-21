type Sport = "basketball" | "handball" | "soccer" | "tennis" | "volleyball" | "ski jumping";

type BasketballScore = [[string, string], [string, string]];

interface CommonResult {
  sport: Sport
}

export interface OtherSportResult extends CommonResult {
  sport: Exclude<Sport, "basketball" | "ski jumping">
  participant1: string
  participant2: string
  score: string
}

export interface BasketballResult extends CommonResult {
  sport: "basketball"
  participant1: string
  participant2: string
  score: BasketballScore
}

export interface SkiJumpingResult extends CommonResult {
  sport: "ski jumping"
}

export type SportResult = OtherSportResult | BasketballResult | SkiJumpingResult;