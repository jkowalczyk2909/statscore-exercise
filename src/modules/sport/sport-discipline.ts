import { SportResult } from "./sport.types";

export abstract class SportDiscipline<T extends SportResult> {
  constructor(protected $result: T) {}

  abstract get getEventName(): string;

  abstract get getFormattedScore(): string;
}