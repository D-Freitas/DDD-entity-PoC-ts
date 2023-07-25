import { AggregateRoot } from './aggregate-root'
import { SubscriptionId } from './subscription-id'

type Aggregates = {
  subscriptionId: SubscriptionId
}

type Entity = {
  id: string
  name: string
  username: string
  password: string
}

export class User extends AggregateRoot<[SubscriptionId]> {
  private constructor (
    private readonly _id: string,
    private readonly _name: string,
    private readonly _username: string,
    private readonly _password: string,
    subscriptionId?: SubscriptionId
  ) {
    super()
  }

  static new ({ id, name, username, password, subscriptionId }: Aggregates & Entity): User {
    const user = new User(id, name, username, password, subscriptionId)
    user.movePrivateKeys()
    user.removePrivateKeys()
    user.setAggregates([subscriptionId])
    return user
  }
}
