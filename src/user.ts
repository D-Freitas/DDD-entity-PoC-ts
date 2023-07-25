import { v4 as uuidv4 } from 'uuid'
import { AggregateRoot } from './aggregate-root'

type Aggregates = {
  subscriptionId?: string
}

type Entity = {
  id: string
  name: string
  username: string
  password: string
}

export class User extends AggregateRoot<Aggregates> {
  private constructor (
    private readonly _id: string,
    private readonly _name: string,
    private readonly _username: string,
    private readonly _password: string,
    subscriptionId?: string
  ) {
    super()
  }

  static new ({ id, name, username, password, subscriptionId = uuidv4() }: Aggregates & Entity): User {
    const user = new User(id, name, username, password, subscriptionId)
    user.movePrivateKeys()
    user.removePrivateKeys()
    user.setAggregates({ subscriptionId })
    return user
  }
}
