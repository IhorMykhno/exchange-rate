export { Subscriber } from "../models";

export class SubscriptionService {
  static async subscribeUser(email) {
    return await Subscriber.create({ email });
  }
}
