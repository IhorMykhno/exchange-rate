import httpStatus from "http-status";
import { SubscriptionService } from "../services/subscription.service";

export class SubscriptionController {
  static async subscribeUser(req, res, next) {
    const { body } = req;

    console.log('subscribeUser', body);
    try {
      await SubscriptionService.subscribeUser(body.email);
      res.status(httpStatus.OK);
    } catch {
      res.status(httpStatus.BAD_REQUEST);
    }
  }
}
