import matches from "@/db/matches";
import { SportFactory } from "@/modules/sport/sport-factory";
import { InvalidSportException } from "@/exceptions/invalid-sport.exception";

const output = [];

for (let game of matches) {
  try {
    const sport = SportFactory.getSport(game);

    output.push({
      name: sport.getEventName,
      score: sport.getFormattedScore
    });
  } catch (error) {
    if (error instanceof InvalidSportException) {
      continue;
    }
  }
}

console.log(output);