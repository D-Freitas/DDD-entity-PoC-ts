import { SubscriptionId, ProductId } from './aggregates'
import { User } from './user'

const user = User.create({
  id: 'any_id',
  name: 'any_name',
  username: 'any_username',
  password: 'any_password',
  subscriptionId: new SubscriptionId('any_subscription'),
  productId: new ProductId('any_product')
})
console.log(user)
