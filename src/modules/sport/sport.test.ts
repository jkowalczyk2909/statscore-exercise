import { SportFactory } from "./sport-factory";
import { SportResult } from "./sport.types";
import { InvalidSportException } from "../../exceptions/invalid-sport.exception";

describe("SportFactory.getSport", () => {
  it("should throw InvalidSport exception", () => {
    const mockResult: SportResult = {
      sport: "ski jumping"
    }

    expect(() => SportFactory.getSport(mockResult)).toThrow(InvalidSportException);
  });
});

describe("SportFactory.getSport.getEventName", () => {
  it("should return names of participants with '-' as separator", () => {
    const mockResult: SportResult = {
      sport: "volleyball",
      participant1: "Poland",
      participant2: "Zimbabwe",
      score: '3:0,25:20,25:13,25:22'
    }
    const sport = SportFactory.getSport(mockResult);

    expect(sport.getEventName).toBe("Poland - Zimbabwe");
  });

  it("should return names of participants with 'vs' as separator", () => {
    const mockResult: SportResult = {
      sport: "handball",
      participant1: "KS Warszowice",
      participant2: "AZS Gliwice",
      score: '4:10'
    }
    const sport = SportFactory.getSport(mockResult);

    expect(sport.getEventName).toBe("KS Warszowice vs AZS Gliwice");
  });
});

describe("SportFactory.getSport.getFormattedScore", () => {
  it("should return basketball score", () => {
    const mockResult: SportResult = {
      sport: "basketball",
      participant1: "Houston Rockets",
      participant2: "Chicago Bulls",
      score: [
        ["4:3", "10:3"],
        ["0:7", "3:3"]
      ]
    }
    const sport = SportFactory.getSport(mockResult);

    expect(sport.getFormattedScore).toBe("4:3,10:3,0:7,3:3");
  });

  it("should return tennis score", () => {
    const mockResult: SportResult = {
      sport: "tennis",
      participant1: "Iga Świątek",
      participant2: "Serena Williams",
      score: '3:0,7:6,6:3,7:4'
    }
    const sport = SportFactory.getSport(mockResult);

    expect(sport.getFormattedScore).toBe("Main score: 3:0 (set1 7:6, set2 6:3, set3 7:4)");
  });
});