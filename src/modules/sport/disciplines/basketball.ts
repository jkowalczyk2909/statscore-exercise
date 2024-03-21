import { SportDiscipline } from "../sport-discipline";
import { BasketballResult } from "../sport.types";

export class Basketball extends SportDiscipline<BasketballResult> {
  get getEventName(): string {
    return `${this.$result.participant1} - ${this.$result.participant2}`;
  }

  get getFormattedScore(): string {
    const [ q1, q2, q3, q4 ] = this.$result.score.flat();

    return `${q1},${q2},${q3},${q4}`;
  }
}