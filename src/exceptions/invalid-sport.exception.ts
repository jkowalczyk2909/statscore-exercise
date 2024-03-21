export class InvalidSportException extends Error {
  constructor() {
    super("Invalid sport");

    Object.setPrototypeOf(this, InvalidSportException.prototype);
  }
}