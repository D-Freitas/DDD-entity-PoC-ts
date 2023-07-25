import { AggregateRoot } from './aggregate-root'
import { SubscriptionId, ProductId } from './aggregates'

type Aggregates = {
  subscriptionId: SubscriptionId
  productId: ProductId
}

type Props = {
  id: string
  name: string
  username: string
  password: string
}

export class User extends AggregateRoot<[SubscriptionId, ProductId]> {
  private constructor (
    private readonly _props: Props,
    subscriptionId: SubscriptionId,
    productId: ProductId
  ) {
    super()
  }

  static new ({ id, name, username, password, subscriptionId, productId }: Aggregates & Props): User {
    const user = new User({ id, name, username, password }, subscriptionId, productId)
    user.movePrivateKeys()
    user.removePrivateKeys()
    user.setAggregates([subscriptionId, productId])
    return user
  }
}
