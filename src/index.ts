import { SubscriptionId } from './subscription-id'
import { User } from './user'

const user = User.new({
  id: 'any_id',
  name: 'any_name',
  username: 'any_username',
  password: 'any_password',
  subscriptionId: new SubscriptionId('any_subscription')
})
console.log(user)
