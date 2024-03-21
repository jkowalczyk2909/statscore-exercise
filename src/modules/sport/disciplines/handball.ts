import { SportDiscipline } from "../sport-discipline";
import { OtherSportResult } from "../sport.types";

export class Handball extends SportDiscipline<OtherSportResult> {
  get getEventName(): string {
    return `${this.$result.participant1} vs ${this.$result.participant2}`;
  }

  get getFormattedScore(): string {
    return this.$result.score;
  }
}