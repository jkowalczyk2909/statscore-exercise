import { InvalidSportException } from "@/exceptions/invalid-sport.exception";
import { Soccer } from "./disciplines/soccer";
import { Tennis } from "./disciplines/tennis";
import { SportResult } from "./sport.types";
import { Basketball } from "./disciplines/basketball";
import { Handball } from "./disciplines/handball";
import { Volleyball } from "./disciplines/volleyball";

export class SportFactory {
  static getSport(result: SportResult) {
    switch (result.sport) {
      case "soccer":
        return new Soccer(result);
      case "tennis":
        return new Tennis(result);
      case "basketball":
        return new Basketball(result);
      case "handball":
        return new Handball(result);
      case "volleyball":
        return new Volleyball(result);

      default:
        throw new InvalidSportException();
    }
  }
}
