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
  private constructor (private readonly _props: Props) {
    super()
  }

  static create ({ subscriptionId, productId, ...props }: Aggregates & Props): (User & Props) {
    const user = new User(props)
    user.movePrivateKeys()
    user.removePrivateKeys()
    user.setAggregates([subscriptionId, productId])
    return (user as unknown as User & Props)
  }
}
