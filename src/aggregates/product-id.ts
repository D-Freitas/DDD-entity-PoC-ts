import { v4 as uuidv4 } from 'uuid'
import { Entity } from '../@shared/values-objects'

export class ProductId extends Entity {
  constructor (
    private readonly _id: string = uuidv4()
  ) {
    super()
  }

  get id (): string {
    return this._id
  }
}
