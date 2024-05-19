import httpStatus from "http-status";

export class Rate {
  static getRate(req, res, next) {
    try {
      // ToDo Get rate using API
      const fakeRate = { rate: 39.5 };

      res.status(httpStatus.OK).json(fakeRate);
    } catch {
      res.status(httpStatus.BAD_REQUEST);
    }
  }
}
