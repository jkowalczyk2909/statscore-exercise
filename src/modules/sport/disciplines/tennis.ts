import { SportDiscipline } from "../sport-discipline";
import { OtherSportResult } from "../sport.types";

export class Tennis extends SportDiscipline<OtherSportResult> {
  get getEventName(): string {
    return `${this.$result.participant1} vs ${this.$result.participant2}`;
  }

  get getFormattedScore(): string {
    const regex = new RegExp( /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/);
    const [ , mainScore, set1, set2, set3 ] = this.$result.score.match(regex) ?? [];
  
    return `Main score: ${mainScore} (set1 ${set1}, set2 ${set2}, set3 ${set3})`
  }
}